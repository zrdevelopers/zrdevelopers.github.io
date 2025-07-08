import React from 'react';
import ArtikelPage from './artikelPage';

export async function generateMetadata() {
  return {
    title: `Artikel Seputar Website & Digital Marketing | ZRDigitalTech`,
    description: `Temukan berbagai artikel bermanfaat seputar pembuatan website, digital marketing, dan tips meningkatkan bisnis online. Dikelola oleh ZRDigitalTech — partner digital terpercaya Anda.`,
    openGraph: {
      url: `https://zrdigitaltech.github.io/artikel`,
      images: [
        `https://zrdigitaltech.github.io/assets/images/featured-projects/featured-project-1.jpg`
      ] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <ArtikelPage />;
}
