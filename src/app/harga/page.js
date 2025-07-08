import React from 'react';
import HargaPage from './hargaPage';

export async function generateMetadata() {
  return {
    title: `Harga Jasa Pembuatan Website | ZRDigitalTech`,
    description: `Lihat daftar harga jasa pembuatan website di ZRDigitalTech. Mulai dari paket website UMKM, toko online, hingga website perusahaan. Gratis revisi & bayar setelah jadi!`,
    openGraph: {
      url: `https://zrdigitaltech.github.io/harga`,
      images: [
        `https://zrdigitaltech.github.io/assets/images/featured-projects/featured-project-1.jpg`
      ] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <HargaPage />;
}
