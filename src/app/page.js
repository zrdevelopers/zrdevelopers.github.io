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

  useEffect(() => {
    loadGoogleAnalytics();
    loadGoogleTagManager();
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
      />
    </Fragment>
  );
}
