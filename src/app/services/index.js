'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListServices } from '@/redux/action/services/creator';

import IconScroll from '@/components/iconScroll';

const Index = () => {
  const servicesList = useSelector((state) => state.services.servicesList);
  const dispatch = useDispatch();

  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const scrollContainerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth <= 768);

  const fetchServicesList = async () => {
    dispatch(getListServices());
  };

  useEffect(() => {
    fetchServicesList();
  }, []);

  return (
    <section className="services" id="services">
      <div className="container position-relative">
        <div
          className="d-flex scrollX"
          ref={scrollContainerRef}
          style={{ overflowX: 'auto', scrollBehavior: 'smooth' }}
        >
          {servicesList.map((item, i) => (
            <div key={item?.id || i} className="col-lg-4 col-md-6 m-b-30 col-11">
              <div className="service-box text-center content-block">
                <div className="box-bg grad-style-cd"></div>
                <span className="icon-container grad-style-cd-light">
                  <i className={item.image}></i>
                </span>
                <h5 className="text-center" data-aos="fade-down" data-aos-delay={i * 100}>
                  {item.title}
                </h5>
                <p data-aos="fade-down" data-aos-delay={i * 200}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- End of .row --> */}
        {servicesList?.length > 1 && showScrollIcon && (
          <IconScroll
            scrollContainerRef={scrollContainerRef}
            setShowScrollIcon={setShowScrollIcon}
            querySelector=".scrollX"
            style={{ display: isLargeScreen ? 'block' : 'none' }}
            setIsLargeScreen={setIsLargeScreen}
          />
        )}
      </div>
      {/* <!-- End of .container --> */}
    </section>
  );
};

export default Index;
