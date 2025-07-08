import React from 'react';
import KebijakanPrivasiPage from './kebijakanPrivasiPage';

export async function generateMetadata() {
  return {
    title: `Kebijakan Privasi | ZRDigitalTech`,
    description: `Baca Kebijakan Privasi ZRDigitalTech untuk memahami bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.`,
    keywords: [
      'kebijakan privasi',
      'privasi pengguna',
      'perlindungan data',
      'ZRDigitalTech kebijakan privasi',
      'penggunaan data pribadi',
      'keamanan informasi website'
    ],
    openGraph: {
      url: `${process.env.SITE_URL}/kebijakan-privasi`,
      images: [`${process.env.SITE_URL}/assets/images/featured-projects/featured-project-1.jpg`] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <KebijakanPrivasiPage />;
}
