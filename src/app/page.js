'use client';

import React, { Fragment, useEffect } from 'react';

// Components
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import Footer from '@/components/footer';

// Page
import Services from '@/app/services';
import Aboutus from '@/app/about-us';
import FeaturedProjects from '@/app/featured-projects';
import CaseStudy from '@/app/case-study';
// import Team from '@/app/team';
import Pricing from '@/app/pricing';
import Partners from '@/app/partners';
import LatestNews from '@/app/latest-news';
import Contactus from '@/app/contact-us';

import PrivacyModal from '@/app/modals/privacy-modal';
import TermsModal from '@/app/modals/terms-modal';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

import { useSelector, useDispatch } from 'react-redux';
import { getListFloatingWhatsapp } from '@/redux/action/floating-whatsapp/creator';

export default function Home() {
  const floatingWhatsappList = useSelector((state) => state.floatingWhatsapp.floatingWhatsappList);
  const dispatch = useDispatch();

  const fetchFloatingWhatsapp = async () => {
    dispatch(getListFloatingWhatsapp());
  };

  // Load Jquery
  const loadJquery = () => {
    const existingScript = document.getElementById('jquery-script');
    if (!existingScript) {
      const gaScript = document.createElement('script');
      gaScript.src = '/assets/js/vendor/jquery-3.3.1.min.js';
      gaScript.id = 'jquery-script'; // Set an ID to avoid duplicate scripts
      gaScript.async = true;
      document.head.appendChild(gaScript);
    }
  };

  // Load Google Analytics
  const loadGoogleAnalytics = () => {
    const gaScript = document.createElement('script');
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-8Z94W6TM1Y';
    gaScript.async = true;
    document.head.appendChild(gaScript);

    gaScript.onload = () => {
      const gaScriptInit = document.createElement('script');
      gaScriptInit.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8Z94W6TM1Y');
      `;
      document.head.appendChild(gaScriptInit);
    };

    gaScript.onerror = (error) => {
      console.error('Failed to load Google Analytics:', error);
    };
  };

  // Load Google Tag Manager
  const loadGoogleTagManager = () => {
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id=GTM-59BFX4S'+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-59BFX4S');
    `;
    document.head.appendChild(gtmScript);
  };

  // Load Meta Pixel
  const loadFacebookPixel = () => {
    const fbScript = document.createElement('script');
    fbScript.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '488966464627479');
    fbq('track', 'PageView');
    `;
    document.head.appendChild(fbScript);

    const noScript = document.createElement('noscript');
    noScript.innerHTML = `
    <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=488966464627479&ev=PageView&noscript=1"
    />
    `;
    document.body.appendChild(noScript);
  };

  // Load TikTok Pixel
  const loadTiktokPixel = () => {
    const ttScript = document.createElement('script');
    ttScript.innerHTML = `
    !function (w, d, t) {
      w.TiktokAnalyticsObject=t;
      var ttq=w[t]=w[t]||[];
      ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
      ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
      for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
      ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
      ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
        ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
        n=document.createElement("script");
        n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;
        e=document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(n,e)
      };
      ttq.load('CQCCUQJC77U89M86NUT0');
      ttq.page();
    }(window, document, 'ttq');
  `;
    document.head.appendChild(ttScript);
  };

  useEffect(() => {
    loadJquery();
    loadGoogleAnalytics();
    loadGoogleTagManager();
    loadFacebookPixel();
    loadTiktokPixel();
    fetchFloatingWhatsapp();
  }, []);

  return (
    <Fragment>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-59BFX4S"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}

      <Navbar />
      <Header />
      <Services />
      <Aboutus />
      <FeaturedProjects />
      <CaseStudy />
      {/* <Team /> */}
      <Pricing />
      <Partners />
      <LatestNews />
      <Contactus />
      <Footer />

      <PrivacyModal />
      <TermsModal />

      <FloatingWhatsApp
        avatar={floatingWhatsappList?.avatar}
        phoneNumber={floatingWhatsappList?.phone_number}
        accountName={floatingWhatsappList?.account_name}
        chatMessage={floatingWhatsappList?.chat_message}
        statusMessage={floatingWhatsappList?.status_message}
        darkMode={true}
        // allowEsc={true}
        // allowClickAway
        // notification
        // notificationDelay={60000} // 1 minute
        // notificationSound
        styles={{
          position: 'fixed',
          bottom: '15px',
          height: '0px !important',
          border: '0'
        }}
        className="custom-whatsapp-button"
        placeholder="Ketik pesan..."
      />
    </Fragment>
  );
}
