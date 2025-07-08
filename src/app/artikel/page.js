import React from 'react';
import ArtikelPage from './artikelPage';

export async function generateMetadata() {
  return {
    title: `Artikel Seputar Website & Digital Marketing | ZRDigitalTech`,
    description: `Temukan berbagai artikel bermanfaat seputar pembuatan website, digital marketing, dan tips meningkatkan bisnis online. Dikelola oleh ZRDigitalTech — partner digital terpercaya Anda.`,
    keywords:
      'artikel website, artikel digital marketing, tips SEO, strategi online marketing, pembuatan website, marketing UMKM, bisnis online, konten website, jasa pembuatan website',
    openGraph: {
      url: `${process.env.SITE_URL}/artikel`,
      images: [`${process.env.SITE_URL}/assets/images/featured-projects/featured-project-1.jpg`] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <ArtikelPage />;
}
