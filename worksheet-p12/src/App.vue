<script setup>
import { onMounted, watch } from 'vue'
import { profil, daftarKeahlian } from './data.js'
import { state } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'
import fotoProfil from './assets/foto-profil.jpeg'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
const tahun = new Date().getFullYear()

onMounted(() => {
  const isi = muat()
  if (isi) state.kategoriAktif = isi.kategoriAktif
})
watch(state, (nilai) => simpan(nilai), { deep: true })
function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>
<template>
  <a class="lewati" href="#utama">Lewati ke konten utama</a><KepalaProfil :profil="profil" />
  <main id="utama">
    <section id="tentang"><h2>Tentang saya</h2><figure class="foto"><img :src="fotoProfil" alt="Foto profil mahasiswa." width="480" height="480" /><figcaption>Foto profil — {{ profil.nama }}</figcaption></figure><div><p>Saya {{ profil.nama }}, mahasiswa {{ profil.kampus }}. Saat ini saya tertarik mempelajari {{ profil.minat }}.</p><input id="tema" class="pengalih-tema" type="checkbox" /><label class="tombol-tema" for="tema">Tema gelap</label></div><div class="table-wrap"><table><caption>Keahlian yang sedang saya kembangkan</caption><thead><tr><th scope="col">Keahlian</th><th scope="col">Tingkat</th></tr></thead><tbody><tr v-for="keahlian in daftarKeahlian" :key="keahlian.nama"><th scope="row">{{ keahlian.nama }}</th><td>{{ keahlian.tingkat }}</td></tr></tbody></table></div></section>
    <section id="karya"><h2>Karya saya</h2><TombolFilter /><button type="button" @click="aturUlangPilihan">Atur ulang pilihan</button><DaftarProyek /></section>
    <FormKontak />
    <section id="tanya-jawab"><h2>Tanya jawab</h2><details><summary>Apa yang sedang saya pelajari?</summary><p>Pengembangan web, JavaScript, dan cara mengolah data halaman secara terstruktur.</p></details><details><summary>Mengapa memilih Informatika?</summary><p>Saya tertarik memakai teknologi untuk membangun solusi yang berguna.</p></details></section>
    <section id="lini-masa"><h2>Lini masa pembelajaran</h2><ol><li>Memulai dasar pemrograman dan pemecahan masalah.</li><li>Mengembangkan prototipe aplikasi bank sampah pada Expo Semester 1.</li><li>Membuat aplikasi desktop toko pakaian berbahan kulit pada Expo Semester 2.</li></ol></section>
  </main>
  <footer class="kaki"><p>{{ profil.nama }} · {{ profil.nim }} · {{ tahun }}</p></footer>
</template>
