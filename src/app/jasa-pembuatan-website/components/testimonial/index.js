'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListTestimonial } from '@/redux/action/testimonial/creator';

const Index = () => {
  const testimonialList = useSelector((state) => state.testimonial.testimonialList);
  const dispatch = useDispatch();

  const fetchTestimonialList = async () => {
    dispatch(getListTestimonial());
  };

  useEffect(() => {
    fetchTestimonialList();
  }, []);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-0">
            Ingin tahu pengalaman klien kami dengan <br />
            <span className="txt-grad-ef">Jasa Website ZRDevelopers</span>
          </h2>
          <p className="">Ini dia beberapa cerita dari mereka…</p>
        </div>
        <div className="d-flex" style={{ overflowX: 'auto' }}>
          {testimonialList?.map((item, i) => (
            <div key={item?.id || i} className="col-lg-4 col-md-6 m-b-30 col-11">
              <div className="service-box text-center content-block">
                <div className="box-bg grad-style-cd"></div>
                <p>{item?.description}</p>
                <h5 className="text-center">{item?.nama}</h5>
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
