const KUNCI = 'pabw-p11'
const VERSI = 1

export function simpan(state) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify({ versi: VERSI, kategoriAktif: state.kategoriAktif }))
  } catch (error) {
    console.warn('Pilihan tidak dapat disimpan.', error)
  }
}

export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI)
    if (!teks) return null
    const isi = JSON.parse(teks)
    if (isi.versi !== VERSI || typeof isi.kategoriAktif !== 'string') throw new Error('Format simpanan tidak valid.')
    return isi
  } catch (error) {
    localStorage.removeItem(KUNCI)
    console.warn('Simpanan rusak dibuang.', error)
    return null
  }
}

export function aturUlang() {
  localStorage.removeItem(KUNCI)
}
