<script setup>
import { kategori, state, pilihKategori } from '../state.js'
</script>
<template><div aria-label="Filter proyek"><button v-for="item in kategori" :key="item" type="button" :aria-pressed="item === state.kategoriAktif" @click="pilihKategori(item)">{{ item }}</button></div></template>
