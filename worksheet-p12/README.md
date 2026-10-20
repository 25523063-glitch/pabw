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

## Bantuan AI

AI membantu memigrasikan struktur halaman yang tersedia ke Vue, menyusun komponen, dan menuliskan dokumentasi. Data profil, isi proyek, serta peninjauan akhir tetap menjadi tanggung jawab mahasiswa.
