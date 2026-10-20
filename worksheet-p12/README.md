# Worksheet PABW Pertemuan 12

## Lembar A — Perkakas

- Node.js: `v24.22.0`.
- npm: `11.19.1`.
- Git: tersedia (`2.56.0.windows.2`).

Proyek ini disiapkan dari halaman profil yang tersedia pada Worksheet P8. Worksheet menyebut aset P11, tetapi berkas P11 lengkap tidak tersedia di folder kerja saat ini.

## Status validasi

`npm run dev`, `npm run build`, dan `npm run preview` telah berhasil dijalankan. Server development memakai port `5173`; preview produksi memakai port `4173`.

## Lembar B — Kerangka Vue

Kerangka Vite/Vue telah disiapkan secara manual karena `npm create vite` tidak dapat dijalankan tanpa Node.js dan npm. Setelah Node.js tersedia, jalankan `npm install` untuk membuat `package-lock.json` dan memasang dependensi.

## Lembar C — Aset yang dipindahkan

Lima berkas CSS dan foto profil yang tersedia telah dipindahkan apa adanya ke `src/`. Data halaman dipisahkan ke `src/data.js` dan diberi `id` unik untuk kebutuhan `v-for`. Berkas `api.js` serta CSS responsif yang disebut worksheet tidak ada pada sumber P8 yang tersedia, sehingga tidak dapat dipindahkan tanpa mengarang isi baru.

## Lembar E — Keadaan dan simpanan

`state` adalah objek `reactive()`. Kategori aktif dibaca sekali lewat `onMounted`, disimpan kembali lewat `watch`, dan dapat dikembalikan ke nilai bawaan dengan tombol atur ulang. Kunci penyimpanan tetap `pabw-p11` dengan versi data `1`.

## Lembar F — Build produksi

`npm run build` berhasil memakai Vite `6.4.4`, menghasilkan `dist/`. `npm run preview` memberi respons HTTP 200 pada `http://127.0.0.1:4173/`.

| Aset produksi | Ukuran | Gzip |
| --- | ---: | ---: |
| CSS | 9.60 kB | 2.64 kB |
| JavaScript | 73.63 kB | 29.29 kB |
| Foto profil | 1,850.74 kB | — |

Folder `dist/` sengaja diabaikan Git.

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
- `package-lock.json` sudah dibuat dan ikut disimpan; dev, build, serta preview telah tervalidasi.

## Lembar H — Rubrik dan rujukan

Rubrik sudah ditinjau. Versi perkakas, port, dan ukuran hasil build yang terukur telah dicatat di README ini.

## Bantuan AI

AI membantu memigrasikan struktur halaman yang tersedia ke Vue, menyusun komponen, dan menuliskan dokumentasi. Data profil, isi proyek, serta peninjauan akhir tetap menjadi tanggung jawab mahasiswa.
