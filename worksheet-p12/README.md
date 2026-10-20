# Worksheet PABW Pertemuan 12

## Lembar A — Perkakas

- Node.js: belum terpasang/terdeteksi pada komputer saat proyek ini disiapkan.
- npm: belum terpasang/terdeteksi pada komputer saat proyek ini disiapkan.
- Git: tersedia (`2.56.0.windows.2`).

Proyek ini disiapkan dari halaman profil yang tersedia pada Worksheet P8. Worksheet menyebut aset P11, tetapi berkas P11 lengkap tidak tersedia di folder kerja saat ini.

## Status validasi

`npm run dev`, `npm run build`, dan `npm run preview` belum dapat dijalankan sampai Node.js LTS (minimal Node 20.19 atau 22.12) dipasang dan `npm install` selesai.

## Lembar B — Kerangka Vue

Kerangka Vite/Vue telah disiapkan secara manual karena `npm create vite` tidak dapat dijalankan tanpa Node.js dan npm. Setelah Node.js tersedia, jalankan `npm install` untuk membuat `package-lock.json` dan memasang dependensi.

## Lembar C — Aset yang dipindahkan

Lima berkas CSS dan foto profil yang tersedia telah dipindahkan apa adanya ke `src/`. Data halaman dipisahkan ke `src/data.js` dan diberi `id` unik untuk kebutuhan `v-for`. Berkas `api.js` serta CSS responsif yang disebut worksheet tidak ada pada sumber P8 yang tersedia, sehingga tidak dapat dipindahkan tanpa mengarang isi baru.

## Lembar E — Keadaan dan simpanan

`state` adalah objek `reactive()`. Kategori aktif dibaca sekali lewat `onMounted`, disimpan kembali lewat `watch`, dan dapat dikembalikan ke nilai bawaan dengan tombol atur ulang. Kunci penyimpanan tetap `pabw-p11` dengan versi data `1`.

## Lembar F — Build produksi

Belum diverifikasi di komputer ini karena Node.js dan npm tidak tersedia. Setelah memasang Node.js LTS, jalankan berikut dari `worksheet-p12/`:

```sh
npm install
npm run build
npm run preview
```

Folder `dist/` sengaja diabaikan Git. Catat ukuran aset dari Network panel setelah preview berjalan.

## Lembar G — Tiket keluar

1. `dependencies` dibutuhkan aplikasi saat berjalan (contoh: `vue`); `devDependencies` dipakai untuk pengembangan/build (contoh: `vite`).
2. `package-lock.json` mengunci versi paket agar instalasi sama; `node_modules/` dapat dibuat ulang dengan `npm install`.
3. `npm create vite@latest . -- --template vue` membuat kerangka Vue; titik berarti folder saat ini.
4. Template Vue merender ulang berdasarkan state reaktif; Vue yang mengatur pembaruan itu.
5. Props bersifat satu arah agar sumber data induk tetap konsisten dan mudah dilacak.
6. `npm run dev` melayani sumber dengan pembaruan otomatis; `npm run preview` menyajikan hasil di `dist/` untuk pemeriksaan produksi.
7. `dist/` adalah keluaran build yang dapat dibuat ulang, jadi tidak perlu memenuhi riwayat Git.

Hal yang perlu diingat: jalankan build hanya setelah memastikan impor dan nama berkas memakai huruf besar-kecil yang sama.

## Pemeriksaan akhir

- Empat komponen berada di `src/components/`; `KepalaProfil` menerima props `profil`.
- State reaktif dan localStorage berada di `src/state.js` dan `src/simpanan.js`.
- `node_modules/` dan `dist/` diabaikan melalui `.gitignore`.
- Validasi dev/build/preview serta pembuatan `package-lock.json` menunggu pemasangan Node.js LTS.

## Bantuan AI

AI membantu memigrasikan struktur halaman yang tersedia ke Vue, menyusun komponen, dan menuliskan dokumentasi. Data profil, isi proyek, serta peninjauan akhir tetap menjadi tanggung jawab mahasiswa.
