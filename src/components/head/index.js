import Head from 'next/head';

const Index = (props) => {
  const { title, description, author, keywords, themeColor, manifest, url, image } = props;

  return (
    <Head>
      {/* Page Title */}
      <title>{title}</title>

      {/* Basic metas */}
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content={themeColor} />
      <link rel="manifest" href={manifest} />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"></link>

      {/* Facebook Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta property="twitter:image:alt" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* <meta name="twitter:creator" content="@YourTwitterHandle" /> */}

      {/* External scripts */}
      {/* 
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8Z94W6TM1Y"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8Z94W6TM1Y');
    </script>
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-59BFX4S');</script> */}
    </Head>
  );
};

export default Index;
