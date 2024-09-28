'use client';
import './header.scss';
import React from 'react';

const Index = () => {
  return (
    <header className="banner" id="top">
      <div className="container">
        <div className="banner-content">
          <h1>
            Era digital seperti sekarang
            <br /> belum punya website?{' '}
            <span className="txt-grad-ef">Siap-Siap Kalah Saing dengan Kompetitor!</span>
          </h1>
          <p className="section-subheading">
            Dalam persaingan bisnis yang semakin sengit di era digital, memiliki website bukan
            sekadar opsi—itu adalah <b>sebuah keharusan</b>. Jangan biarkan pesaing melangkah lebih
            dulu. <b>Bangun dan tingkatkan brand Anda dengan website yang profesional.</b>
          </p>
          <a href="#clients" className="custom-btn btn-big grad-style-ef page-scroll">
            BACA LEBIH LANJUT
          </a>
        </div>
        {/* <!-- End of .banner-content --> */}
      </div>
      {/* <!-- End of .container --> */}
    </header>
  );
};

export default Index;
