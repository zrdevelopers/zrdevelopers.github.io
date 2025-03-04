export const formatRupiah = (value) => {
  return new Intl.NumberFormat('id-ID').format(value);
};

// Hapus format titik dan konversi ke angka
export const unFormatRupiah = (value) => {
  return Number(value.replace(/\./g, '')) || 0;
};