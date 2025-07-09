'use client';

import React, { Fragment, useEffect, useState } from 'react';

// Components
import Navbar from '@/components/navbar';
import Header from '@/app/jasa-pembuatan-website-terdekat/components/header';
import Footer from '@/components/footer';

// Page
import Aboutus from '@/app/jasa-pembuatan-website-terdekat/components/about-us';
import FeaturedProjects from '@/app/portofolio';
import CaseStudy from '@/app/case-study';
// import Team from '@/app/team';
import Pricing from '@/app/harga';
import Partners from '@/app/partners';
import LatestNews from '@/app/artikel';
import Contactus from '@/app/kontak-kami';

import PrivacyModal from '@/app/kebijakan-privasi';
import TermsModal from '@/app/syarat-dan-ketentuan';

import PesanSekarangModal from '@/app/modals/pesan-sekarang';
import TerimaKasihModal from '@/app/modals/terima-kasih';

import { loadJquery } from '@/lib/loadAnalytic';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = (props) => {
  const { slug } = props;

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
      <Navbar page="artikel" />
      <Header />
      <Aboutus />
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
