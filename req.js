require("dotenv").config();
const readline = require("readline");
const {
  getPaymentInstruction,
  getActivePaymentChannels,
  calculateFee,
  calculateTotalAmount,
  createTransaction,
  cekTransaksi,
  cekDetailTransaksi,
  getMerchantTransactions
} = require("./payment");

// ==========================================
// READLINE INTERFACE
// ==========================================
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
};

// ==========================================
// PAYMENT CHANNELS DATA
// ==========================================
const PAYMENT_CHANNELS = [
  {
    code: "PERMATAVA",
    name: "Permata Virtual Account",
    type: "DIRECT",
    admin_fee: "Rp 4.250",
    min_amount: "Rp 10.000",
    max_amount: "Rp 10.000.000",
    min_expired: "60 menit",
    max_expired: "43.200 menit"
  },
  {
    code: "BNIVA",
    name: "BNI Virtual Account",
    type: "DIRECT",
    admin_fee: "Rp 4.250",
    min_amount: "Rp 10.000",
    max_amount: "Rp 10.000.000",
    min_expired: "15 menit",
    max_expired: "1.440 menit"
  },
  {
    code: "BRIVA",
    name: "BRI Virtual Account",
    type: "DIRECT",
    admin_fee: "Rp 4.250",
    min_amount: "Rp 10.000",
    max_amount: "Rp 10.000.000",
    min_expired: "60 menit",
    max_expired: "43.200 menit"
  },
  {
    code: "MANDIRIVA",
    name: "Mandiri Virtual Account",
    type: "DIRECT",
    admin_fee: "Rp 4.250",
    min_amount: "Rp 10.000",
    max_amount: "Rp 10.000.000",
    min_expired: "60 menit",
    max_expired: "43.200 menit"
  },
  {
    code: "BCAVA",
    name: "BCA Virtual Account",
    type: "DIRECT",
    admin_fee: "Rp 5.500",
    min_amount: "Rp 10.000",
    max_amount: "Rp 10.000.000",
    min_expired: "15 menit",
    max_expired: "43.200 menit"
  },
  {
    code: "MUAMALATVA",
    name: "Muamalat Virtual Account",
    type: "DIRECT",
    admin_fee: "Rp 4.250",
    min_amount: "Rp 10.000",
    max_amount: "Rp 10.000.000",
    min_expired: "60 menit",
    max_expired: "180 menit"
  },
  {
    code: "CIMBVA",
    name: "CIMB Niaga Virtual Account",
    type: "DIRECT",
    admin_fee: "Rp 4.250",
    min_amount: "Rp 10.000",
    max_amount: "Rp 10.000.000",
    min_expired: "15 menit",
    max_expired: "43.200 menit"
  },
  {
    code: "BSIVA",
    name: "BSI Virtual Account",
    type: "DIRECT",
    admin_fee: "Rp 4.250",
    min_amount: "Rp 10.000",
    max_amount: "Rp 10.000.000",
    min_expired: "60 menit",
    max_expired: "180 menit"
  },
  {
    code: "OCBCVA",
    name: "OCBC NISP Virtual Account",
    type: "DIRECT",
    admin_fee: "Rp 4.250",
    min_amount: "Rp 10.000",
    max_amount: "Rp 10.000.000",
    min_expired: "15 menit",
    max_expired: "43.200 menit"
  },
  {
    code: "DANAMONVA",
    name: "Danamon Virtual Account",
    type: "DIRECT",
    admin_fee: "Rp 4.250",
    min_amount: "Rp 10.000",
    max_amount: "Rp 10.000.000",
    min_expired: "15 menit",
    max_expired: "43.200 menit"
  },
  {
    code: "OTHERBANKVA",
    name: "Other Bank Virtual Account",
    type: "DIRECT",
    admin_fee: "Rp 4.250",
    min_amount: "Rp 10.000",
    max_amount: "Rp 10.000.000",
    min_expired: "15 menit",
    max_expired: "1.440 menit"
  },
  {
    code: "ALFAMART",
    name: "Alfamart",
    type: "DIRECT",
    admin_fee: "Rp 3.500",
    min_amount: "Rp 10.000",
    max_amount: "Rp 2.500.000",
    min_expired: "60 menit",
    max_expired: "1.440 menit"
  },
  {
    code: "INDOMARET",
    name: "Indomaret",
    type: "DIRECT",
    admin_fee: "Rp 3.500",
    min_amount: "Rp 10.000",
    max_amount: "Rp 2.500.000",
    min_expired: "15 menit",
    max_expired: "43.200 menit"
  },
  {
    code: "ALFAMIDI",
    name: "Alfamidi",
    type: "DIRECT",
    admin_fee: "Rp 3.500",
    min_amount: "Rp 5.000",
    max_amount: "Rp 2.500.000",
    min_expired: "60 menit",
    max_expired: "1.440 menit"
  },
  {
    code: "OVO",
    name: "OVO",
    type: "REDIRECT",
    admin_fee: "3%",
    min_amount: "Rp 1.000",
    max_amount: "Rp 10.000.000",
    min_expired: "15 menit",
    max_expired: "43.200 menit"
  },
  {
    code: "QRIS",
    name: "QRIS by ShopeePay",
    type: "DIRECT",
    admin_fee: "Rp 750 + 0,7%",
    min_amount: "Rp 1.000",
    max_amount: "Rp 5.000.000",
    min_expired: "10 menit",
    max_expired: "60 menit"
  },
  {
    code: "QRISC",
    name: "QRIS (Customizable)",
    type: "DIRECT",
    admin_fee: "Rp 750 + 0,7%",
    min_amount: "Rp 1.000",
    max_amount: "Rp 5.000.000",
    min_expired: "10 menit",
    max_expired: "1.440 menit"
  },
  {
    code: "QRIS2",
    name: "QRIS",
    type: "DIRECT",
    admin_fee: "Rp 750 + 0,7%",
    min_amount: "Rp 1.000",
    max_amount: "Rp 5.000.000",
    min_expired: "10 menit",
    max_expired: "1.440 menit"
  },
  {
    code: "DANA",
    name: "DANA",
    type: "REDIRECT",
    admin_fee: "3%",
    min_amount: "Rp 1.000",
    max_amount: "Rp 10.000.000",
    min_expired: "15 menit",
    max_expired: "60 menit"
  },
  {
    code: "SHOPEEPAY",
    name: "ShopeePay",
    type: "REDIRECT",
    admin_fee: "3%",
    min_amount: "Rp 1.000",
    max_amount: "Rp 10.000.000",
    min_expired: "15 menit",
    max_expired: "60 menit"
  },
  {
    code: "QRIS_SHOPEEPAY",
    name: "QRIS Custom by ShopeePay",
    type: "DIRECT",
    admin_fee: "Rp 750 + 0,7%",
    min_amount: "Rp 1.000",
    max_amount: "Rp 5.000.000",
    min_expired: "10 menit",
    max_expired: "60 menit"
  }
];

