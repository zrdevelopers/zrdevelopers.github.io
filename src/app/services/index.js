'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListServices } from '@/redux/action/services/creator';

const Index = () => {
  const servicesList = useSelector((state) => state.services.servicesList);
  const dispatch = useDispatch();

  const fetchServicesList = async () => {
    dispatch(getListServices());
  };

  useEffect(() => {
    fetchServicesList();
  }, []);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="d-flex" style={{ overflowX: 'auto' }}>
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
      </div>
      {/* <!-- End of .container --> */}
    </section>
  );
};

export default Index;
