import React from 'react';
import PortofolioPage from './portofolioPage';

export async function generateMetadata() {
  return {
    title: `Portofolio Jasa Pembuatan Website | ZRDigitalTech`,
    description: `Lihat hasil karya website yang telah kami buat untuk UMKM, bisnis lokal, dan perusahaan. ZRDigitalTech berpengalaman menciptakan website profesional, responsif, dan SEO friendly.`,
    openGraph: {
      url: `https://zrdigitaltech.github.io/portofolio`,
      images: [
        `https://zrdigitaltech.github.io/assets/images/featured-projects/featured-project-1.jpg`
      ] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <PortofolioPage />;
}
