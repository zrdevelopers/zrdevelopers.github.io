import React from 'react';
import HargaPage from './hargaPage';

export async function generateMetadata() {
  return {
    title: `Harga Jasa Pembuatan Website | ZRDigitalTech`,
    description: `Lihat daftar harga jasa pembuatan website di ZRDigitalTech. Mulai dari paket website UMKM, toko online, hingga website perusahaan. Gratis revisi & bayar setelah jadi!`,
    keywords: [
      'harga jasa pembuatan website',
      'biaya buat website',
      'paket website murah',
      'harga website UMKM',
      'harga website toko online',
      'jasa website profesional',
      'ZRDigitalTech harga website'
    ],
    openGraph: {
      url: `${process.env.SITE_URL}/harga`,
      images: [`${process.env.SITE_URL}/assets/images/featured-projects/featured-project-1.jpg`] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <HargaPage />;
}
