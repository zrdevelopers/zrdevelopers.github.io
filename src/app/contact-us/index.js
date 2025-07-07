'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListContactUs } from '@/redux/action/contact-us/creator';

const Index = (props) => {
  const { handlePesanSekarang } = props;
  const contactUsList = useSelector((state) => state.contactUs.contactUsList);
  const dispatch = useDispatch();

  const fetchContactUsList = async () => {
    dispatch(getListContactUs());
  };

  useEffect(() => {
    fetchContactUsList();
  }, []);

  return (
    <section className="contact light-grey-bg" id="contact">
      <div className="grey-bg">
        <div className="trigger-contact"></div>
        <svg
          className="bg-shape shape-contact reveal-from-left"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="779px"
          height="759px">
          <defs>
            <linearGradient id="PSgrad_07" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
              <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            fill="url(#PSgrad_07)"
            d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
          />
        </svg>

        <svg
          className="bg-shape shape-contact-2 reveal-from-right"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="779px"
          height="759px">
          <defs>
            <linearGradient id="PSgrad_08" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
              <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            fill="url(#PSgrad_08)"
            d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
          />
        </svg>

        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-7">
              <div className="contact-wrapper common-contact-wrapper show-map">
                <div className="form-wrapper">
                  <h3>Send Us a Message</h3>
                  <form className="contact-form" method="post">
                    <div className="row">
                      <div className="col-md-12 col-lg-6">
                        <input type="text" name="fname" placeholder="Full Name" />
                      </div>

                      <div className="col-md-12 col-lg-6">
                        <input type="email" name="email" placeholder="Email" />
                      </div>

                      <div className="col-md-12 col-lg-6">
                        <input type="text" name="phone" placeholder="Phone" />
                      </div>

                      <div className="col-md-12 col-lg-6">
                        <input type="text" name="website" placeholder="Website" />
                      </div>

                      <div className="col-md-12">
                        <textarea name="message" placeholder="Message"></textarea>
                      </div>
                      <div className="btn-wrapper">
                        <button type="submit" className="custom-btn btn-big grad-style-ef">
                          KONTAK KAMI
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!-- End of .form-wrapper --> */}

                <div className="map-wrapper">
                  {/* data-aos="fade-left" data-aos-delay="0" */}
                  <iframe
                    src={contactUsList.embed_google_map}
                    width="600"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen
                    title="Lokasi ZRDigitalTech di Google Maps"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {/* <!-- End of .map-wrapper --> */}
                {/* <a href="#" className="view-map-btn">
                  VIEW MAP
                  <i className="ml-symone-2-arrow-left-right-up-down-increase-decrease"></i>
                </a> */}
              </div>
              {/* <!-- End of .contact-form --> */}
            </div>
            {/* <!-- End of .col-md-6 --> */}
            <div className="col-md-3 offset-md-1">
              <div className="contact-info m-b-70">
                <h3>
                  {/* data-aos="fade-right" data-aos-delay="0" */}
                  Kontak Kami
                </h3>
                <p className="address">
                  {/* data-aos="fade-right" data-aos-delay="100" */}
                  No Whatsapp
                  <a
                    // href={contactUsList.link_whatsapp} target="_blank"
                    href="#"
                    data-toggle="modal"
                    data-target="#pesan-sekarang"
                    onClick={(e) => handlePesanSekarang(e, null)}>
                    {contactUsList.no_whatsapp}
                  </a>
                </p>
                {/* <!-- End of .address --> */}

                <p className="address">
                  {/* data-aos="fade-right" data-aos-delay="200" */}
                  Email
                  <a href="mailto:hello@zrdigitaltech.com" target="_blank">
                    {contactUsList.email}
                  </a>
                </p>
                {/* <!-- End of .address --> */}

                <p className="address">
                  {/* data-aos="fade-right" data-aos-delay="300" */}
                  Alamat
                  <span dangerouslySetInnerHTML={{ __html: contactUsList.address }}></span>
                </p>
                {/* <!-- End of .address --> */}

                <div className="social-icons-wrapper">
                  <p>
                    {/* data-aos="fade-right" data-aos-delay="400" */}
                    Ikuti kami di
                  </p>
                  <ul className="social-icons">
                    {contactUsList?.social_media?.map((item, i) => (
                      <li key={item?.id || i}>
                        {/* data-aos="fade-right" data-aos-delay="500" */}
                        <a
                          href={item.link_social}
                          target="_blank"
                          rel="noopener"
                          aria-label={`Kunjungi ${item.name} kami`}>
                          <i className={'fab ' + item.icon_class}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                  {/* <!-- End of .social-icons --> */}
                </div>
              </div>
              {/* <!-- End of .contact-info --> */}
            </div>
            {/* <!-- End of .col-md-4 --> */}
          </div>
          {/* <!-- End of .row --> */}
        </div>
        {/* <!-- End of .container --> */}
      </div>
    </section>
  );
};

export default Index;
