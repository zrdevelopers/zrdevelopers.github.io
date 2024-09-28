'use client';

import './faq.scss';
import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListFaq } from '@/redux/action/faq/creator';

const Index = () => {
  const faqList = useSelector((state) => state.faq.faqList);
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const fetchFaqList = async () => {
    dispatch(getListFaq());
  };

  useEffect(() => {
    fetchFaqList();
  }, []);

  return (
    <Fragment>
      <section className="about-us mt-0 pb-0" id="faq">
        <div className="container">
          <h2 className="text-center mb-0">
            Pertanyaan Yang Sering <span className="txt-grad-ef">Ditanyakan</span>
          </h2>
          <p className="text-center">
            Mungkin salah satu pertanyaan Anda sudah terjawab di sini. Lihat penjelasannya di bawah!
          </p>
          <div id="accordion">
            {faqList?.map((item, i) => (
              <div className="card" key={item?.id || i}>
                <div
                  className="card-header grad-style-ef text-white cursor-pointer"
                  id={`heading${i}`}
                  data-toggle="collapse"
                  data-parent={`#accordion${i}`} // Unique parent ID
                  href={`#menu${i}`}
                  onClick={() => toggleAccordion(i)}
                >
                  <div className="d-flex">
                    <div>
                      <h5 className="mb-0 d-flex align-items-center">
                        <a className="card-link d-flex align-items-center text-white">
                          {item?.title}
                        </a>
                      </h5>
                    </div>
                    <div className="align-items-center d-flex ml-auto">
                      <i
                        className={`${activeIndex === i ? 'ml-symone-70-arrow-left-right-up-down-increase-decrease' : 'ml-symone-69-arrow-left-right-up-down-increase-decrease'}`}
                      ></i>
                    </div>
                  </div>
                </div>
                <div id={`menu${i}`} className={`collapse`}>
                  <div
                    className="card-body"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <!-- End of .container --> */}
      </section>
    </Fragment>
  );
};

export default Index;
