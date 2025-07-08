import React from 'react';
import TentangKamiPage from './tentangKamiPage';

export async function generateMetadata() {
  return {
    title: `Tentang Kami | ZRDigitalTech`,
    description: `Kenali ZRDigitalTech, penyedia jasa pembuatan website terpercaya yang berkomitmen membantu bisnis dan UMKM tampil profesional secara online. Kami mengutamakan kualitas, kecepatan, dan kepuasan klien.`,
    openGraph: {
      url: `https://zrdigitaltech.github.io/tentang-kami`,
      images: [
        `https://zrdigitaltech.github.io/assets/images/featured-projects/featured-project-1.jpg`
      ] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <TentangKamiPage />;
}
