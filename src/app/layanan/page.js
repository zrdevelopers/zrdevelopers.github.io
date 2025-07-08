import React from 'react';
import LayananPage from './layananPage';

export async function generateMetadata() {
  return {
    title: `Layanan Jasa Pembuatan Website Profesional | ZRDigitalTech`,
    description: `ZRDigitalTech menyediakan layanan pembuatan website untuk UMKM, bisnis, dan personal dengan desain menarik, kecepatan optimal, serta SEO yang mendongkrak visibilitas online Anda. Bayar setelah jadi & garansi revisi!`,
    openGraph: {
      url: `https://zrdigitaltech.github.io/layanan`,
      images: [
        `https://zrdigitaltech.github.io/assets/images/featured-projects/featured-project-1.jpg`
      ] // ganti jika ada banner khusus
    }
  };
}

export default function Page() {
  return <LayananPage />;
}
