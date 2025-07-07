'use client';

import React, { Fragment, useEffect, useState } from 'react';

// Components
import Navbar from '@/components/navbar';
import Header from '@/app/[slug]/components/header';
import Footer from '@/components/footer';

// Page
import Services from '@/app/services';
import Aboutus from '@/app/[slug]/components/about-us';
import FeaturedProjects from '@/app/featured-projects';
import CaseStudy from '@/app/case-study';
// import Team from '@/app/team';
import Pricing from '@/app/pricing';
import Partners from '@/app/partners';
import LatestNews from '@/app/artikel';
import Contactus from '@/app/contact-us';

import PrivacyModal from '@/app/modals/privacy-modal';
import TermsModal from '@/app/modals/terms-modal';

import PesanSekarangModal from '@/app/modals/pesan-sekarang';
import TerimaKasihModal from '@/app/modals/terima-kasih';

import { loadJquery } from '@/lib/loadAnalytic';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = (props) => {
  const { slug, kota } = props;

  const [dataProducts, setDataProducts] = useState({});

  const handlePesanSekarang = async (e, products) => {
    setDataProducts(products);
  };

  useEffect(() => {
    AOS.init();
    loadJquery();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Header kota={kota} handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      <Services />
      <Aboutus kota={kota} />
      <FeaturedProjects handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      <CaseStudy handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      {/* <Team /> */}
      <Pricing handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      <Partners />
      <LatestNews slug={slug} />
      <Contactus handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      <Footer />

      <PesanSekarangModal dataProducts={dataProducts} />
      <TerimaKasihModal />
      <PrivacyModal />
      <TermsModal />

      {/* {floatingWhatsappList && (
        <FloatingWhatsApp
          avatar={floatingWhatsappList.avatar}
          phoneNumber={floatingWhatsappList.phone_number}
          accountName={floatingWhatsappList.account_name}
          chatMessage={floatingWhatsappList.chat_message}
          statusMessage={floatingWhatsappList.status_message}
          darkMode={true}
          styles={{
            position: 'fixed',
            bottom: '15px',
            border: '0'
          }}
          className="custom-whatsapp-button"
          placeholder="Ketik pesan..."
        />
      )} */}
    </Fragment>
  );
};

export default Index;
