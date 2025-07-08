import React from 'react';
import SyaratDanKetentuanPage from './syaratDanKetentuanPage';

export async function generateMetadata() {
  return {
    title: `Syarat dan Ketentuan | ZRDigitalTech`,
    description: `Baca Syarat dan Ketentuan penggunaan layanan ZRDigitalTech. Dengan mengakses layanan kami, Anda setuju pada ketentuan yang berlaku mengenai penggunaan, pembayaran, dan hak cipta.`,
    openGraph: {
      url: `https://zrdigitaltech.github.io/layanan`,
      images: [
        `https://zrdigitaltech.github.io/assets/images/featured-projects/featured-project-1.jpg`
      ] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <SyaratDanKetentuanPage />;
}
