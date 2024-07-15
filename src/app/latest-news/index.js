'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListLatestNews } from '@/redux/action/latest-news/creator';

import NewsModal from '@/app/latest-news/modals';

const Index = () => {
  const latestNewsList = useSelector((state) => state.latestNews.latestNewsList);
  const dispatch = useDispatch();
  const [dataItem, setDataItem] = useState({});

  const fetchLatestNewsList = async () => {
    dispatch(getListLatestNews());
  };

  const handleNewsModal = async (item) => {
    setDataItem(item);
  };

  useEffect(() => {
    fetchLatestNewsList();
  }, []);

  return (
    <Fragment>
      <section className="latest-news section-padding light-grey-grad" id="news">
        <div className="container">
          <h2>Latest News</h2>
        </div>
        {/* <!-- End of .container --> */}

        <div className="news-slider common-slider">
          <div className="carousel-container equalHeightWrapper">
            {latestNewsList.map((item, i) => (
              <div className="item" key={item?.id || i}>
                <a
                  href="#"
                  className="news-content-block content-block"
                  data-toggle="modal"
                  data-target={'#news-modal' + item?.id}
                  onClick={() => handleNewsModal(item)}
                >
                  <div className="img-container">
                    <img
                      src={item.banner}
                      alt="Jasa Pembuatan Website | ZRDevelopers"
                      className="img-fluid"
                    />
                  </div>
                  {/* <!-- End of .img-container --> */}
                  <h5 className="equalHeight">
                    <span className="content-block__sub-title">{item.date}</span>
                    {item.title}
                  </h5>
                </a>
                {/* <!-- End of .featured-content-block --> */}
              </div>
            ))}
            {/* <!-- End of .item --> */}
          </div>
          {/* <!-- End of .carousel-container --> */}
        </div>
        {/* <!-- End of .news-slider --> */}
      </section>

      <NewsModal dataItem={dataItem} />
    </Fragment>
  );
};

export default Index;
