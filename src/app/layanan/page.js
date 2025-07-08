import React from 'react';
import LayananPage from './layananPage';

export async function generateMetadata() {
  return {
    title: `Layanan Jasa Pembuatan Website Profesional | ZRDigitalTech`,
    description: `ZRDigitalTech menyediakan layanan pembuatan website untuk UMKM, bisnis, dan personal dengan desain menarik, kecepatan optimal, serta SEO yang mendongkrak visibilitas online Anda. Bayar setelah jadi & garansi revisi!`,
    keywords: [
      'layanan pembuatan website',
      'jasa website UMKM',
      'jasa website toko online',
      'website profesional',
      'pembuatan website SEO',
      'jasa web ZRDigitalTech'
    ],
    openGraph: {
      url: `${process.env.SITE_URL}/layanan`,
      images: [`${process.env.SITE_URL}/assets/images/featured-projects/featured-project-1.jpg`] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <LayananPage />;
}
