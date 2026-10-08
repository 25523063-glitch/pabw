// Pertemuan 9 — DOM dan Event.
// app.js menyimpan data dan fungsi murni; berkas ini yang menyentuh halaman.
import { daftarProyek, buatItemProyek } from "./app.js";

// ---------- A.3 Daftar elemen yang diisi ----------
const daftar = document.querySelector("#daftar");           // daftar proyek
const filter = document.querySelector("#filter");           // baris tombol filter
const pesanKosong = document.querySelector("#pesan-kosong"); // pesan daftar kosong
const form = document.querySelector("#kontak form");        // form kontak
const kolomNama = document.querySelector("#nama");
const kolomEmail = document.querySelector("#email");
const kolomNim = document.querySelector("#nim");
const kolomPesan = document.querySelector("#pesan");

// Hentikan lebih awal dan beri tahu bila ada elemen yang tidak ditemukan.
const wajib = { daftar, filter, pesanKosong, form, kolomNama, kolomEmail, kolomNim, kolomPesan };
const hilang = Object.entries(wajib).filter(([, el]) => el === null).map(([nama]) => nama);
if (hilang.length > 0) {
  console.error(`Elemen tidak ditemukan: ${hilang.join(", ")}. Periksa id di profil.html.`);
}

// ---------- B & D. Render daftar proyek (termasuk keadaan kosong) ----------
const render = (data) => {
  if (daftar === null || pesanKosong === null) return;
  daftar.innerHTML = data.map(buatItemProyek).join("");
  pesanKosong.hidden = data.length > 0;
};

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