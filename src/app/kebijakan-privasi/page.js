import React from 'react';
import KebijakanPrivasiPage from './kebijakanPrivasiPage';

export async function generateMetadata() {
  return {
    title: `Kebijakan Privasi | ZRDigitalTech`,
    description: `Baca Kebijakan Privasi ZRDigitalTech untuk memahami bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.`,
    openGraph: {
      url: `https://zrdigitaltech.github.io/layanan`,
      images: [
        `https://zrdigitaltech.github.io/assets/images/featured-projects/featured-project-1.jpg`
      ] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <KebijakanPrivasiPage />;
}
