'use client';

import React, { Fragment, useEffect, useState } from 'react';

// Components
import Navbar from '@/app/jasa-pembuatan-website/components/navbar';
import Header from '@/app/jasa-pembuatan-website/components/header';
import Footer from '@/app/jasa-pembuatan-website/components/footer';

// Page
import Testimonial from '@/app/jasa-pembuatan-website/components/testimonial';
import Aboutus from '@/app/jasa-pembuatan-website/components/about-us';
import FeaturedProjects from '@/app/jasa-pembuatan-website/components/featured-projects';
import CaseStudy from '@/app/jasa-pembuatan-website/components/case-study';
// import Team from '@/app/jasa-pembuatan-website/components/team';
import Pricing from '@/app/jasa-pembuatan-website/components/pricing';
import Partners from '@/app/jasa-pembuatan-website/components/partners';
// import LatestNews from '@/app/jasa-pembuatan-website/components/latest-news';
// import Contactus from '@/app/jasa-pembuatan-website/components/contact-us';
import BidangBisnis from '@/app/jasa-pembuatan-website/components/bidang-bisnis';
import FAQ from '@/app/jasa-pembuatan-website/components/faq';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

import { useSelector, useDispatch } from 'react-redux';
import { getListFloatingWhatsapp } from '@/redux/action/floating-whatsapp/creator';

import AOS from 'aos';
import 'aos/dist/aos.css';

import PesanSekarangModal from '@/app/modals/pesan-sekarang';

export default function Page() {
  // const { slug } = props;

  const floatingWhatsappList = useSelector((state) => state.floatingWhatsapp.floatingWhatsappList);
  const dispatch = useDispatch();

  const [dataProducts, setDataProducts] = useState({});

  const fetchFloatingWhatsapp = async () => {
    dispatch(getListFloatingWhatsapp());
  };

  const handlePesanSekarang = async (e, products) => {
    setDataProducts(products);
  };

  useEffect(() => {
    AOS.init();
    fetchFloatingWhatsapp();
  }, []);

  return (
    <Fragment>
      <Navbar page="jasa-pembuatan-website" />
      <Header />
      <Partners />
      <Testimonial />
      <FeaturedProjects />
      <Aboutus />

      {/* <Team /> */}
      <BidangBisnis />
      <Pricing handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      <CaseStudy />
      <FAQ />

      {/* <LatestNews slug={slug} /> */}
      {/* <Contactus /> */}
      <Footer />

      <PesanSekarangModal dataProducts={dataProducts} />

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
