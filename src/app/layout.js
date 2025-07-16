import dynamic from 'next/dynamic';

// css
import '@/assets/styles/styles.scss';

// import '@/assets/styles/miniline.css';
// import '@/assets/styles/vendor/bootstrap.min.css';
// import '@/assets/styles/main.css';
// import '@/assets/styles/responsive.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@/assets/styles/vendor/slick.css';
// import '@/assets/styles/vendor/slick-theme.css';
// import '@/assets/styles/vendor/magnific-popup.css';

// layout.js
// Components
import Heads from '@/components/head';
import Scripts from '@/components/scripts';
import Loading from '@/components/loading';
const ReduxProvider = dynamic(() => import('@/redux/provider'), {
  ssr: false,
  loading: () => <Loading title={metadata.title} />
});

export const metadata = {
  // Basic metas
  authors: [{ name: 'ZRDigitalTech' }],
  keywords: [
    'Jasa Pembuatan Website Tangerang',
    'Jasa Pembuatan Website Profesional',
    'Jasa Pembuatan Website Murah',
    'ZRDigitalTech',
    'Zikri Ramdani'
  ],
  manifest: '/manifest.json',
  author: 'ZRDigitalTech',
  // Page Title
  title: 'Jasa Pembuatan Website | ZRDigitalTech',
  description:
    'Penyedia pembuatan website yang akan membantu mewujudkan keinginan dan kebutuhan Anda.',
  openGraph: {
    url: `${process.env.SITE_URL}`,
    images: [`${process.env.SITE_URL}/assets/images/meta-zrdigitaltech.webp`] // ganti jika ada banner khusus
  }
};

export const viewport = {
  themeColor: '#ffffff'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Heads
        title={metadata.title}
        description={metadata.description}
        author={metadata.author}
        keywords={metadata.keywords}
        themecolor={viewport.themeColor}
        manifest={metadata.manifest}
        url={metadata.openGraph.url}
        image={metadata.openGraph.images}
      />
      <body>
        <ReduxProvider>
          {children}
          <Scripts />
        </ReduxProvider>
      </body>
    </html>
  );
}
