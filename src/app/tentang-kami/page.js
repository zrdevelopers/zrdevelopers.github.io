import React from 'react';
import TentangKamiPage from './tentangKamiPage';

export async function generateMetadata() {
  return {
    title: `Tentang Kami | ZRDigitalTech`,
    description: `Kenali ZRDigitalTech, penyedia jasa pembuatan website terpercaya yang berkomitmen membantu bisnis dan UMKM tampil profesional secara online. Kami mengutamakan kualitas, kecepatan, dan kepuasan klien.`,
    keywords: [
      'tentang ZRDigitalTech',
      'jasa pembuatan website',
      'pengembang website UMKM',
      'tim web developer profesional',
      'layanan digital bisnis',
      'web agency Indonesia'
    ],
    openGraph: {
      url: `${process.env.SITE_URL}/tentang-kami`,
      images: [`${process.env.SITE_URL}/assets/images/featured-projects/featured-project-1.jpg`] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <TentangKamiPage />;
}
