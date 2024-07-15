'use client';

import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListCaseStudy } from '@/redux/action/case-study/creator';

const Index = () => {
  const caseStudyList = useSelector((state) => state.caseStudy.caseStudyList);
  const dispatch = useDispatch();

  const fetchCaseStudyList = async () => {
    dispatch(getListCaseStudy());
  };

  useEffect(() => {
    fetchCaseStudyList();
  }, []);

  return (
    <Fragment>
      <section
        className="case-study grad-style-ef mb-0"
        id="case-studies"
        style={{ padding: '6.5rem 0 6.5rem' }}
      >
        <svg className="bg-shape shape-case reveal-from-right" width="779px" height="759px">
          <defs>
            <linearGradient id="PSgrad_04" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
              <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            fill="url(#PSgrad_04)"
            d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
          />
        </svg>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="case-study-slider text-center">
                {caseStudyList?.case_studies?.map((item, i) => (
                  <div key={item?.id || i} className="item">
                    <h4 className="text-white">Khusus Hari ini: Untuk Semua Paket</h4>
                    <h2>
                      Penawaran Waktu <span className="txt-grad-cd">Terbatas!</span>
                    </h2>
                    <p>
                      Dengan <b>investasi mulai dari Ratusan Ribu</b> Saja, Bisnis anda akan
                      terlihat lebih <b>profesional dan terpercaya</b>!. Jangan lewatkan{' '}
                      <b>kesempatan</b> untuk memulai dengan <b>harga spesial</b> ini. Klik tombol
                      di bawah ini dan <b>wujudkan website impian Anda</b> sekarang juga!
                    </p>
                    <div className="btn-container">
                      <a
                        href={item.link_whatsapp}
                        target="_blank"
                        className="custom-btn btn-big grad-style-ab"

                        // data-toggle="modal"
                        // data-target={'#case-study-modal' + item?.id}
                        // onClick={() => handleCaseStudyModal(item)}
                      >
                        Pesan Website Sekarang
                      </a>
                      {/* <!-- <a href="http://www.youtube.com/watch?v=F85Az1VXbvg" className="video-play-btn video-popup"> */}
                      {/* <i className="fas fa-play"></i> */}
                      {/* </a> --> */}
                    </div>
                  </div>
                ))}
                {/* <!-- End of .item --> */}
              </div>
              {/* <!-- End of .case-study-slider --> */}
            </div>
          </div>
        </div>
        {/* <!-- End of .container --> */}
      </section>
    </Fragment>
  );
};

export default Index;
