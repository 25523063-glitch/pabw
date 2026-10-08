// Pertemuan 9 — DOM dan Event.
// app.js menyimpan data dan fungsi murni; berkas ini yang menyentuh halaman.
import { daftarProyek } from "./app.js";

// ---------- A.3 Daftar elemen yang diisi ----------
const wadah = document.querySelector("#daftar");             // daftar proyek
const filter = document.querySelector("#filter");            // baris tombol filter
const kosong = document.querySelector("#pesan-kosong");      // pesan daftar kosong
const form = document.querySelector("#kontak form");         // form kontak
const kolomNama = document.querySelector("#nama");
const kolomEmail = document.querySelector("#email");
const kolomNim = document.querySelector("#nim");
const kolomPesan = document.querySelector("#pesan");

// Beri tahu bila ada elemen yang tidak ditemukan (penyebab galat null paling umum).
const wajib = { wadah, filter, kosong, form, kolomNama, kolomEmail, kolomNim, kolomPesan };
const hilang = Object.entries(wajib).filter(([, el]) => el === null).map(([nama]) => nama);
if (hilang.length > 0) {
  console.error(`Elemen tidak ditemukan: ${hilang.join(", ")}. Periksa id di profil.html.`);
}

// ---------- B.1 Satu isi array, satu kartu (tanpa innerHTML) ----------
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.dataset.kategori = proyek.kategori;

  const judul = document.createElement("strong");
  judul.textContent = proyek.judul; // teks, bukan HTML

  const meta = document.createElement("span");
  meta.textContent = ` · ${proyek.tahun} · ${proyek.kategori}`;

  const deskripsi = document.createElement("p");
  deskripsi.textContent = proyek.deskripsi;

  li.append(judul, meta, deskripsi);
  return li;
}

// ---------- B.2 dan D. Render: kosongkan dulu, isi sekali, tangani keadaan kosong ----------
function render(data) {
  if (wadah === null || kosong === null) return;

  wadah.textContent = ""; // baris pertama: buang isi lama

  const fragmen = document.createDocumentFragment(); // wadah sementara di luar halaman
  data.forEach((proyek) => fragmen.append(buatKartu(proyek)));
  wadah.append(fragmen); // halaman digambar sekali

  kosong.hidden = data.length > 0;
}

// ---------- C. Menyaring data ----------
const saring = (kategori) =>
  kategori === "semua"
    ? daftarProyek
    : daftarProyek.filter((proyek) => proyek.kategori === kategori);

const tandaiAktif = (tombolAktif) => {
  filter.querySelectorAll("button").forEach((tombol) => {
    const aktif = tombol === tombolAktif;
    tombol.classList.toggle("aktif", aktif);
    tombol.setAttribute("aria-pressed", String(aktif));
  });
};

// Event delegation: satu pendengar di induk, bukan satu per tombol.
if (filter !== null) {
  filter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (tombol === null || !filter.contains(tombol)) return;
    tandaiAktif(tombol);
    render(saring(tombol.dataset.kategori));
  });
}

// Tampilan awal: semua proyek.
render(daftarProyek);