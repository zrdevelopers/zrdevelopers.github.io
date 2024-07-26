'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListPricing } from '@/redux/action/pricing/creator';

const Index = () => {
  const pricingList = useSelector((state) => state.pricing.pricingList);
  const dispatch = useDispatch();

  const fetchPricingList = async () => {
    dispatch(getListPricing());
  };

  useEffect(() => {
    fetchPricingList();
  }, []);

  return (
    <section className="pricing section-padding" id="pricing">
      <div className="container">
        <h2 className="text-center">Harga</h2>
        {pricingList.subtitle && (
          <p className="section-subheading text-center">{pricingList.subtitle}</p>
        )}
        <div className="row pricing-wrapper">
          {pricingList?.plans?.map((item, i) => (
            <div key={item?.id || i} className="col-lg-4 col-md-6">
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
        {/* <!-- End of .pricing-wrapper --> */}
      </div>
      {/* <!-- End of .container --> */}
    </section>
  );
};

export default Index;
