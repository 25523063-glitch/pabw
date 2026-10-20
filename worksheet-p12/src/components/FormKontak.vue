<script setup>
import { ref } from 'vue'
const form = ref({ nama: '', email: '', nim: '', pesan: '' })
function kirim() { form.value = { nama: '', email: '', nim: '', pesan: '' } }
</script>
<template><section id="kontak"><h2>Hubungi saya</h2><p>Isi formulir berikut. Semua kolom bertanda wajib harus diisi.</p><form @submit.prevent="kirim"><fieldset><legend>Data pengirim</legend><p><label for="nama">Nama lengkap</label><input id="nama" v-model="form.nama" required /></p><p><label for="email">Email</label><input id="email" v-model="form.email" type="email" required /></p><p><label for="nim">NIM</label><input id="nim" v-model="form.nim" inputmode="numeric" pattern="[0-9]{8}" required /><span id="nim-bantuan">Delapan digit angka.</span></p><p><label for="pesan">Pesan</label><textarea id="pesan" v-model="form.pesan" rows="4" required /></p><button type="submit">Kirim</button></fieldset></form></section></template>
