# 🚀 Quick Start Guide

**Get started with Tripay Payment Gateway in 5 minutes!**

---

## ⚡ Express Setup (3 Steps)

### 1️⃣ Clone & Install

```bash
git clone https://github.com/InDsToReE/Module-payment-Tripay.git
cd Module-payment-Tripay
npm install
```

### 2️⃣ Configure Environment

```bash
# Rename env to .env
mv env .env

# Edit .env dengan kredensial Tripay Anda
# Minimal yang perlu diisi untuk sandbox:
# - TRIPAY_SANDBOX_API_KEY
# - TRIPAY_SANDBOX_PRIVATE_KEY
# - TRIPAY_SANDBOX_MERCHANT_CODE
```

### 3️⃣ Run!

```bash
npm start
```

---

## 📋 Step-by-Step (Detail)

### Step 1: Clone Repository

```bash
git clone https://github.com/InDsToReE/Module-payment-Tripay.git
cd Module-payment-Tripay
```

**Output:**
```
Cloning into 'Module-payment-Tripay'...
remote: Enumerating objects: 20, done.
remote: Counting objects: 100% (20/20), done.
...
```

### Step 2: Install Dependencies

```bash
npm install
```

**Output:**
```
added 5 packages, and audited 6 packages in 2s

✅ Dependencies installed successfully!
📝 Next steps:
1. Rename "env" to ".env"
2. Edit .env file with your Tripay credentials
3. Run: npm start
```

### Step 3: Rename Environment File

**Linux/Mac:**
```bash
mv env .env
```

**Windows (CMD):**
```cmd
ren env .env
```

**Windows (PowerShell):**
```powershell
Rename-Item env .env
```

**Manual:**
- Klik kanan file `env`
- Pilih "Rename"
- Ubah nama menjadi `.env` (dengan titik di depan)

### Step 4: Get Tripay Credentials

