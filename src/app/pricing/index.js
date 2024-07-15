'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListPricing } from '@/redux/action/pricing/creator';

import IconScroll from '@/components/iconScroll';

const Index = () => {
  const pricingList = useSelector((state) => state.pricing.pricingList);
  const dispatch = useDispatch();

  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const scrollContainerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth <= 768);

  const fetchPricingList = async () => {
    dispatch(getListPricing());
  };

  useEffect(() => {
    fetchPricingList();
  }, []);

  return (
    <section className="pricing section-padding" id="pricing">
      <div className="container position-relative">
        <h2 className="text-center">Harga</h2>
        {pricingList.subtitle && (
          <p className="section-subheading text-center">{pricingList.subtitle}</p>
        )}
        <div
          ref={scrollContainerRef}
          className="flex-row pricing-wrapper d-flex"
          style={{ overflowX: 'auto', scrollBehavior: 'smooth' }}
        >
          {pricingList?.plans?.map((item, i) => (
            <div key={item?.id || i} className="col-lg-4 col-md-6 col-11">
              <div className="pricing-block text-center content-block">
                <span className="icon-container grad-style-cd-light">
                  <i className="txt-grad-cd">0{i + 1}</i>
                </span>
                <small data-aos="fade-down" data-aos-delay={i * 100}>
                  {item.type}
                </small>
                <div className="price txt-grad-ef" data-aos="fade-down" data-aos-delay={i * 100}>
                  {item.price}
                </div>
                <div className="facilities">
                  {item.features.map((feat, idx) => (
                    <div
                      data-aos="fade-down"
                      data-aos-delay={i * 100}
                      key={feat?.id || idx}
                      dangerouslySetInnerHTML={{ __html: feat }}
                    ></div>
                  ))}
                </div>
                {/* <!-- End of .facilities --> */}
                <a
                  href={item.cta_link}
                  className="custom-btn btn-big grad-style-ef"
                  target="_blank"
                  data-aos="fade-down"
                  data-aos-delay={`${pricingList?.length}00`}
                >
                  {item.cta_text}
                </a>
              </div>
              {/* <!-- End of .pricing-block --> */}
            </div>
          ))}
          {/* <!-- End of .col-md-4 --> */}
        </div>
        {/* Right Arrow Icon */}
        {pricingList?.plans?.length > 1 && showScrollIcon && (
          <IconScroll
            scrollContainerRef={scrollContainerRef}
            setShowScrollIcon={setShowScrollIcon}
            querySelector=".pricing-wrapper"
            style={{ display: isLargeScreen ? 'block' : 'none' }}
            setIsLargeScreen={setIsLargeScreen}
          />
        )}
        {/* <!-- End of .pricing-wrapper --> */}
      </div>
      {/* <!-- End of .container --> */}
    </section>
  );
};

export default Index;
