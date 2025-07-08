import React from 'react';
import KontakKamiPage from './kontakKamiPage';

export async function generateMetadata() {
  return {
    title: `Kontak Kami | ZRDigitalTech`,
    description: `Hubungi ZRDigitalTech sekarang untuk konsultasi gratis seputar pembuatan website profesional, cepat, dan SEO-friendly. Kami siap bantu kebutuhan digital Anda.`,
    keywords:
      'kontak jasa pembuatan website, jasa bikin website, hubungi ZRDigitalTech, jasa website Tangerang, jasa website Jakarta, konsultasi website gratis',
    openGraph: {
      url: `${process.env.SITE_URL}/kontak-kami`,
      images: [`${process.env.SITE_URL}/assets/images/featured-projects/featured-project-1.jpg`] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <KontakKamiPage />;
}
