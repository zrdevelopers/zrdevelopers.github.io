'use client';
import React, { Fragment, useState } from 'react';

// Components
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Heading from '@/components/heading';
import PrivacyModal from '@/app/kebijakan-privasi';
import TermsModal from '@/app/syarat-dan-ketentuan';
import Contactus from '@/app/kontak-kami';
import PortofolioPage from './index';
import PesanSekarangModal from '@/app/modals/pesan-sekarang';
import TerimaKasihModal from '@/app/modals/terima-kasih';

export default function Page() {
  const [dataProducts, setDataProducts] = useState({});

  const handlePesanSekarang = async (e, products) => {
    setDataProducts(products);
  };
  return (
    <Fragment>
      <Navbar page="artikel" />
      <Heading title="Portofolio" />
      <div className="pt-5">
        <PortofolioPage handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      </div>

      <Contactus handlePesanSekarang={(e, products) => handlePesanSekarang(e, products)} />
      <Footer />

      <PesanSekarangModal dataProducts={dataProducts} />
      <TerimaKasihModal />
      <PrivacyModal />
      <TermsModal />
    </Fragment>
  );
}
