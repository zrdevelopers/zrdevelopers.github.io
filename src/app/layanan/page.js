import React from 'react';
import LayananPage from './layananPage';

export async function generateMetadata() {
  return {
    title: `Layanan | ZRDigitalTech`,
    description: `Butuh jasa pembuatan website profesional? ZRDigitalTech siap bantu wujudkan website bisnis yang menarik, cepat, dan SEO friendly. Gratis revisi & bayar setelah jadi!`,
    openGraph: {
      url: `https://zrdigitaltech.github.io/tentang-kami`,
      images: [
        `https://zrdigitaltech.github.io/assets/images/featured-projects/featured-project-1.jpg`
      ] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <LayananPage />;
}
