'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListAboutUs } from '@/redux/action/about-us/creator';

const Index = () => {
  const aboutUsList = useSelector((state) => state.aboutUs.aboutUsList);
  const dispatch = useDispatch();

  const fetchAboutUsList = async () => {
    dispatch(getListAboutUs());
  };

  useEffect(() => {
    fetchAboutUsList();
  }, []);

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
        style={{ '--bgAfter': `url('/assets/images/about-img.webp')` }}>
        {/* <a href="http://www.youtube.com/watch?v=F85Az1VXbvg" className="video-play-btn video-popup">
          <i className="fas fa-play"></i>
      </a>  */}
      </div>
      {/* <!-- End of .video-play-bg --> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto">
            <h2>{aboutUsList.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: aboutUsList.description }}></div>
            <div className="counter-wrapper d-flex justify-content-between">
              <div className="inner-block">
                <div className="counter-block d-block txt-grad-ef">
                  <span className="counter">{aboutUsList.happy_clients}</span>+
                </div>
                KLIEN
                <br />
                BAHAGIA
              </div>
              <div className="inner-block">
                <div className="counter-block d-block txt-grad-ab">
                  <span className="counter">{aboutUsList.projects_completed}</span>+
                </div>
                PROYEK
                <br />
                SELESAI
              </div>
              <div className="inner-block">
                <div className="counter-block d-block txt-grad-cd">
                  <span className="counter">{aboutUsList.running_projects}</span>+
                </div>
                PROYEK
                <br />
                BERLANGSUNG
              </div>
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
