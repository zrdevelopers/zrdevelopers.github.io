'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListFeaturedProjects } from '@/redux/action/featured-projects/creator';

import FeaturedProjectsModal from '@/app/featured-projects/modals';

const Index = () => {
  const featuredProjectsList = useSelector((state) => state.featuredProjects.featuredProjectsList);
  const dispatch = useDispatch();
  // const [groupFeaturedProjectsList, setGroupFeaturedProjectsList] = useState([]);
  const [dataItem, setDataItem] = useState({});

  const fetchFeaturedProjectsList = async () => {
    dispatch(getListFeaturedProjects());
    // fetchGroupFeaturedProjectsList();
  };

  // const fetchGroupFeaturedProjectsList = async () => {
  //   const categories = featuredProjectsList.reduce((acc, project) => {
  //     if (!acc.find((item) => item.category === project.category)) {
  //       acc.push({
  //         id: project.id,
  //         filter: project.filter,
  //         category: project.category
  //       });
  //     }
  //     return acc;
  //   }, []);

  //   setGroupFeaturedProjectsList(categories);
  // };

  const handleProjectModal = async (item) => {
    setDataItem(item);
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
          <h2 className="text-center">Proyek Unggulan</h2>

          <div className="project-showcase text-center">
            {/* <div className="filter-button-group">
              {groupFeaturedProjectsList.map((item, i) => (
                <Fragment key={item?.id || i}>
                {i === 0 && (
                  <a
                    className="filter-button is-checked"
                    data-filter="*"
                    alt="Jasa Pembuatan Website | ZRDevelopers"
                    href="javascript:void(0)"
                  >
                    All Work
                  </a>
                )}
                <a
                  className={`filter-button ${i === 0 ? 'active' : ''}`} // Replace '' with the desired class when the condition isn't met
                  data-filter={item.filter}
                  href="javascript:void(0)"
                >
                  {item.category}
                </a>
              </Fragment>
              ))}
            </div> */}
            {/* <!-- filter-button-group ends --> */}

            <div className="grid row equalHeightWrapper">
              {/* More Items can be added. --> */}
              {featuredProjectsList.map((item, i) => (
                <div key={item?.id || i} className="a1 grid-item col-md-6 col-lg-4">
                  <a
                    href="#"
                    className="featured-content-block content-block"
                    data-toggle="modal"
                    data-target={'#featured-project-modal' + item?.id}
                    onClick={() => handleProjectModal(item)}
                  >
                    <div className="img-container">
                      <img
                        src={item.banner}
                        alt="Jasa Pembuatan Website | ZRDevelopers"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                    {/* <!-- End of .img-container --> */}
                    <h5 className="equalHeight">
                      <span className="content-block__sub-title">{item.category}</span>
                      {item.title}
                    </h5>
                  </a>
                </div>
              ))}
            </div>
            {/* <!-- End of .grid --> */}
            <a
              href="https://bit.ly/Chat-ZRDevelopers"
              className="custom-btn btn-big grad-style-ef btn-full"
            >
              Buatkan Saya Website
            </a>
          </div>
          {/* <!-- End of .template-showcase --> */}
        </div>
        {/* <!-- End of .container --> */}
      </section>

      <FeaturedProjectsModal dataItem={dataItem} />
    </Fragment>
  );
};

export default Index;
