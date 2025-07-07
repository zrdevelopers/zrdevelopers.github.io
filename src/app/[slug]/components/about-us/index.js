'use client';

import React from 'react';

const Index = ({ kota }) => {
  return (
    <section className="about-us" id="about-us">
      <svg
        className="bg-shape shape-about reveal-from-right"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="779px"
        height="759px">
        <defs>
          <linearGradient id="PSgrad_02" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
            <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          fillRule="evenodd"
          fill="url(#PSgrad_02)"
          d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
        />
      </svg>

      <div
        className="video-play-bg grad-style-cd"
        style={{ '--bgAfter': `url('/assets/images/about-imgOld.webp')` }}>
        {/* <a href="http://www.youtube.com/watch?v=F85Az1VXbvg" className="video-play-btn video-popup">
          <i className="fas fa-play"></i>
      </a>  */}
      </div>
      {/* <!-- End of .video-play-bg --> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto">
            <h3>Jasa Pembuatan Website Terdekat di {kota}</h3>
            <div>
              <p>
                <strong>ZRDigitalTech</strong> menyediakan layanan pembuatan website profesional di{' '}
                <strong>{kota}</strong> dan sekitarnya. Kami membantu UMKM, bisnis lokal, dan
                personal brand memiliki website yang menarik dan terpercaya.
              </p>
              <p>
                Website dirancang dengan tampilan modern, cepat diakses, responsif di semua
                perangkat, serta dioptimalkan untuk mesin pencari (SEO) agar mudah ditemukan di
                Google.
              </p>
              <p>
                Nikmati kemudahan: <strong>gratis revisi</strong>,{' '}
                <strong>bayar setelah website jadi</strong>, dan dukungan teknis yang siap membantu
                kapan pun dibutuhkan.
              </p>
            </div>
            {/* <!-- End of .counter-block --> */}
          </div>
          {/* <!-- End of .col-lg-6 --> */}
        </div>
      </div>
      {/* <!-- End of .container --> */}
    </section>
  );
};

export default Index;