// ==========================================
// MENU FUNCTIONS
// ==========================================

async function menuDisplayChannelList() {
  console.log("\n╔════════════════════════════════════════════════════════════════════════════════════╗");
  console.log("║                         DAFTAR CHANNEL PAYMENT TRIPAY                              ║");
  console.log("╚════════════════════════════════════════════════════════════════════════════════════╝");
  
  // Group by category
  const categories = {
    "VIRTUAL ACCOUNT": PAYMENT_CHANNELS.filter(ch => ch.code.includes("VA")),
    "RETAIL": PAYMENT_CHANNELS.filter(ch => ["ALFAMART", "INDOMARET", "ALFAMIDI"].includes(ch.code)),
    "E-WALLET": PAYMENT_CHANNELS.filter(ch => ["OVO", "DANA", "SHOPEEPAY"].includes(ch.code)),
    "QRIS": PAYMENT_CHANNELS.filter(ch => ch.code.includes("QRIS"))
  };

  for (const [category, channels] of Object.entries(categories)) {
    console.log(`\n┌─── ${category} ───────────────────────────────────────────────────────────────────┐`);
    
    channels.forEach((ch, idx) => {
      console.log(`│`);
      console.log(`│ ${idx + 1}. ${ch.name}`);
      console.log(`│    Code         : ${ch.code}`);
      console.log(`│    Type         : ${ch.type}`);
      console.log(`│    Biaya Admin  : ${ch.admin_fee}`);
      console.log(`│    Min Amount   : ${ch.min_amount}`);
      console.log(`│    Max Amount   : ${ch.max_amount}`);
      console.log(`│    Min Expired  : ${ch.min_expired}`);
      console.log(`│    Max Expired  : ${ch.max_expired}`);
    });
    
    console.log(`└────────────────────────────────────────────────────────────────────────────────┘`);
  }

  console.log(`\nTotal Channels: ${PAYMENT_CHANNELS.length}`);
  
  // Option to search
  console.log("\n[1] Cari channel berdasarkan kode");
  console.log("[2] Kembali ke menu utama");
  const choice = await question("\nPilihan: ");

  if (choice === "1") {
    const searchCode = await question("Masukkan kode channel (e.g., QRIS2, BCAVA): ");
    const found = PAYMENT_CHANNELS.find(ch => ch.code.toLowerCase() === searchCode.toLowerCase());
    
    if (found) {
      console.log("\n╔════════════════════════════════════════╗");
      console.log(`║  DETAIL CHANNEL: ${found.code.padEnd(20)} ║`);
      console.log("╚════════════════════════════════════════╝");
      console.log(`Name         : ${found.name}`);
      console.log(`Code         : ${found.code}`);
      console.log(`Type         : ${found.type}`);
      console.log(`Biaya Admin  : ${found.admin_fee}`);
      console.log(`Min Amount   : ${found.min_amount}`);
      console.log(`Max Amount   : ${found.max_amount}`);
      console.log(`Min Expired  : ${found.min_expired}`);
      console.log(`Max Expired  : ${found.max_expired}`);
    } else {
      console.log(`\n❌ Channel dengan kode '${searchCode}' tidak ditemukan!`);
    }
  }
}

