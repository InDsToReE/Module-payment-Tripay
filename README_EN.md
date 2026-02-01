# 💳 Tripay Payment Gateway Integration

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-14%2B-green?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Tripay](https://img.shields.io/badge/Tripay-Payment%20Gateway-orange?style=for-the-badge)

**Complete Tripay Payment Gateway Integration with Node.js**  
*Easy, Fast, and Professional*

[Demo](#-demo) • [Installation](#-installation) • [Documentation](#-documentation) • [Features](#-features)

[🇮🇩 Bahasa Indonesia](README.md) • [🇬🇧 English](README_EN.md)

</div>

---

## 📋 Table of Contents

- [About Project](#-about-project)
- [Key Features](#-key-features)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Payment Channels](#-payment-channels)
- [Workflow](#-workflow)
- [Code Examples](#-code-examples)
- [API Reference](#-api-reference)
- [Testing](#-testing)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About Project

This project is a **complete implementation** for integration with **Tripay Payment Gateway**, supporting various popular payment methods in Indonesia such as Virtual Account, E-Wallet, QRIS, and Retail.

### 🎨 Why Tripay?

- ✅ **Multi Payment Method** - 21+ payment channels
- ✅ **Real-time Notification** - Automatic webhook callback
- ✅ **Easy Integration** - Easy-to-use API
- ✅ **Competitive Fee** - Competitive admin fees
- ✅ **Reliable** - 99.9% uptime

---

## ✨ Key Features

### 🎯 Core Features

| Feature | Description |
|---------|-------------|
| 🏦 **Virtual Account** | BCA, BNI, BRI, Mandiri, Permata, etc. |
| 💰 **E-Wallet** | OVO, DANA, ShopeePay |
| 📱 **QRIS** | QR Code for all e-wallets |
| 🏪 **Retail** | Alfamart, Indomaret, Alfamidi |
| 📊 **Fee Calculator** | Calculate admin fees automatically |
| 🔍 **Transaction Status** | Check transaction status in real-time |
| 📜 **Transaction List** | List all merchant transactions |
| 🎫 **Payment Instruction** | Payment guide per channel |

### 🛠️ Technical Features

- ✅ **Interactive CLI** - Interactive menu in terminal
- ✅ **Environment Config** - Configuration via `.env` file
- ✅ **Error Handling** - Comprehensive error handling
- ✅ **Input Validation** - Automatic user input validation
- ✅ **Full Response** - Return all data from API
- ✅ **Signature Generation** - Automatic signature generation
- ✅ **Modular Code** - Clean code structure

---

## 🚀 Installation

### 📦 Prerequisites

Make sure you have installed:
- **Node.js** version 14 or higher
- **npm** or **yarn**
- **Git**

### 📥 Clone Repository

```bash
git clone https://github.com/InDsToReE/Module-payment-Tripay.git
cd Module-payment-Tripay
```

### 📚 Install Dependencies

**The `package.json` file is already in the root folder.** Just run:

```bash
npm install
```

Dependencies to be installed:
- `axios` - HTTP client for API calls
- `dotenv` - Environment variable management

> 💡 **Note:** The `package.json` file is already provided in the repository. You **DO NOT need** to create a new file. Just clone the repository and run `npm install`.

---

## ⚙️ Configuration

### 1️⃣ Setup Environment Variables

**IMPORTANT:** After cloning the repository, rename the `env` file to `.env`

```bash
# In terminal, run:
mv env .env

# Or manually:
# - Rename 'env' file to '.env'
# - Make sure the file name is '.env' (with a dot in front)
```

### 2️⃣ Edit `.env` File

Open the `.env` file and fill in your Tripay credentials:

```env
# Mode: sandbox for testing, production for live
TRIPAY_MODE=sandbox

# ===== SANDBOX (for testing) =====
TRIPAY_SANDBOX_API_KEY=DEV-xxxxxxxxxxxxxxxx
TRIPAY_SANDBOX_PRIVATE_KEY=xxxxx-xxxxx-xxxxx
TRIPAY_SANDBOX_MERCHANT_CODE=T12345

# ===== PRODUCTION (for live) =====
TRIPAY_PROD_API_KEY=prod_api_xxxx
TRIPAY_PROD_PRIVATE_KEY=prod_private_xxxx
TRIPAY_PROD_MERCHANT_CODE=T9999

# ===== CALLBACK URL =====
USER_RETURN_URL=https://yourdomain.com/return
USER_WEBHOOK_URL=https://yourdomain.com/webhook
```

### 3️⃣ Get API Key

1. Register at [Tripay](https://tripay.co.id/)
2. Login to dashboard
3. Select **API Key** menu
4. Copy **API Key**, **Private Key**, and **Merchant Code**
5. Paste into `.env` file

---

## 🎮 Usage

### 🖥️ Running the Program

```bash
node example.js
```

### 📱 Main Menu

After running the program, you will see an interactive menu:

```
================================
   TRIPAY INTEGRATION MENU
================================
1. Payment Channel List
2. Get Active Channels (API)
3. Get Payment Instruction
4. Calculate Fee
5. Create Transaction
6. Check Transaction Status
7. Check Transaction Detail
8. List Merchant Transactions
0. Exit
================================
```

### 📖 Menu Guide

#### 1️⃣ Payment Channel List
Display 21+ payment channels with details:
- Channel code
- Channel name
- Type (DIRECT/REDIRECT)
- Admin fee
- Min/Max amount
- Min/Max expired time

**Additional features:**
- Grouped by category (VA, E-Wallet, QRIS, Retail)
- Search by code
- Clean and organized display

#### 2️⃣ Get Active Channels (API)
Retrieve active channel data directly from Tripay API.

**Response:** List of channels currently active in your merchant

#### 3️⃣ Get Payment Instruction
Get payment instructions for a specific channel.

**Required input:**
- Payment Code (e.g., QRIS2, BCAVA)

**Output:** Detailed payment steps

#### 4️⃣ Calculate Fee
Calculate admin fees and total payment.

**Required input:**
- Payment Code
- Amount (transaction nominal)

**Output:**
```
Amount      : Rp 100,000
Admin Fee   : Rp 1,450
Total       : Rp 101,450
```

#### 5️⃣ Create Transaction
Create a new payment transaction.

**Required input:**
- Payment Method (e.g., QRIS2)
- Amount
- Customer Name
- Customer Email
- Customer Phone
- Product Name
- Product Price
- Product Quantity
- Product SKU (optional)
- Product URL (optional)
- Product Image URL (optional)

**Output:**
- Tripay Reference
- Merchant Reference
- Payment URL / Checkout URL
- QR URL (for QRIS)

#### 6️⃣ Check Transaction Status
Check transaction status.

**Required input:**
- Tripay Reference (e.g., T0001000000455HFGRY)

**Output:** Transaction status (UNPAID, PAID, EXPIRED, etc.)

#### 7️⃣ Check Transaction Detail
Get complete transaction details.

**Required input:**
- Tripay Reference

**Output:** Complete information including customer, order items, payment info

#### 8️⃣ List Merchant Transactions
View list of all transactions.

**Required input:**
- Page (default: 1)
- Per Page (default: 25)

**Output:** Transaction list with pagination

---

## 📁 Project Structure

```
Module-payment-Tripay/
├── 📄 payment.js              # Main module (all API functions)
├── 🎯 example.js              # Interactive CLI demo
├── 📋 payment_code.json       # Payment channel data
├── 🔐 env                     # Environment template (rename to .env)
├── 📦 package.json            # NPM configuration (ALREADY IN REPO!)
├── 📖 README.md               # Indonesian Documentation
├── 📖 README_EN.md            # English Documentation
├── 📝 INSTALL.md              # Detailed installation guide
├── 🚫 .gitignore             # Git ignore rules
└── 📁 node_modules/          # Dependencies (auto-generated after npm install)
```

### 📄 Main Files

| File | Description |
|------|-------------|
| `payment.js` | Core module with all Tripay API functions |
| `example.js` | Interactive CLI for testing and demo |
| `env` | Configuration template (must be renamed to `.env`) |
| `payment_code.json` | Complete payment channel database |
| `package.json` | NPM configuration (already provided in repo) |

### ⚠️ IMPORTANT: Flat Structure (No Folders)

This project uses a **flat structure** (all files in root folder):

```
✅ CORRECT:
Module-payment-Tripay/
├── package.json      ← In root folder
├── payment.js        ← Parallel with package.json
├── example.js
└── .env

❌ WRONG:
Module-payment-Tripay/
├── src/
│   └── package.json  ← Don't put in other folder
├── payment.js
└── ...
```

---

## 💳 Payment Channels

### 🏦 Virtual Account (11 Channels)

| Code | Bank | Admin Fee | Max Amount |
|------|------|-----------|------------|
| `PERMATAVA` | Permata | Rp 4,250 | Rp 10 million |
| `BNIVA` | BNI | Rp 4,250 | Rp 10 million |
| `BRIVA` | BRI | Rp 4,250 | Rp 10 million |
| `MANDIRIVA` | Mandiri | Rp 4,250 | Rp 10 million |
| `BCAVA` | BCA | Rp 5,500 | Rp 10 million |
| `BSIVA` | BSI | Rp 4,250 | Rp 10 million |
| `CIMBVA` | CIMB Niaga | Rp 4,250 | Rp 10 million |
| `MUAMALATVA` | Muamalat | Rp 4,250 | Rp 10 million |
| `OCBCVA` | OCBC NISP | Rp 4,250 | Rp 10 million |
| `DANAMONVA` | Danamon | Rp 4,250 | Rp 10 million |
| `OTHERBANKVA` | Other Bank | Rp 4,250 | Rp 10 million |

### 💰 E-Wallet (3 Channels)

| Code | Provider | Admin Fee | Max Amount |
|------|----------|-----------|------------|
| `SHOPEEPAY` | ShopeePay | Rp 1,450 | Rp 10 million |
| `QRISC` | QRIS (via LinkAja) | Rp 1,500 | Rp 10 million |
| `QRIS2` | QRIS Dynamic | 0.7% | Rp 10 million |

### 📱 QRIS

| Code | Type | Admin Fee | Max Amount |
|------|------|-----------|------------|
| `QRIS2` | QRIS Dynamic | 0.7% | Rp 10 million |
| `QRISC` | QRIS via LinkAja | Rp 1,500 | Rp 10 million |

### 🏪 Retail (3 Channels)

| Code | Store | Admin Fee | Max Amount |
|------|-------|-----------|------------|
| `ALFAMART` | Alfamart | Rp 3,250 | Rp 5 million |
| `INDOMARET` | Indomaret | Rp 3,250 | Rp 5 million |
| `ALFAMIDI` | Alfamidi | Rp 3,250 | Rp 5 million |

---

## 🔄 Workflow

```
┌─────────────┐
│   Customer  │
└──────┬──────┘
       │
       │ 1. Select product
       ▼
┌─────────────────┐
│  Your Website   │
└────────┬────────┘
         │
         │ 2. Create transaction
         ▼
┌──────────────────┐
│   Tripay API     │
└────────┬─────────┘
         │
         │ 3. Return payment URL
         ▼
┌──────────────────┐
│  Payment Page    │
└────────┬─────────┘
         │
         │ 4. Customer pays
         ▼
┌──────────────────┐
│  Tripay System   │
└────────┬─────────┘
         │
         │ 5. Webhook callback
         ▼
┌──────────────────┐
│  Your Webhook    │
└────────┬─────────┘
         │
         │ 6. Update status
         ▼
┌──────────────────┐
│   Database       │
└──────────────────┘
```

---

## 💻 Code Examples

### Basic Usage

```javascript
const payment = require('./payment.js');

// Get payment channels
const channels = await payment.getPaymentChannels();
console.log(channels);

// Calculate fee
const fee = await payment.calculateFee('QRIS2', 100000);
console.log(fee);

// Create transaction
const transaction = await payment.createTransaction({
  method: 'QRIS2',
  merchant_ref: 'INV-' + Date.now(),
  amount: 100000,
  customer_name: 'John Doe',
  customer_email: 'john@example.com',
  customer_phone: '081234567890',
  order_items: [
    {
      sku: 'PROD-001',
      name: 'Product Name',
      price: 100000,
      quantity: 1
    }
  ],
  expired_time: Math.floor(Date.now() / 1000) + 3600,
  return_url: process.env.USER_RETURN_URL,
  webhook_url: process.env.USER_WEBHOOK_URL
});

console.log('Payment URL:', transaction.data.checkout_url);
console.log('Reference:', transaction.data.reference);
```

### Check Transaction

```javascript
// Check transaction status
const status = await payment.cekTransaksi('DEV-T270673348015S2B8');
console.log('Status:', status.data.status);

// Get transaction detail
const detail = await payment.cekDetailTransaksi('DEV-T270673348015S2B8');
console.log('Detail:', detail.data);
```

### Webhook Handler

```javascript
const crypto = require('crypto');

function handleWebhook(req, res) {
  const callbackSignature = req.headers['x-callback-signature'];
  const privateKey = process.env.TRIPAY_PRIVATE_KEY;
  
  // Generate signature
  const json = JSON.stringify(req.body);
  const signature = crypto
    .createHmac('sha256', privateKey)
    .update(json)
    .digest('hex');
  
  // Validate signature
  if (signature !== callbackSignature) {
    return res.status(400).send('Invalid signature');
  }
  
  // Process callback
  const { reference, status, merchant_ref, total_amount } = req.body;
  
  if (status === 'PAID') {
    // Update database
    // Send notification
    console.log('Payment received:', reference);
  }
  
  res.status(200).send('OK');
}
```

---

## 📚 API Reference

### Payment Channels

#### `getPaymentChannels()`
Get channel list from `payment_code.json`.

**Returns:** `Array<Object>`

```javascript
[
  {
    code: "QRIS2",
    name: "QRIS (Dynamic)",
    type: "DIRECT",
    fee_merchant: { flat: 0, percent: 0.7 },
    minimum_fee: 0,
    maximum_fee: 0,
    min_amount: 10000,
    max_amount: 10000000
  }
]
```

#### `getActiveChannels()`
Get active channels from Tripay API.

**Returns:** `Promise<Object>`

#### `getPaymentInstruction(code)`
Get payment instructions.

**Parameters:**
- `code` (string) - Payment method code

**Returns:** `Promise<Object>`

### Fee Calculator

#### `calculateFee(code, amount)`
Calculate admin fee.

**Parameters:**
- `code` (string) - Payment method code
- `amount` (number) - Transaction amount

**Returns:** `Promise<Object>`

#### `calculateTotalAmount(amount, feeResponse)`
Calculate total payment.

**Parameters:**
- `amount` (number) - Base amount
- `feeResponse` (Object) - Response from calculateFee

**Returns:** `Object | null`

```javascript
{
  amount: 100000,
  admin_fee: 1450,
  total: 101450
}
```

### Transaction Management

#### `createTransaction(params)`
Create a new transaction.

**Parameters:**
```javascript
{
  method: string,           // Payment code
  merchant_ref: string,     // Unique reference
  amount: number,           // Transaction amount
  expired_time: number,     // Unix timestamp
  customer: {
    name: string,
    email: string,
    phone: string
  },
  order_items: [
    {
      sku: string,
      name: string,
      price: number,
      quantity: number,
      product_url?: string,
      image_url?: string
    }
  ],
  return_url: string,       // Success redirect URL
  webhook_url: string       // Callback URL
}
```

**Returns:** `Promise<Object>`

```javascript
{
  mode: 'sandbox',
  status: 200,
  data: {
    success: true,
    data: {
      reference: 'DEV-T270673348015S2B8',
      merchant_ref: 'INV-1234567890',
      checkout_url: 'https://...',
      qr_url: 'https://...',
      // ... more data
    }
  }
}
```

#### `cekTransaksi(reference)`
Check transaction status.

**Parameters:**
- `reference` (string) - Tripay reference

**Returns:** `Promise<Object>`

#### `cekDetailTransaksi(reference)`
Get complete transaction details.

**Parameters:**
- `reference` (string) - Tripay reference

**Returns:** `Promise<Object>`

#### `getMerchantTransactions(page, perPage)`
List merchant transactions.

**Parameters:**
- `page` (number) - Page number (default: 1)
- `perPage` (number) - Items per page (default: 25)

**Returns:** `Promise<Object>`

---

## 🧪 Testing

### Sandbox Mode

**Configuration:**
```env
TRIPAY_MODE=sandbox
```

**Benefits:**
- ✅ No real charges
- ✅ Unlimited testing
- ✅ Simulate all scenarios
- ✅ Test webhook callback

**How to Test:**

1. **Create Transaction**
   ```bash
   node example.js
   # Select menu 5 (Create Transaction)
   ```

2. **Simulate Payment**
   - Login to [Tripay Dashboard](https://tripay.co.id/)
   - Find transaction by reference
   - Click "Set Paid" to simulate successful payment

3. **Check Status**
   ```bash
   # Select menu 6 (Check Transaction Status)
   ```

### Test Checklist

- [ ] Create transaction for each payment method
- [ ] Test fee calculator with various amounts
- [ ] Simulate successful payment
- [ ] Simulate expired payment
- [ ] Test webhook callback
- [ ] Validate signature
- [ ] Test error handling

---

## ❓ Troubleshooting

### Problem: API Key Invalid

**Error:**
```
Authentication failed
```

**Solution:**
1. Make sure API Key is correct
2. Check mode (sandbox/production)
3. Make sure API Key matches the mode

### Problem: Invalid Signature

**Error:**
```
Invalid signature
```

**Solution:**
1. Check Private Key in `.env`
2. Make sure merchant_code is correct
3. Verify signature format

### Problem: Amount Too Small/Large

**Error:**
```
Amount below minimum / Amount exceeds maximum
```

**Solution:**
- Check min/max amount in [Payment Channels](#-payment-channels)
- Adjust amount to channel limits

### Problem: Webhook Not Received

**Solution:**
1. Make sure webhook URL is public and accessible
2. Use HTTPS (not HTTP)
3. Test with tools like ngrok for development
4. Check firewall settings

### Problem: Transaction Expired

**Error:**
```
Transaction has expired
```

**Solution:**
- Set longer `expired_time`
- Default: `Date.now() / 1000 + 3600` (1 hour)
- Max expiration varies per channel

---

## 🔒 Security Best Practices

### ✅ DO's

- ✅ Use HTTPS for webhook
- ✅ Validate signature in webhook
- ✅ Store credentials in `.env` (don't hardcode)
- ✅ Add `.env` to `.gitignore`
- ✅ Use sandbox for testing
- ✅ Log all transactions
- ✅ Implement rate limiting
- ✅ Validate user input

### ❌ DON'Ts

- ❌ Don't commit `.env` to git
- ❌ Don't share API Key/Private Key
- ❌ Don't hardcode credentials
- ❌ Don't skip signature validation
- ❌ Don't use HTTP for webhook
- ❌ Don't go straight to production without testing

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. **Fork** this repository
2. **Clone** your fork
   ```bash
   git clone https://github.com/YOUR_USERNAME/Module-payment-Tripay.git
   ```
3. **Create** a new branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
4. **Commit** your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
5. **Push** to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
6. **Open Pull Request**

### Development Guidelines

- Follow existing code style
- Add comments for complex logic
- Update README if there are API changes
- Test before submitting PR

---

## 📞 Support & Resources

### 📖 Official Documentation

- [Tripay](https://tripay.co.id/)
- [Tripay Documentation](https://tripay.co.id/developer)
- [API Reference](https://tripay.co.id/developer?tab=api-reference)

### 💬 Community

- [Tripay Discord](https://discord.gg/tripay)
- [GitHub Issues](https://github.com/InDsToReE/Module-payment-Tripay/issues)

### 🆘 Need Help?

If you encounter problems:
1. Check [Troubleshooting](#-troubleshooting)
2. Read [Tripay documentation](https://tripay.co.id/developer)
3. Open [GitHub Issue](https://github.com/InDsToReE/Module-payment-Tripay/issues)
4. Contact Tripay Support

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Module Payment Tripay

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- [Tripay](https://tripay.co.id/) - Payment Gateway Provider
- [Node.js](https://nodejs.org) - Runtime Environment
- [Axios](https://axios-http.com) - HTTP Client
- All contributors who helped improve this project

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/InDsToReE/Module-payment-Tripay?style=social)
![GitHub forks](https://img.shields.io/github/forks/InDsToReE/Module-payment-Tripay?style=social)
![GitHub issues](https://img.shields.io/github/issues/InDsToReE/Module-payment-Tripay)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [InDsToReE](https://github.com/InDsToReE)

[⬆ Back to top](#-tripay-payment-gateway-integration)

</div>
