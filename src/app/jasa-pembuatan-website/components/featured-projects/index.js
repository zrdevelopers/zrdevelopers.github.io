'use client';

import React, { Fragment, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListFeaturedProjects } from '@/redux/action/featured-projects/creator';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import IconScroll from '@/components/iconScroll';

const Index = () => {
  const featuredProjectsList = useSelector((state) => state.featuredProjects.featuredProjectsList);
  const dispatch = useDispatch();

  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const scrollContainerRef = useRef(null);

  const fetchFeaturedProjectsList = async () => {
    dispatch(getListFeaturedProjects());
  };

  useEffect(() => {
    fetchFeaturedProjectsList();
  }, [featuredProjectsList]);

  return (
    <Fragment>
      <section className="featured-projects section-padding" id="projects">
        <svg
          className="bg-shape shape-project reveal-from-left"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="779px"
          height="759px"
        >
          <defs>
            <linearGradient id="PSgrad_03" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
              <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            fill="url(#PSgrad_03)"
            d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
          />
        </svg>
        <div className="container">
          <h2 className="text-center mb-0">
            Penasaran? Sebagus apa sih{' '}
            <span className="txt-grad-ef">Website Buatan ZRDigitalTech?</span>
          </h2>
          <p className="text-center mb-0">
            Yuk, intip hasil karya kami dan lihat sendiri kualitasnya:
          </p>
          <div className="project-showcase text-center ">
            <div className="position-relative">
              <div
                ref={scrollContainerRef}
                className="grid d-flex equalHeightWrapper scrollX"
                style={{ overflowX: 'auto', scrollBehavior: 'smooth' }}
              >
                {/* More Items can be added. --> */}
                {featuredProjectsList.map((item, i) => (
                  <div key={item?.id || i} className="a1 grid-item col-md-6 col-lg-4 col-11">
                    <div className="featured-content-block content-block">
                      <div
                        className="img-container"
                        style={{ maxHeight: '285px', overflowY: 'auto' }}
                      >
                        <LazyLoadImage
                          effect="blur"
                          alt="Jasa Pembuatan Website | ZRDigitalTech"
                          src={item?.fullpage}
                          className="img-fluid"
                        />
                      </div>
                      {/* <!-- End of .img-container --> */}
                      <h5 className="equalHeight">
                        <span className="content-block__sub-title">{item?.service}</span>
                        {item.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
              {/* <!-- End of .grid --> */}
              {/* Right Arrow Icon */}
              {featuredProjectsList?.length > 3 && showScrollIcon && (
                <IconScroll
                  scrollContainerRef={scrollContainerRef}
                  setShowScrollIcon={setShowScrollIcon}
                  querySelector=".equalHeightWrapper"
                  style={{ top: '45%' }}
                />
              )}
            </div>
          </div>
          {/* <!-- End of .template-showcase --> */}
        </div>
        {/* <!-- End of .container --> */}
      </section>
    </Fragment>
  );
};

export default Index;