async function menuGetChannels() {
  console.log("\n=== GET ACTIVE PAYMENT CHANNELS (FROM API) ===");
  try {
    const res = await getActivePaymentChannels();
    console.dir(res, { depth: null });
  } catch (err) {
    console.error("ERROR:", err.message);
  }
}

async function menuGetInstruction() {
  console.log("\n=== GET PAYMENT INSTRUCTION ===");
  const code = await question("Payment Code (e.g., QRIS2, BCAVA): ");
  
  if (!code) {
    console.log("Payment code is required!");
    return;
  }

  try {
    const res = await getPaymentInstruction(code);
    console.dir(res, { depth: null });
  } catch (err) {
    console.error("ERROR:", err.message);
  }
}

async function menuCalculateFee() {
  console.log("\n=== CALCULATE FEE ===");
  const code = await question("Payment Code (e.g., QRIS2, BCAVA): ");
  const amountStr = await question("Amount (e.g., 100000): ");
  
  if (!code || !amountStr) {
    console.log("Payment code and amount are required!");
    return;
  }

  const amount = parseInt(amountStr);
  if (isNaN(amount)) {
    console.log("Amount must be a number!");
    return;
  }

  try {
    const feeRes = await calculateFee(code, amount);
    const total = calculateTotalAmount(amount, feeRes);

    console.log("\n=== RAW TRIPAY RESPONSE ===");
    console.dir(feeRes, { depth: null });

    console.log("\n=== CALCULATED TOTAL ===");
    console.log(total);
  } catch (err) {
    console.error("ERROR:", err.message);
  }
}

async function menuCreateTransaction() {
  console.log("\n=== CREATE TRANSACTION ===");
  console.log("Input data pelanggan:");
  
  const method = await question("Payment Method (e.g., QRIS2, BCAVA): ");
  const amountStr = await question("Amount (e.g., 100000): ");
  const customerName = await question("Customer Name: ");
  const customerEmail = await question("Customer Email: ");
  const customerPhone = await question("Customer Phone (e.g., 081234567890): ");
  
  // Product details
  console.log("\nInput data produk:");
  const productName = await question("Product Name: ");
  const productPriceStr = await question("Product Price: ");
  const productQtyStr = await question("Product Quantity: ");
  
  // Optional product details
  const productSku = await question("Product SKU (optional, press Enter to skip): ") || `SKU-${Date.now()}`;
  const productUrl = await question("Product URL (optional, press Enter to skip): ") || "";
  const productImage = await question("Product Image URL (optional, press Enter to skip): ") || "";

  // Validation
  if (!method || !amountStr || !customerName || !customerEmail || !customerPhone || !productName || !productPriceStr || !productQtyStr) {
    console.log("All required fields must be filled!");
    return;
  }

  const amount = parseInt(amountStr);
  const productPrice = parseInt(productPriceStr);
  const productQty = parseInt(productQtyStr);

  if (isNaN(amount) || isNaN(productPrice) || isNaN(productQty)) {
    console.log("Amount, price, and quantity must be numbers!");
    return;
  }

  // Build order items
  const orderItem = {
    sku: productSku,
    name: productName,
    price: productPrice,
    quantity: productQty
  };

  if (productUrl) orderItem.product_url = productUrl;
  if (productImage) orderItem.image_url = productImage;

  // URLs from .env or default
  const returnUrl = process.env.USER_RETURN_URL || "https://yourdomain.com/return";
  const webhookUrl = process.env.USER_WEBHOOK_URL || "https://yourdomain.com/webhook";

  try {
    const res = await createTransaction({
      method: method,
      merchant_ref: "INV-" + Date.now(),
      amount: amount,
      expired_time: Math.floor(Date.now() / 1000) + 3600, // 1 hour

      return_url: returnUrl,
      webhook_url: webhookUrl,

      customer: {
        name: customerName,
        email: customerEmail,
        phone: customerPhone
      },

      order_items: [orderItem]
    });

    console.log("\n=== TRANSACTION CREATED ===");
    console.dir(res, { depth: null });

    if (res.data?.success && res.data?.data) {
      console.log("\n=== IMPORTANT INFO ===");
      console.log("Reference:", res.data.data.reference);
      console.log("Merchant Ref:", res.data.data.merchant_ref);
      console.log("Payment URL:", res.data.data.checkout_url);
      console.log("QR URL:", res.data.data.qr_url);
    }
  } catch (err) {
    console.error("ERROR:", err.message);
  }
}

