import React from 'react';
import JasaPembuatanWebsiteTerdekatPage from './index';

export async function generateMetadata() {
  return {
    title: `Jasa Pembuatan Website Terdekat - ZRDigitalTech`,
    description: `Buat website profesional, cepat, dan terjangkau hanya di ZRDigitalTech. Bayar setelah jadi!`,
    keywords: 'jasa pembuatan website, website murah, web developer, digital marketing',
    openGraph: {
      title: `Jasa Pembuatan Website Terdekat - ZRDigitalTech`,
      description: `Buat website profesional, cepat, dan terjangkau hanya di ZRDigitalTech.`,
      url: `${process.env.SITE_URL}/jasa-pembuatan-website`,
      images: [`${process.env.SITE_URL}/assets/images/featured-projects/featured-project-1.jpg`] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <JasaPembuatanWebsiteTerdekatPage />;
}
