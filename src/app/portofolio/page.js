import React from 'react';
import PortofolioPage from './portofolioPage';

export async function generateMetadata() {
  return {
    title: `Portofolio Jasa Pembuatan Website | ZRDigitalTech`,
    description: `Lihat hasil karya website yang telah kami buat untuk UMKM, bisnis lokal, dan perusahaan. ZRDigitalTech berpengalaman menciptakan website profesional, responsif, dan SEO friendly.`,
    keywords: [
      'portofolio website',
      'contoh website UMKM',
      'jasa pembuatan website',
      'ZRDigitalTech portofolio',
      'website bisnis',
      'web desain profesional'
    ],
    openGraph: {
      url: `${process.env.SITE_URL}/portofolio`,
      images: [`${process.env.SITE_URL}/assets/images/featured-projects/featured-project-1.jpg`] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <PortofolioPage />;
}