async function menuCheckStatus() {
  console.log("\n=== CHECK TRANSACTION STATUS ===");
  const reference = await question("Tripay Reference (e.g., T0001000000455HFGRY): ");
  
  if (!reference) {
    console.log("Reference is required!");
    return;
  }

  try {
    const res = await cekTransaksi(reference);
    console.dir(res, { depth: null });
  } catch (err) {
    console.error("ERROR:", err.message);
  }
}

async function menuCheckDetail() {
  console.log("\n=== CHECK TRANSACTION DETAIL ===");
  const reference = await question("Tripay Reference (e.g., DEV-T270673348015S2B8): ");
  
  if (!reference) {
    console.log("Reference is required!");
    return;
  }

  try {
    const res = await cekDetailTransaksi(reference);
    console.dir(res, { depth: null });
  } catch (err) {
    console.error("ERROR:", err.message);
  }
}

async function menuListTransactions() {
  console.log("\n=== LIST MERCHANT TRANSACTIONS ===");
  const pageStr = await question("Page (default: 1): ") || "1";
  const perPageStr = await question("Per Page (default: 25): ") || "25";
  
  const page = parseInt(pageStr);
  const perPage = parseInt(perPageStr);

  if (isNaN(page) || isNaN(perPage)) {
    console.log("Page and Per Page must be numbers!");
    return;
  }

  try {
    const res = await getMerchantTransactions(page, perPage);
    console.dir(res, { depth: null });
  } catch (err) {
    console.error("ERROR:", err.message);
  }
}

// ==========================================
// MAIN MENU
// ==========================================
async function showMenu() {
  console.log("\n================================");
  console.log("   TRIPAY INTEGRATION MENU");
  console.log("================================");
  console.log("1. Daftar Channel Payment");
  console.log("2. Get Active Channels (API)");
  console.log("3. Get Payment Instruction");
  console.log("4. Calculate Fee");
  console.log("5. Create Transaction");
  console.log("6. Check Transaction Status");
  console.log("7. Check Transaction Detail");
  console.log("8. List Merchant Transactions");
  console.log("0. Exit");
  console.log("================================");
}

async function main() {
  console.log("\n========================================");
  console.log("  TRIPAY PAYMENT GATEWAY INTEGRATION");
  console.log("========================================");
  console.log("Mode:", process.env.TRIPAY_MODE || "sandbox");
  console.log("Make sure your .env file is configured!");
  console.log("========================================");

  let running = true;

  while (running) {
    await showMenu();
    const choice = await question("\nPilih menu (0-8): ");

    switch (choice) {
      case "1":
        await menuDisplayChannelList();
        break;
      case "2":
        await menuGetChannels();
        break;
      case "3":
        await menuGetInstruction();
        break;
      case "4":
        await menuCalculateFee();
        break;
      case "5":
        await menuCreateTransaction();
        break;
      case "6":
        await menuCheckStatus();
        break;
      case "7":
        await menuCheckDetail();
        break;
      case "8":
        await menuListTransactions();
        break;
      case "0":
        console.log("\nTerima kasih! Goodbye...");
        running = false;
        break;
      default:
        console.log("\nPilihan tidak valid!");
    }

    if (running) {
      await question("\nPress Enter to continue...");
    }
  }

  rl.close();
}

// ==========================================
// RUN
// ==========================================
main().catch((err) => {
  console.error("FATAL ERROR:", err);
  rl.close();
  process.exit(1);

});

