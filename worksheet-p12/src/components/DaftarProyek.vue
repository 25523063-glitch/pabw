<script setup>
import { computed } from 'vue'
import { state } from '../state.js'
const proyekTersaring = computed(() => state.kategoriAktif === 'semua' ? state.daftarProyek : state.daftarProyek.filter((proyek) => proyek.jenis === state.kategoriAktif))
</script>
<template><p aria-live="polite">{{ proyekTersaring.length }} proyek ditampilkan.</p><ul><li v-for="proyek in proyekTersaring" :key="proyek.id"><strong>{{ proyek.judul }}</strong> · {{ proyek.tahun }}<br /><span>{{ proyek.deskripsi }}</span></li></ul></template>
