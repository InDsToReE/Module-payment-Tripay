# 💳 Tripay Payment Gateway Integration

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-14%2B-green?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Tripay](https://img.shields.io/badge/Tripay-Payment%20Gateway-orange?style=for-the-badge)

**Integrasi lengkap Tripay Payment Gateway dengan Node.js**  
*Mudah, Cepat, dan Profesional*

[Demo](#-demo) • [Instalasi](#-instalasi) • [Dokumentasi](#-dokumentasi) • [Fitur](#-fitur)

</div>

---

## 📋 Daftar Isi

- [Tentang Project](#-tentang-project)
- [Fitur Utama](#-fitur-utama)
- [Instalasi](#-instalasi)
- [Konfigurasi](#-konfigurasi)
- [Cara Penggunaan](#-cara-penggunaan)
- [Struktur Project](#-struktur-project)
- [Channel Payment](#-channel-payment)
- [Alur Kerja](#-alur-kerja)
- [Contoh Kode](#-contoh-kode)
- [API Reference](#-api-reference)
- [Testing](#-testing)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Tentang Project

Project ini adalah **implementasi lengkap** untuk integrasi dengan **Tripay Payment Gateway**, yang mendukung berbagai metode pembayaran populer di Indonesia seperti Virtual Account, E-Wallet, QRIS, dan Retail.

### 🎨 Mengapa Tripay?

- ✅ **Multi Payment Method** - 21+ channel pembayaran
- ✅ **Real-time Notification** - Webhook callback otomatis
- ✅ **Easy Integration** - API yang mudah digunakan
- ✅ **Competitive Fee** - Biaya admin yang kompetitif
- ✅ **Reliable** - Uptime 99.9%

---

## ✨ Fitur Utama

### 🎯 Core Features

| Fitur | Deskripsi |
|-------|-----------|
| 🏦 **Virtual Account** | BCA, BNI, BRI, Mandiri, Permata, dll |
| 💰 **E-Wallet** | OVO, DANA, ShopeePay |
| 📱 **QRIS** | QR Code untuk semua e-wallet |
| 🏪 **Retail** | Alfamart, Indomaret, Alfamidi |
| 📊 **Fee Calculator** | Hitung biaya admin secara otomatis |
| 🔍 **Transaction Status** | Cek status transaksi real-time |
| 📜 **Transaction List** | Daftar semua transaksi merchant |
| 🎫 **Payment Instruction** | Panduan pembayaran per channel |

### 🛠️ Technical Features

- ✅ **Interactive CLI** - Menu interaktif di terminal
- ✅ **Environment Config** - Konfigurasi via `.env` file
- ✅ **Error Handling** - Penanganan error yang komprehensif
- ✅ **Input Validation** - Validasi input user otomatis
- ✅ **Full Response** - Return semua data dari API
- ✅ **Signature Generation** - Otomatis generate signature
- ✅ **Modular Code** - Struktur kode yang rapi

---

## 🚀 Instalasi

### 📦 Prerequisites

Pastikan sudah terinstall:
- **Node.js** versi 14 atau lebih tinggi
- **npm** atau **yarn**
- **Git**

### 📥 Clone Repository

```bash
git clone https://github.com/InDsToReE/Module-payment-Tripay.git
cd Module-payment-Tripay
```

### 📚 Install Dependencies

```bash
npm install
```

Dependencies yang akan diinstall:
- `axios` - HTTP client untuk API calls
- `dotenv` - Environment variable management

---

## ⚙️ Konfigurasi

### 1️⃣ Setup Environment Variables

**PENTING:** Setelah clone repository, ubah nama file `env` menjadi `.env`

```bash
# Di terminal, jalankan:
mv env .env

# Atau manual:
# - Rename file 'env' menjadi '.env'
# - Pastikan nama file adalah '.env' (dengan titik di depan)
```

### 2️⃣ Edit File `.env`

Buka file `.env` dan isi dengan kredensial Tripay Anda:

```env
# Mode: sandbox untuk testing, production untuk live
TRIPAY_MODE=sandbox

# ===== SANDBOX (untuk testing) =====
TRIPAY_SANDBOX_API_KEY=DEV-xxxxxxxxxxxxxxxx
TRIPAY_SANDBOX_PRIVATE_KEY=xxxxx-xxxxx-xxxxx
TRIPAY_SANDBOX_MERCHANT_CODE=T12345

# ===== PRODUCTION (untuk live) =====
TRIPAY_PROD_API_KEY=prod_api_xxxx
TRIPAY_PROD_PRIVATE_KEY=prod_private_xxxx
TRIPAY_PROD_MERCHANT_CODE=T9999

# ===== URL CALLBACK =====
USER_RETURN_URL=https://yourdomain.com/return
USER_WEBHOOK_URL=https://yourdomain.com/webhook
```

### 3️⃣ Dapatkan API Key

1. Daftar di [Tripay Dashboard](https://tripay.co.id/member/register)
2. Login ke dashboard
3. Pilih menu **API Key**
4. Copy **API Key**, **Private Key**, dan **Merchant Code**
5. Paste ke file `.env`

---

## 🎮 Cara Penggunaan

### 🖥️ Menjalankan Program

```bash
node example.js
```

### 📱 Menu Utama

Setelah menjalankan program, Anda akan melihat menu interaktif:

```
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
```

### 📖 Panduan Per Menu

#### 1️⃣ Daftar Channel Payment
Menampilkan 21+ channel pembayaran dengan detail:
- Kode channel
- Nama channel
- Tipe (DIRECT/REDIRECT)
- Biaya admin
- Min/Max amount
- Min/Max expired time

**Fitur tambahan:**
- Dikelompokkan per kategori (VA, E-Wallet, QRIS, Retail)
- Search by code
- Display yang rapi dan terorganisir

#### 2️⃣ Get Active Channels (API)
Mengambil data channel aktif langsung dari API Tripay.

**Response:** Daftar channel yang sedang aktif di merchant Anda

#### 3️⃣ Get Payment Instruction
Mendapatkan instruksi pembayaran untuk channel tertentu.

**Input yang diperlukan:**
- Payment Code (e.g., QRIS2, BCAVA)

**Output:** Langkah-langkah pembayaran detail

#### 4️⃣ Calculate Fee
Menghitung biaya admin dan total pembayaran.

**Input yang diperlukan:**
- Payment Code
- Amount (nominal transaksi)

**Output:**
```
Amount      : Rp 100.000
Admin Fee   : Rp 1.450
Total       : Rp 101.450
```

#### 5️⃣ Create Transaction
Membuat transaksi pembayaran baru.

**Input yang diperlukan:**
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
- QR URL (untuk QRIS)

#### 6️⃣ Check Transaction Status
Mengecek status transaksi.

**Input yang diperlukan:**
- Tripay Reference (e.g., T0001000000455HFGRY)

**Output:** Status transaksi (UNPAID, PAID, EXPIRED, dll)

#### 7️⃣ Check Transaction Detail
Mendapatkan detail lengkap transaksi.

**Input yang diperlukan:**
- Tripay Reference

**Output:** Informasi lengkap termasuk customer, order items, payment info

#### 8️⃣ List Merchant Transactions
Melihat daftar semua transaksi.

**Input yang diperlukan:**
- Page (default: 1)
- Per Page (default: 25)

**Output:** List transaksi dengan pagination

---

## 📁 Struktur Project

```
Module-payment-Tripay/
├── 📄 payment.js              # Module utama (semua fungsi API)
├── 🎯 example.js              # Demo interaktif CLI
├── 📋 payment_code.json       # Data channel payment
├── 🔐 env                     # Template environment (rename to .env)
├── 📖 README.md               # Dokumentasi (file ini)
├── 📦 package.json            # npm configuration
├── 🚫 .gitignore             # Git ignore rules
└── 📁 node_modules/          # Dependencies (auto-generated)
```

### 📄 File Utama

| File | Deskripsi |
|------|-----------|
| `payment.js` | Core module dengan semua fungsi Tripay API |
| `example.js` | Interactive CLI untuk testing dan demo |
| `env` | Template konfigurasi (harus direname ke `.env`) |
| `payment_code.json` | Database channel payment lengkap |

---

## 💳 Channel Payment

### 🏦 Virtual Account (11 Channel)

| Code | Bank | Admin Fee | Max Amount |
|------|------|-----------|------------|
| `PERMATAVA` | Permata | Rp 4.250 | Rp 10 juta |
| `BNIVA` | BNI | Rp 4.250 | Rp 10 juta |
| `BRIVA` | BRI | Rp 4.250 | Rp 10 juta |
| `MANDIRIVA` | Mandiri | Rp 4.250 | Rp 10 juta |
| `BCAVA` | BCA | Rp 5.500 | Rp 10 juta |
| `BSIVA` | BSI | Rp 4.250 | Rp 10 juta |
| `CIMBVA` | CIMB Niaga | Rp 4.250 | Rp 10 juta |
| `MUAMALATVA` | Muamalat | Rp 4.250 | Rp 10 juta |
| `OCBCVA` | OCBC NISP | Rp 4.250 | Rp 10 juta |
| `DANAMONVA` | Danamon | Rp 4.250 | Rp 10 juta |
| `OTHERBANKVA` | Other Bank | Rp 4.250 | Rp 10 juta |

### 💰 E-Wallet (3 Channel)

| Code | Wallet | Admin Fee | Max Amount |
|------|--------|-----------|------------|
| `OVO` | OVO | 3% | Rp 10 juta |
| `DANA` | DANA | 3% | Rp 10 juta |
| `SHOPEEPAY` | ShopeePay | 3% | Rp 10 juta |

### 📱 QRIS (4 Channel)

| Code | Name | Admin Fee | Max Amount |
|------|------|-----------|------------|
| `QRIS` | QRIS by ShopeePay | Rp 750 + 0.7% | Rp 5 juta |
| `QRIS2` | QRIS | Rp 750 + 0.7% | Rp 5 juta |
| `QRISC` | QRIS (Customizable) | Rp 750 + 0.7% | Rp 5 juta |
| `QRIS_SHOPEEPAY` | QRIS Custom ShopeePay | Rp 750 + 0.7% | Rp 5 juta |

### 🏪 Retail (3 Channel)

| Code | Store | Admin Fee | Max Amount |
|------|-------|-----------|------------|
| `ALFAMART` | Alfamart | Rp 3.500 | Rp 2.5 juta |
| `INDOMARET` | Indomaret | Rp 3.500 | Rp 2.5 juta |
| `ALFAMIDI` | Alfamidi | Rp 3.500 | Rp 2.5 juta |

---

## 🔄 Alur Kerja

### 📊 Flow Diagram Transaksi

```
┌─────────────────────────────────────────────────────────────────┐
│                        MERCHANT WEBSITE                         │
└─────────────┬───────────────────────────────────────────────────┘
              │
              ├─► 1. Customer pilih produk
              │
              ├─► 2. Customer pilih metode pembayaran
              │
              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     CREATE TRANSACTION API                      │
│  • Method: POST /transaction/create                             │
│  • Payload: customer data, order items, payment method          │
│  • Response: reference, checkout_url, qr_url                    │
└─────────────┬───────────────────────────────────────────────────┘
              │
              ├─► 3. Redirect customer ke checkout_url
              │    atau tampilkan QR Code
              │
              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      CUSTOMER PAYMENT                           │
│  • Transfer ke VA / Scan QR / Bayar di Retail                   │
│  • Tripay konfirmasi pembayaran otomatis                        │
└─────────────┬───────────────────────────────────────────────────┘
              │
              ├─► 4. Tripay kirim webhook ke merchant
              │
              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      WEBHOOK CALLBACK                           │
│  • URL: USER_WEBHOOK_URL                                        │
│  • Data: status transaksi, payment info                         │
│  • Merchant update database                                     │
└─────────────┬───────────────────────────────────────────────────┘
              │
              ├─► 5. Customer redirect ke return_url
              │
              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    TRANSACTION COMPLETE                         │
│  • Show success page                                            │
│  • Send email confirmation                                      │
│  • Process order                                                │
└─────────────────────────────────────────────────────────────────┘
```

### 🔐 Signature Generation Flow

```javascript
// Tripay menggunakan HMAC SHA256 untuk signature
const signature = crypto
  .createHmac('sha256', PRIVATE_KEY)
  .update(MERCHANT_CODE + MERCHANT_REF + AMOUNT)
  .digest('hex');
```

**Komponen:**
- `PRIVATE_KEY` - dari .env
- `MERCHANT_CODE` - dari .env
- `MERCHANT_REF` - unique reference dari merchant
- `AMOUNT` - nominal transaksi

---

## 💻 Contoh Kode

### 📝 Contoh 1: Create Transaction Sederhana

```javascript
const { createTransaction } = require('./payment');

async function buatTransaksi() {
  const result = await createTransaction({
    method: 'QRIS2',
    merchant_ref: 'INV-' + Date.now(),
    amount: 50000,
    expired_time: Math.floor(Date.now() / 1000) + 3600,
    
    return_url: 'https://mystore.com/thank-you',
    webhook_url: 'https://mystore.com/webhook',
    
    customer: {
      name: 'Budi Santoso',
      email: 'budi@email.com',
      phone: '081234567890'
    },
    
    order_items: [
      {
        sku: 'PROD-001',
        name: 'T-Shirt Premium',
        price: 50000,
        quantity: 1
      }
    ]
  });

  console.log('QR URL:', result.data.data.qr_url);
}

buatTransaksi();
```

### 📝 Contoh 2: Cek Status Transaksi

```javascript
const { cekTransaksi } = require('./payment');

async function cekStatus() {
  const status = await cekTransaksi('T0001000000455HFGRY');
  
  if (status.data.success) {
    console.log('Status:', status.data.data.status);
    console.log('Amount:', status.data.data.amount);
  }
}

cekStatus();
```

### 📝 Contoh 3: Hitung Total Bayar

```javascript
const { calculateFee, calculateTotalAmount } = require('./payment');

async function hitungTotal() {
  const amount = 100000;
  const feeRes = await calculateFee('BCAVA', amount);
  const total = calculateTotalAmount(amount, feeRes);
  
  console.log('Subtotal:', total.amount);
  console.log('Admin Fee:', total.admin_fee);
  console.log('Total Bayar:', total.total);
}

hitungTotal();
```

### 📝 Contoh 4: List Transaksi dengan Filter

```javascript
const { getMerchantTransactions } = require('./payment');

async function lihatTransaksi() {
  const result = await getMerchantTransactions(1, 50);
  
  if (result.data.success) {
    result.data.data.forEach(trx => {
      console.log(`${trx.reference} - ${trx.status} - Rp ${trx.amount}`);
    });
  }
}

lihatTransaksi();
```

---

## 📚 API Reference

### Configuration

#### `TripayConfig`
```javascript
{
  mode: 'sandbox' | 'production',
  baseUrl: string,
  apiKey: string,
  privateKey: string,
  merchantCode: string
}
```

### Payment Channels

#### `getActivePaymentChannels()`
Mendapatkan daftar channel pembayaran yang aktif.

**Returns:** `Promise<Object>`

```javascript
{
  mode: 'sandbox',
  status: 200,
  data: {
    success: true,
    data: [/* array of channels */]
  }
}
```

#### `getPaymentInstruction(code)`
Mendapatkan instruksi pembayaran.

**Parameters:**
- `code` (string) - Payment method code

**Returns:** `Promise<Object>`

### Fee Calculator

#### `calculateFee(code, amount)`
Menghitung biaya admin.

**Parameters:**
- `code` (string) - Payment method code
- `amount` (number) - Transaction amount

**Returns:** `Promise<Object>`

#### `calculateTotalAmount(amount, feeResponse)`
Menghitung total pembayaran.

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
Membuat transaksi baru.

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
Cek status transaksi.

**Parameters:**
- `reference` (string) - Tripay reference

**Returns:** `Promise<Object>`

#### `cekDetailTransaksi(reference)`
Mendapatkan detail transaksi lengkap.

**Parameters:**
- `reference` (string) - Tripay reference

**Returns:** `Promise<Object>`

#### `getMerchantTransactions(page, perPage)`
List transaksi merchant.

**Parameters:**
- `page` (number) - Page number (default: 1)
- `perPage` (number) - Items per page (default: 25)

**Returns:** `Promise<Object>`

---

## 🧪 Testing

### Mode Sandbox

**Konfigurasi:**
```env
TRIPAY_MODE=sandbox
```

**Keuntungan:**
- ✅ Tidak ada biaya real
- ✅ Unlimited testing
- ✅ Simulasi semua scenario
- ✅ Test webhook callback

**Cara Test:**

1. **Create Transaction**
   ```bash
   node example.js
   # Pilih menu 5 (Create Transaction)
   ```

2. **Simulasi Pembayaran**
   - Login ke [Tripay Dashboard Sandbox](https://tripay.co.id/merchant/transactions)
   - Cari transaksi berdasarkan reference
   - Klik "Set Paid" untuk simulasi pembayaran berhasil

3. **Cek Status**
   ```bash
   # Pilih menu 6 (Check Transaction Status)
   ```

### Test Checklist

- [ ] Create transaction untuk setiap payment method
- [ ] Test fee calculator dengan berbagai nominal
- [ ] Simulasi pembayaran berhasil
- [ ] Simulasi pembayaran expired
- [ ] Test webhook callback
- [ ] Validasi signature
- [ ] Test error handling

---

## ❓ Troubleshooting

### Problem: API Key Invalid

**Error:**
```
Authentication failed
```

**Solution:**
1. Pastikan API Key benar
2. Cek mode (sandbox/production)
3. Pastikan API Key sesuai dengan mode

### Problem: Signature Invalid

**Error:**
```
Invalid signature
```

**Solution:**
1. Cek Private Key di `.env`
2. Pastikan merchant_code benar
3. Verifikasi format signature

### Problem: Amount Too Small/Large

**Error:**
```
Amount below minimum / Amount exceeds maximum
```

**Solution:**
- Cek min/max amount di [Channel Payment](#-channel-payment)
- Sesuaikan nominal dengan limit channel

### Problem: Webhook Tidak Terima

**Solution:**
1. Pastikan webhook URL publik dan accessible
2. Gunakan HTTPS (bukan HTTP)
3. Test dengan tools seperti ngrok untuk development
4. Cek firewall settings

### Problem: Transaction Expired

**Error:**
```
Transaction has expired
```

**Solution:**
- Set `expired_time` lebih lama
- Default: `Date.now() / 1000 + 3600` (1 jam)
- Max expired berbeda per channel

---

## 🔒 Security Best Practices

### ✅ DO's

- ✅ Gunakan HTTPS untuk webhook
- ✅ Validasi signature di webhook
- ✅ Simpan credential di `.env` (jangan hardcode)
- ✅ Add `.env` ke `.gitignore`
- ✅ Gunakan sandbox untuk testing
- ✅ Log semua transaksi
- ✅ Implement rate limiting
- ✅ Validasi input user

### ❌ DON'Ts

- ❌ Jangan commit `.env` ke git
- ❌ Jangan share API Key/Private Key
- ❌ Jangan hardcode credential
- ❌ Jangan skip signature validation
- ❌ Jangan gunakan HTTP untuk webhook
- ❌ Jangan langsung production tanpa testing

---

## 🤝 Contributing

Contributions are welcome! Berikut cara berkontribusi:

1. **Fork** repository ini
2. **Clone** fork Anda
   ```bash
   git clone https://github.com/YOUR_USERNAME/Module-payment-Tripay.git
   ```
3. **Create branch** baru
   ```bash
   git checkout -b feature/AmazingFeature
   ```
4. **Commit** perubahan
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
5. **Push** ke branch
   ```bash
   git push origin feature/AmazingFeature
   ```
6. **Open Pull Request**

### Development Guidelines

- Follow existing code style
- Add comments untuk logic kompleks
- Update README jika ada perubahan API
- Test sebelum submit PR

---

## 📞 Support & Resources

### 📖 Dokumentasi Resmi

- [Tripay Documentation](https://tripay.co.id/developer)
- [API Reference](https://tripay.co.id/developer?tab=api-reference)
- [Sandbox Dashboard](https://tripay.co.id/merchant/transactions)

### 💬 Community

- [Tripay Discord](https://discord.gg/tripay)
- [GitHub Issues](https://github.com/InDsToReE/Module-payment-Tripay/issues)

### 🆘 Need Help?

Jika mengalami masalah:
1. Cek [Troubleshooting](#-troubleshooting)
2. Baca [dokumentasi Tripay](https://tripay.co.id/developer)
3. Open [GitHub Issue](https://github.com/InDsToReE/Module-payment-Tripay/issues)
4. Kontak Tripay Support

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

- [Tripay](https://tripay.co.id) - Payment Gateway Provider
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
