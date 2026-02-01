# 📦 Panduan Instalasi - Tripay Payment Gateway

## 🎯 Struktur File Project

Setelah clone repository, struktur file Anda akan seperti ini:

```
Module-payment-Tripay/
├── payment.js              # ← Module utama Tripay
├── example.js              # ← Interactive CLI demo
├── env                     # ← Template environment (HARUS DIRENAME!)
├── payment_code.json       # ← Data channel payment
├── package.json            # ← NPM configuration
├── README.md               # ← Dokumentasi
├── .gitignore             # ← Git ignore rules
└── (file lainnya)
```

---

## 🚀 Langkah Instalasi

### ✅ Step 1: Clone Repository

```bash
git clone https://github.com/InDsToReE/Module-payment-Tripay.git
cd Module-payment-Tripay
```

### ✅ Step 2: Install Dependencies

**Letakkan file `package.json` di root folder project** (di folder `Module-payment-Tripay/`)

```bash
# Install dependencies
npm install
```

Setelah install, akan muncul pesan:
```
✅ Dependencies installed successfully!
📝 Next steps:
1. Rename "env" to ".env"
2. Edit .env file with your Tripay credentials
3. Run: npm start
```

### ✅ Step 3: Setup Environment File

**PENTING:** Rename file `env` menjadi `.env`

```bash
# Di Linux/Mac:
mv env .env

# Di Windows (Command Prompt):
ren env .env

# Di Windows (PowerShell):
Rename-Item env .env
```

**Atau rename manual:**
1. Cari file bernama `env` (tanpa extension)
2. Rename menjadi `.env` (dengan titik di depan)
3. Pastikan nama file **persis** `.env`

### ✅ Step 4: Edit File `.env`

Buka file `.env` dengan text editor dan isi kredensial Tripay Anda:

```env
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

**Cara mendapatkan kredensial:**
1. Daftar di https://tripay.co.id/member/register
2. Login ke dashboard
3. Menu → API Key
4. Copy API Key, Private Key, dan Merchant Code
5. Paste ke file `.env`

### ✅ Step 5: Run Program

```bash
npm start
```

Atau:

```bash
node example.js
```

---

## 📁 Penempatan File `package.json`

### ✅ BENAR (Flat Structure):

```
Module-payment-Tripay/
├── package.json        ← DI SINI (root folder)
├── payment.js
├── example.js
├── .env
└── ...
```

### ❌ SALAH:

```
Module-payment-Tripay/
├── src/
│   └── package.json    ← JANGAN DI SINI
├── payment.js
└── ...
```

**File `package.json` HARUS di root folder** (di level yang sama dengan `payment.js` dan `example.js`)

---

## 🔧 Penggunaan NPM Scripts

Setelah install, Anda bisa gunakan scripts berikut:

```bash
# Jalankan interactive CLI
npm start

# Atau langsung dengan node
node example.js
```

---

## ✅ Checklist Instalasi

Pastikan semuanya sudah benar:

- [ ] Repository sudah di-clone
- [ ] Masuk ke folder `Module-payment-Tripay`
- [ ] File `package.json` ada di root folder
- [ ] Run `npm install` berhasil
- [ ] File `env` sudah direname jadi `.env`
- [ ] File `.env` sudah diisi dengan kredensial Tripay
- [ ] Run `npm start` berhasil tanpa error
- [ ] Menu interaktif muncul

---

## ❓ Troubleshooting

### Problem: Cannot find module 'dotenv'

**Solusi:**
```bash
npm install
```

### Problem: ENOENT: no such file or directory, open '.env'

**Solusi:**
- Pastikan file `env` sudah direname ke `.env`
- Pastikan `.env` ada di root folder (sejajar dengan `payment.js`)

### Problem: Invalid TRIPAY_MODE

**Solusi:**
- Buka file `.env`
- Set `TRIPAY_MODE=sandbox` atau `TRIPAY_MODE=production`

### Problem: Authentication failed

**Solusi:**
- Cek API Key di file `.env`
- Pastikan API Key sesuai dengan mode (sandbox/production)
- Pastikan tidak ada spasi di awal/akhir API Key

---

## 🎯 Quick Start

Setelah instalasi selesai:

```bash
# 1. Clone
git clone https://github.com/InDsToReE/Module-payment-Tripay.git
cd Module-payment-Tripay

# 2. Install
npm install

# 3. Setup .env
mv env .env
# Edit .env dengan kredensial Anda

# 4. Run
npm start
```

---

## 📞 Butuh Bantuan?

- 📖 Baca [README.md](README.md) untuk dokumentasi lengkap
- 🐛 Buat issue di [GitHub](https://github.com/InDsToReE/Module-payment-Tripay/issues)
- 💬 Join komunitas Tripay

---

**Happy Coding! 🚀**
