require("dotenv").config();
const axios = require("axios");
const crypto = require("crypto");

// ==========================================
// CONFIGURATION
// ==========================================
const MODE = process.env.TRIPAY_MODE || "sandbox";

const CONFIG = {
  sandbox: {
    baseUrl: "https://tripay.co.id/api-sandbox",
    apiKey: process.env.TRIPAY_SANDBOX_API_KEY,
    privateKey: process.env.TRIPAY_SANDBOX_PRIVATE_KEY,
    merchantCode: process.env.TRIPAY_SANDBOX_MERCHANT_CODE
  },
  production: {
    baseUrl: "https://tripay.co.id/api",
    apiKey: process.env.TRIPAY_PROD_API_KEY,
    privateKey: process.env.TRIPAY_PROD_PRIVATE_KEY,
    merchantCode: process.env.TRIPAY_PROD_MERCHANT_CODE
  }
};

if (!CONFIG[MODE]) {
  throw new Error("Invalid TRIPAY_MODE (sandbox | production)");
}

const TripayConfig = {
  mode: MODE,
  baseUrl: CONFIG[MODE].baseUrl,
  apiKey: CONFIG[MODE].apiKey,
  privateKey: CONFIG[MODE].privateKey,
  merchantCode: CONFIG[MODE].merchantCode
};

// ==========================================
// PAYMENT CHANNELS & INSTRUCTIONS
// ==========================================

/**
 * Get payment instruction for specific payment method
 * @param {string} code - Payment method code
 * @returns {Object} Payment instruction response
 */
async function getPaymentInstruction(code) {
  const res = await axios.get(
    `${TripayConfig.baseUrl}/payment/instruction`,
    {
      params: { code },
      headers: { Authorization: `Bearer ${TripayConfig.apiKey}` }
    }
  );

  return {
    mode: TripayConfig.mode,
    status: res.status,
    headers: res.headers,
    data: res.data
  };
}

/**
 * Get all active payment channels
 * @returns {Object} Active payment channels response
 */
async function getActivePaymentChannels() {
  const res = await axios.get(
    `${TripayConfig.baseUrl}/merchant/payment-channel`,
    {
      headers: { Authorization: `Bearer ${TripayConfig.apiKey}` }
    }
  );

  return {
    mode: TripayConfig.mode,
    status: res.status,
    headers: res.headers,
    data: res.data
  };
}

// ==========================================
// FEE CALCULATOR
// ==========================================

/**
 * Calculate fee for specific payment method and amount
 * @param {string} code - Payment method code
 * @param {number} amount - Transaction amount
 * @returns {Object} Fee calculation response
 */
async function calculateFee(code, amount) {
  const res = await axios.get(
    `${TripayConfig.baseUrl}/merchant/fee-calculator`,
    {
      params: { code, amount },
      headers: { Authorization: `Bearer ${TripayConfig.apiKey}` }
    }
  );

  return {
    mode: TripayConfig.mode,
    status: res.status,
    headers: res.headers,
    amount,
    data: res.data
  };
}

/**
 * Calculate total amount including admin fee
 * @param {number} amount - Base transaction amount
 * @param {Object} feeResponse - Response from calculateFee function
 * @returns {Object|null} Total amount breakdown
 */
function calculateTotalAmount(amount, feeResponse) {
  const channel = feeResponse?.data?.data?.[0];
  if (!channel) return null;

  const adminFee = channel.total_fee.customer || 0;

  return {
    amount,
    admin_fee: adminFee,
    total: amount + adminFee
  };
}

// ==========================================
// TRANSACTION CREATION
// ==========================================

/**
 * Create new transaction
 * @param {Object} params - Transaction parameters
 * @param {string} params.method - Payment method code
 * @param {string} params.merchant_ref - Merchant reference number
 * @param {number} params.amount - Transaction amount
 * @param {number} params.expired_time - Expiration time in seconds
 * @param {Object} params.customer - Customer information
 * @param {string} params.customer.name - Customer name
 * @param {string} params.customer.email - Customer email
 * @param {string} params.customer.phone - Customer phone
 * @param {Array} params.order_items - Array of order items
 * @param {string} params.return_url - Return URL after payment
 * @param {string} params.webhook_url - Webhook URL for payment notification
 * @returns {Object} Transaction creation response
 */
