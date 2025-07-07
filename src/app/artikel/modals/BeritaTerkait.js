'use client';

import '../styles.scss';
import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListLatestNews } from '@/redux/action/latest-news/creator';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BeritaTerkait = (props) => {
  const { slug } = props;
  const latestNewsList = useSelector((state) => state.latestNews.latestNewsList);
  const dispatch = useDispatch();

  const fetchLatestNewsList = async () => {
    dispatch(getListLatestNews());
  };

  useEffect(() => {
    fetchLatestNewsList();
    // const slugItem = latestNewsList.find((item) => item?.slug !== slug);
    // if (slugItem) {
    //   setDataItem(slugItem);
    //   setShowModal(true);
    // }
  }, [slug, latestNewsList]);

  return (
    <Fragment>
      <div className="d-flex" style={{ overflowX: 'auto' }}>
        {latestNewsList
          ?.filter((item) => item.slug !== slug) // Exclude the current article
          ?.sort(() => 0.5 - Math.random()) // Shuffle the array randomly
          ?.slice(0, 4) // Get the first 4 items from the shuffled list
          ?.map((item, i) => (
            <div
              className={`col-lg-4 col-sm-4 col-11 mb-5 ${i < 1 ? 'pl-0' : ''}`}
              key={item?.id || i}>
              <a href={`/artikel/${item?.slug}`} className="news-content-block content-block">
                <div className="img-container">
                  <LazyLoadImage
                    effect="blur"
                    alt="Jasa Pembuatan Website | ZRDigitalTech"
                    src={item.banner}
                    className="img-fluid"
                  />
                </div>
                {/* <!-- End of .img-container --> */}
                <h5
                  className="equalHeight"
                  style={{ padding: '2rem 2rem 2rem' }}
                  title={item?.title?.length > 20 ? item.title : ''}>
                  {/* <span className="content-block__sub-title">{item.date}</span> */}
                  <span className="two-lines">{item?.title}</span>
                </h5>
              </a>
              {/* <!-- End of .featured-content-block --> */}
            </div>
          ))}
        {/* Display "Selengkapnya" for the 8th item */}
        {latestNewsList?.length > 4 && (
          <div className="col-lg-4 col-sm-4 col-11 mb-5">
            <a href="/latest-news" className="news-content-block content-block">
              <div className="img-container">
                <LazyLoadImage
                  effect="blur"
                  alt="Read More Articles"
                  src="/assets/images/logozr.webp" // Provide a default image or leave it out
                  className="img-fluid"
                />
              </div>
              <h5 className="equalHeight" style={{ padding: '2rem 2rem 2rem' }}>
                Lihat Lebih Banyak
              </h5>
            </a>
            {/* <!-- End of .featured-content-block --> */}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default BeritaTerkait;
