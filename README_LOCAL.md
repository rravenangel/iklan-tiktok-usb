# Panduan Menjalankan Proyek Secara Lokal

Setelah kamu mengekspor proyek ini dari Firebase Studio, ikuti langkah-langkah berikut untuk menjalankannya di komputer kamu:

## Persyaratan
- **Node.js**: Pastikan kamu sudah menginstal Node.js (versi 18 atau lebih baru).
- **NPM/PNPM**: Sudah termasuk dalam instalasi Node.js.

## Langkah Instalasi

1. **Ekstrak File**: Ekstrak file zip hasil export ke folder pilihanmu.
2. **Buka Terminal**: Buka folder tersebut di VS Code atau terminal favoritmu.
3. **Instal Dependencies**:
   ```bash
   npm install
   ```
4. **Jalankan Proyek**:
   ```bash
   npm run dev
   ```
5. **Akses di Browser**: Buka `http://localhost:9002` (atau port yang muncul di terminal).

## Fitur Tambahan
Jika kamu ingin membungkus kembali proyek ini menjadi ZIP di komputer lokalmu, jalankan:
```bash
npm run zip
```
Ini akan membuat file `website_saya.zip` tanpa menyertakan file sampah (node_modules, .next, dll).

## Catatan Penting
- Proyek ini menggunakan **Next.js 15** dengan **App Router**.
- Styling menggunakan **Tailwind CSS**.
- Komponen UI menggunakan **ShadCN UI**.
- Koneksi Firebase sudah terkonfigurasi di `src/firebase/config.ts`.

Selamat mencoba, bro!