1. **Daftar** di [https://tripay.co.id/member/register](https://tripay.co.id/member/register)
2. **Verifikasi** email Anda
3. **Login** ke dashboard
4. Pilih menu **"API Key"** atau **"Pengaturan"**
5. **Copy** kredensial berikut:
   - API Key
   - Private Key
   - Merchant Code

### Step 5: Edit `.env` File

Buka file `.env` dengan text editor favorit Anda:

```env
TRIPAY_MODE=sandbox

# ===== SANDBOX =====
TRIPAY_SANDBOX_API_KEY=DEV-your-api-key-here
TRIPAY_SANDBOX_PRIVATE_KEY=your-private-key-here
TRIPAY_SANDBOX_MERCHANT_CODE=T12345

# ===== URL (opsional untuk demo) =====
USER_RETURN_URL=https://yourdomain.com/return
USER_WEBHOOK_URL=https://yourdomain.com/webhook
```

**Paste kredensial** yang Anda copy dari dashboard Tripay.

### Step 6: Run Program

```bash
npm start
```

**Output:**
```
========================================
  TRIPAY PAYMENT GATEWAY INTEGRATION
========================================
Mode: sandbox
Make sure your .env file is configured!
========================================

================================
   TRIPAY INTEGRATION MENU
================================
1. Daftar Channel Payment
2. Get Active Channels (API)
3. Get Payment Instruction
4. Calculate Fee
5. Create Transaction
6. Check Transaction Status
7. Check Transaction Detail
8. List Merchant Transactions
0. Exit
================================

Pilih menu (0-8):
```

---

## 🎯 First Transaction

Mari coba buat transaksi pertama!

### 1. Pilih Menu 5 (Create Transaction)

```
Pilih menu (0-8): 5
```

### 2. Input Data (Contoh)

```
Payment Method: QRIS2
Amount: 50000
Customer Name: Budi Santoso
Customer Email: budi@email.com
Customer Phone: 081234567890
Product Name: T-Shirt Premium
Product Price: 50000
Product Quantity: 1
Product SKU: (tekan Enter untuk skip)
Product URL: (tekan Enter untuk skip)
Product Image URL: (tekan Enter untuk skip)
```

### 3. Lihat Hasil

```json
{
  "mode": "sandbox",
  "status": 200,
  "data": {
    "success": true,
    "data": {
      "reference": "DEV-T270673348015S2B8",
      "merchant_ref": "INV-1234567890",
      "checkout_url": "https://tripay.co.id/checkout/...",
      "qr_url": "https://tripay.co.id/qr/...",
      ...
    }
  }
}

=== IMPORTANT INFO ===
Reference: DEV-T270673348015S2B8
Merchant Ref: INV-1234567890
Payment URL: https://tripay.co.id/checkout/...
QR URL: https://tripay.co.id/qr/...
```

### 4. Test Payment (Sandbox)

1. Copy **QR URL** atau **checkout_url**
2. Buka di browser
3. Login ke [Tripay Dashboard](https://tripay.co.id/merchant/transactions)
4. Cari transaksi berdasarkan reference
5. Klik **"Set Paid"** untuk simulasi pembayaran sukses

### 5. Check Status

```
Pilih menu (0-8): 6

Tripay Reference: DEV-T270673348015S2B8
```

Lihat status berubah menjadi **PAID**!

---

## 📱 Try All Features

### 1. Lihat Daftar Channel

```
Pilih menu: 1
```

Lihat 21+ channel pembayaran yang tersedia.

### 2. Hitung Biaya Admin

```
Pilih menu: 4
Payment Code: BCAVA
Amount: 100000
```

Lihat breakdown biaya admin dan total bayar.

### 3. Cek Instruksi Pembayaran

```
Pilih menu: 3
Payment Code: QRIS2
```

Lihat cara pembayaran untuk customer.

---

## 🔧 Use in Your Code

Setelah familiar dengan CLI, gunakan langsung di code Anda:

```javascript
const { createTransaction } = require('./payment');

async function checkout() {
  const result = await createTransaction({
    method: 'QRIS2',
    merchant_ref: 'ORDER-001',
    amount: 50000,
    expired_time: Math.floor(Date.now() / 1000) + 3600,
    
    return_url: 'https://mystore.com/success',
    webhook_url: 'https://mystore.com/webhook',
    
    customer: {
      name: 'Budi',
      email: 'budi@email.com',
      phone: '081234567890'
    },
    
    order_items: [{
      sku: 'PROD-001',
      name: 'T-Shirt',
      price: 50000,
      quantity: 1
    }]
  });
  
  console.log('QR URL:', result.data.data.qr_url);
}

checkout();
```

---

## ✅ Checklist

Pastikan semua langkah berhasil:

- [x] Repository di-clone
- [x] `npm install` berhasil
- [x] File `env` direname ke `.env`
- [x] File `.env` diisi dengan kredensial
- [x] `npm start` berjalan tanpa error
- [x] Menu interaktif muncul
- [x] Berhasil create transaction
- [x] Berhasil check status

---

## ❓ Troubleshooting

| Problem | Solution |
|---------|----------|
| Cannot find module 'dotenv' | Run `npm install` |
| No such file '.env' | Rename `env` to `.env` |
| Authentication failed | Check API Key di `.env` |
| Invalid signature | Check Private Key di `.env` |

Lihat [INSTALL.md](INSTALL.md) untuk troubleshooting lengkap.

---

## 📚 Next Steps

- 📖 Baca [README.md](README.md) untuk dokumentasi lengkap
- 🔧 Explore semua menu di CLI
- 💻 Integrasikan ke aplikasi Anda
- 🧪 Test semua payment channels
- 🚀 Deploy ke production (ubah `TRIPAY_MODE=production`)

---

## 🆘 Need Help?

- 📖 [Tripay Docs](https://tripay.co.id/developer)
- 🐛 [GitHub Issues](https://github.com/InDsToReE/Module-payment-Tripay/issues)
- 💬 [Community Discord](https://discord.gg/tripay)

---

**Happy Coding! 🎉**
