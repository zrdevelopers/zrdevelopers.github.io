'use client';

import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListCaseStudy } from '@/redux/action/case-study/creator';

// import CaseStudyModal from '@/app/case-study/modals';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Index = (props) => {
  const { handlePesanSekarang } = props;

  const caseStudyList = useSelector((state) => state.caseStudy.caseStudyList);
  const dispatch = useDispatch();
  // const [dataItem, setDataItem] = useState({});

  const fetchCaseStudyList = async () => {
    dispatch(getListCaseStudy());
  };

  // const handleCaseStudyModal = async (item) => {
  //   setDataItem(item);
  // };

  useEffect(() => {
    fetchCaseStudyList();
  }, []);

  return (
    <Fragment>
      <section className="case-study grad-style-ef" id="case-studies">
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
            <div className="col-lg-6 order-lg-2">
              <div className="case-study-slider">
                {caseStudyList?.case_studies?.map((item, i) => (
                  <div key={item?.id || i} className="item">
                    <h2 data-aos="fade-left" data-aos-delay="0">
                      {item.title}
                    </h2>
                    <p data-aos="fade-left" data-aos-delay="100">
                      {item.description}
                    </p>
                    <div className="btn-container" data-aos="fade-left" data-aos-delay="200">
                      <a
                        // href={item.link_whatsapp}
                        // target="_blank"
                        href="#"
                        data-toggle="modal"
                        data-target="#pesan-sekarang"
                        onClick={(e) => handlePesanSekarang(e, null)}
                        className="custom-btn btn-big grad-style-ab"

                        // data-toggle="modal"
                        // data-target={'#case-study-modal' + item?.id}
                        // onClick={() => handleCaseStudyModal(item)}
                      >
                        {item.button_text}
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
            <div className="img-container col-lg-6">
              <LazyLoadImage
                effect="blur"
                alt="Jasa Pembuatan Website | ZRDevelopers"
                src={caseStudyList?.image}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* <!-- End of .container --> */}
      </section>

      {/* <CaseStudyModal dataItem={dataItem} /> */}
    </Fragment>
  );
};

export default Index;