async function createTransaction(params) {
  const {
    method,
    merchant_ref,
    amount,
    expired_time,
    customer,
    order_items,
    return_url,
    webhook_url
  } = params;

  // ===== VALIDATION =====
  if (!method) throw new Error("method is required");
  if (!merchant_ref) throw new Error("merchant_ref is required");
  if (!amount || isNaN(amount)) throw new Error("amount is required");
  if (!expired_time) throw new Error("expired_time is required");
  if (!return_url) throw new Error("return_url is required");
  if (!webhook_url) throw new Error("webhook_url is required");

  if (!Array.isArray(order_items) || order_items.length === 0) {
    throw new Error("order_items is required");
  }

  if (!customer?.name || !customer?.email || !customer?.phone) {
    throw new Error("customer data is incomplete");
  }

  // ===== SIGNATURE =====
  const signature = crypto
    .createHmac("sha256", TripayConfig.privateKey)
    .update(
      TripayConfig.merchantCode +
      merchant_ref +
      amount
    )
    .digest("hex");

  // ===== PAYLOAD =====
  const payload = {
    method,
    merchant_ref,
    amount,
    customer_name: customer.name,
    customer_email: customer.email,
    customer_phone: customer.phone,
    order_items,
    return_url,
    callback_url: webhook_url,
    expired_time,
    signature
  };

  // ===== REQUEST =====
  const response = await axios.post(
    `${TripayConfig.baseUrl}/transaction/create`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${TripayConfig.apiKey}`
      },
      validateStatus: () => true // RETURN ALL RESPONSE
    }
  );

  // ===== FULL RESPONSE =====
  return {
    mode: TripayConfig.mode,
    merchant_code: TripayConfig.merchantCode,
    status: response.status,
    headers: response.headers,
    payload,
    data: response.data
  };
}

// ==========================================
// TRANSACTION CHECKING
// ==========================================

/**
 * Check transaction status
 * @param {string} reference - Tripay reference number
 * @returns {Object} Transaction status response
 */
async function cekTransaksi(reference) {
  if (!reference) {
    throw new Error("reference is required");
  }

  const response = await axios.get(
    `${TripayConfig.baseUrl}/transaction/check-status`,
    {
      params: { reference },
      headers: {
        Authorization: `Bearer ${TripayConfig.apiKey}`
      },
      validateStatus: () => true // return all status
    }
  );

  return {
    mode: TripayConfig.mode,
    status: response.status,
    headers: response.headers,
    reference,
    data: response.data
  };
}

/**
 * Get transaction detail
 * @param {string} reference - Tripay reference number
 * @returns {Object} Transaction detail response
 */
async function cekDetailTransaksi(reference) {
  if (!reference) {
    throw new Error("reference is required");
  }

  const response = await axios.get(
    `${TripayConfig.baseUrl}/transaction/detail`,
    {
      params: { reference },
      headers: {
        Authorization: `Bearer ${TripayConfig.apiKey}`
      },
      validateStatus: () => true
    }
  );

  return {
    mode: TripayConfig.mode,
    status: response.status,
    headers: response.headers,
    reference,
    data: response.data
  };
}

/**
 * Get merchant transaction list
 * @param {number} page - Page number (default: 1)
 * @param {number} perPage - Items per page (default: 25)
 * @returns {Object} Transaction list response
 */
async function getMerchantTransactions(page = 1, perPage = 25) {
  const res = await axios.get(
    `${TripayConfig.baseUrl}/merchant/transactions`,
    {
      params: {
        page,
        per_page: perPage
      },
      headers: { Authorization: `Bearer ${TripayConfig.apiKey}` }
    }
  );

  return {
    mode: TripayConfig.mode,
    status: res.status,
    headers: res.headers,
    pagination: {
      page,
      per_page: perPage
    },
    data: res.data
  };
}

// ==========================================
// EXPORTS
// ==========================================

module.exports = {
  // Config
  TripayConfig,
  
  // Payment Channels & Instructions
  getPaymentInstruction,
  getActivePaymentChannels,
  
  // Fee Calculator
  calculateFee,
  calculateTotalAmount,
  
  // Transaction Management
  createTransaction,
  cekTransaksi,
  cekDetailTransaksi,
  getMerchantTransactions
};