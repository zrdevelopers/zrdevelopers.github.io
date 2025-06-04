'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListPartners } from '@/redux/action/partners/creator';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Index = () => {
  const partnersList = useSelector((state) => state.partners.partnersList);
  const dispatch = useDispatch();

  const fetchPartnersList = async () => {
    dispatch(getListPartners());
  };

  useEffect(() => {
    fetchPartnersList();
  }, []);

  return (
    <div className="clients light-grey-bg">
      {/* light-grey-bg */}
      <div className="container">
        <div className="row justify-content-center clients-wrapper">
          {partnersList.map((item, i) => (
            <div
              className="client"
              key={item?.id || i}
              data-aos="fade-down"
              data-aos-delay={i * 100}>
              <LazyLoadImage
                effect="blur"
                alt={item.alt}
                src={item.image}
                className="img-fluid"
                style={
                  item.alt !== 'VandZ15'
                    ? { filter: 'brightness(0.13)' }
                    : { filter: 'grayscale(1)' }
                }
              />
            </div>
          ))}
        </div>
      </div>
      {/* <!-- End of .container --> */}
    </div>
  );
};

export default Index;
