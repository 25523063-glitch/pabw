// Semua data halaman ditulis sekali di sini, bukan sebagai isi tetap di HTML.
export const profil = {
  nama: "M. Naufal Allaam Najib",
  nim: "25523063",
  peran: "Mahasiswa Informatika Universitas Islam Indonesia yang tertarik pada teknologi dan pemrograman.",
  kampus: "Universitas Islam Indonesia",
  minat: "pengembangan web dan pemecahan masalah",
  kontak: { kota: "Yogyakarta" }
};

export const daftarKeahlian = [
  { nama: "HTML dan CSS", tingkat: "Menengah" },
  { nama: "Logika pemrograman", tingkat: "Menengah" },
  { nama: "Desain UI/UX", tingkat: "Dasar" }
];

export const daftarProyek = [
  {
    judul: "Poster Lomba 17 Agustus",
    kategori: "desain",
    tahun: 2025,
    deskripsi: "Poster informasi untuk kegiatan peringatan Hari Kemerdekaan."
  },
  {
    judul: "Expo Semester 1",
    kategori: "aplikasi",
    tahun: 2026,
    deskripsi: "Prototipe aplikasi bank sampah untuk kebutuhan presentasi expo."
  },
  {
    judul: "Expo Semester 2",
    kategori: "aplikasi",
    tahun: 2026,
    deskripsi: "Aplikasi desktop toko pakaian dengan bahan dasar kulit."
  }
];

export const jumlahProyek = daftarProyek.length;

// Fungsi murni: hanya memakai argumen dan selalu mengembalikan nilai baru.
const buatPerkenalan = ({ nama, kampus, minat = "teknologi" }) =>
  `Saya ${nama}, mahasiswa ${kampus}. Saat ini saya tertarik mempelajari ${minat}.`;

const formatKeahlian = (keahlian) =>
  keahlian.map(({ nama, tingkat }) => `${nama} (${tingkat})`).join(", ");

export const buatItemProyek = ({ judul, kategori, tahun, deskripsi }) =>
  `<li data-kategori="${kategori}"><strong>${judul}</strong> · ${tahun} · ${kategori}<br><span>${deskripsi}</span></li>`;

const setTeks = (selector, teks) => {
  const elemen = document.querySelector(selector);
  if (elemen === null) {
    console.error(`Elemen ${selector} tidak ditemukan.`);
    return;
  }
  elemen.textContent = teks;
};

document.title = `Profil ${profil.nama} — PABW 2026/2027`;
setTeks("#nama-profil", profil.nama);
setTeks("#peran-profil", profil.peran);
setTeks("#keterangan-foto", `Foto profil — ${profil.nama}`);
setTeks("#perkenalan", buatPerkenalan(profil));
setTeks("#identitas-footer", `${profil.nama} · ${profil.nim} · 2026`);
setTeks("#ringkasan-proyek", `${jumlahProyek} proyek telah didokumentasikan.`);

// Daftar proyek kini diisi oleh js/dom.js (Pertemuan 9); di sini hanya tabel keahlian.
const tabelKeahlian = document.querySelector("#daftar-keahlian");

if (tabelKeahlian !== null) {
  tabelKeahlian.innerHTML = daftarKeahlian
    .map(({ nama, tingkat }) => `<tr><th scope="row">${nama}</th><td>${tingkat}</td></tr>`)
    .join("");
}

// Pemeriksaan data: map mengubah bentuk, filter menyaring, find mengambil satu data.
const proyekAplikasi = daftarProyek.filter(({ kategori }) => kategori === "aplikasi");
const proyekExpo = daftarProyek.find(({ judul }) => judul === "Expo Semester 2");
const judulProyek = daftarProyek.map(({ judul }) => judul);
const proyekTerurut = [...daftarProyek].sort((a, b) => a.tahun - b.tahun);

console.table(daftarProyek);
console.table(proyekAplikasi);
console.log("Proyek Expo:", proyekExpo ?? "Belum ada proyek Expo.");
console.log("Judul proyek:", judulProyek);
console.log("Keahlian:", formatKeahlian(daftarKeahlian));
console.log("Data asli tetap sama setelah sort:", daftarProyek[0].judul === "Poster Lomba 17 Agustus");
console.log("Kota kampus:", profil.kontak?.kota ?? "Belum diisi");

const pengalihTema = document.querySelector("#tema");
const labelTema = document.querySelector("#label-tema");
let statusTema = "gelap";

if (pengalihTema !== null && labelTema !== null) {
  pengalihTema.addEventListener("change", () => {
    statusTema = pengalihTema.checked ? "terang" : "gelap";
    labelTema.textContent = `Tema ${statusTema}`;
  });
}