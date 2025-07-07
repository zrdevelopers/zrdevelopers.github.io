import KotaPage from './index';

export async function generateMetadata({ params }) {
  const { slug } = params;

  const kotaSlug = slug.replace('jasa-pembuatan-website-', '');

  // Ubah "jakarta-selatan" menjadi "Jakarta Selatan"
  const kota = kotaSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Jasa Pembuatan Website ${kota} | ZRDigitalTech`,
    description: `Layanan pembuatan website profesional untuk wilayah ${kota}.`,
    openGraph: {
      url: `https://zrdigitaltech.github.io/jasa-pembuatan-website-${kotaSlug}`,
      images: [`https://zrdigitaltech.github.io/images/og-default.jpg`] // ganti jika ada banner khusus
    }
  };
}

export default function Page({ params }) {
  const { slug } = params;

  const kotaSlug = slug.replace('jasa-pembuatan-website-', '');

  const kota = kotaSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return <KotaPage kota={kota} />;
}

export async function generateStaticParams() {
  const cities = [
    // ✅ Wilayah sekitar Tangerang
    'ciledug',
    'cipondoh',
    'cikupa',
    'bsd',
    'serpong',
    'bintaro',
    'karawaci',
    'cikokol',
    'alam-sutera',
    'gading-serpong',

    // ✅ Wilayah sekitar Tangsel (Tangerang Selatan)
    'pamulang',
    'ciputat',
    'ciputat-timur',
    'pondok-aren',
    'serpong-utara',
    'setu',
    'jombang',
    'pondok-cabe',

    // ✅ Jabodetabek utama
    'jakarta',
    'jakarta-pusat',
    'jakarta-utara',
    'jakarta-selatan',
    'jakarta-barat',
    'jakarta-timur',
    'bogor',
    'depok',
    'tangerang',
    'tangerang-selatan',
    'bekasi',
    'kabupaten-bekasi',
    'kabupaten-bogor',
    'kabupaten-tangerang'
  ];

  return cities.map((city) => ({
    slug: `jasa-pembuatan-website-${city}`
  }));
}
