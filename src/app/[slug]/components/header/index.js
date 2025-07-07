'use client';
import './header.scss';
import React from 'react';

const Index = (props) => {
  const { kota, handlePesanSekarang } = props;
  return (
    <header className="banner" id="top">
      <div className="container">
        <div className="banner-content">
          <h2>Jasa Pembuatan Website {kota}</h2>
          <p className="section-subheading">
            Butuh website yang tampil keren, cepat, dan mudah ditemukan di Google? Kami bantu
            wujudkan website impian Anda – mobile friendly, SEO optimal, dan desain yang memikat
            pelanggan.
          </p>
          <a
            href="#"
            data-toggle="modal"
            data-target="#pesan-sekarang"
            onClick={(e) => handlePesanSekarang(e, null)}
            className="custom-btn btn-big grad-style-ef page-scroll">
            Hubungi Kami Via WhatsApp
          </a>
        </div>
        {/* <!-- End of .banner-content --> */}
      </div>
      {/* <!-- End of .container --> */}
    </header>
  );
};

export default Index;
