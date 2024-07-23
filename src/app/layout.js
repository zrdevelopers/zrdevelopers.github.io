import dynamic from 'next/dynamic';

// css
import '@/assets/styles/miniline.css';
import '@/assets/styles/vendor/bootstrap.min.css';
import '@/assets/styles/vendor/slick.css';
import '@/assets/styles/vendor/slick-theme.css';
import '@/assets/styles/vendor/magnific-popup.css';
import '@/assets/styles/main.css';
import '@/assets/styles/responsive.css';

// layout.js
// Components
import Heads from '@/components/head';
import Scripts from '@/components/scripts';
const ReduxProvider = dynamic(() => import('@/redux/provider'), {
  ssr: false,
  loading: () => (
    <div className="loader">
      <img src="/assets/images/192x192.png" alt={metadata.title} />
    </div>
  )
});

export const metadata = {
  // Basic metas
  authors: [{ name: 'ZRDevelopers' }],
  keywords: [
    'Jasa Pembuatan Website Tangerang',
    'Jasa Pembuatan Website Profesional',
    'Jasa Pembuatan Website Murah',
    'ZRDevelopers',
    'Zikri Ramdani'
  ],
  manifest: '/manifest.json',
  // Page Title
  title: 'Jasa Pembuatan Website | ZRDevelopers',
  description:
    'ZRDevelopers adalah penyedia pembuatan website yang akan membantu Anda mewujudkan keinginan dan kebutuhan tanpa perlu melakukan coding sendiri.',
  openGraph: {
    url: 'https://zrdevelopers.github.io',
    images: 'https://zrdevelopers.github.io/assets/images/meta.png'
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
