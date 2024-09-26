'use client';

import './styles.scss';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListLatestNews } from '@/redux/action/latest-news/creator';

import NewsModal from '@/app/latest-news/modals';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Link from 'next/link';

const Index = (props) => {
  const { slug } = props;
  const latestNewsList = useSelector((state) => state.latestNews.latestNewsList);
  const dispatch = useDispatch();
  const [dataItem, setDataItem] = useState({});
  const [showModal, setShowModal] = useState(false);

  const fetchLatestNewsList = async () => {
    dispatch(getListLatestNews());
  };

  const handleNewsModal = async (item) => {
    setDataItem(item);
    setShowModal(true);
  };

  useEffect(() => {
    fetchLatestNewsList();
    const slugItem = latestNewsList.find((item) => item?.slug === slug);
    if (slugItem) {
      setDataItem(slugItem);
      setShowModal(true);
    }
  }, [slug, latestNewsList]);

  return (
    <Fragment>
      <section className="latest-news section-padding light-grey-grad" id="news">
        <div className="container">
          <h2 data-aos="fade-left" data-aos-delay="0">
            Artikel Terbaru
          </h2>
        </div>
        {/* <!-- End of .container --> */}

        <div className="news-slider container">
          {/* <div className="news-slider common-slider"> */}
          <div
            className="carousel-container equalHeightWrapper d-flex"
            style={{ overflowX: 'auto' }}
          >
            {latestNewsList?.slice(0, 7)?.map((item, i) => (
              <div
                className={`item col-11 col-sm-4 ${i < 1 ? 'pl-0' : ''}`}
                key={item?.id || i}
                data-aos="fade-left"
                data-aos-delay={i * 100}
              >
                <a
                  href={`/latest-news/${item?.slug}`}
                  className="news-content-block content-block"
                  data-toggle="modal"
                  data-target={'#news-modal' + item?.id}
                  onClick={() => handleNewsModal(item)}
                >
                  <div className="img-container">
                    <LazyLoadImage
                      effect="blur"
                      alt="Jasa Pembuatan Website | ZRDevelopers"
                      src={item.banner}
                      className="img-fluid"
                    />
                  </div>
                  {/* <!-- End of .img-container --> */}
                  <h5 className="equalHeight" title={item?.title?.length > 20 ? item.title : ''}>
                    {/* <span className="content-block__sub-title">{item.date}</span> */}
                    <span className="two-lines">{item?.title}</span>
                  </h5>
                </a>
                {/* <!-- End of .featured-content-block --> */}
              </div>
            ))}
            {/* <!-- End of .item --> */}
            {/* Display "Selengkapnya" for the 8th item */}
            {latestNewsList?.length > 7 && (
              <div
                className="item col-11 col-sm-4"
                data-aos="fade-left"
                data-aos-delay={latestNewsList?.length > 7 * 100}
              >
                <Link href="/latest-news" className="news-content-block content-block">
                  <div className="img-container">
                    <LazyLoadImage
                      effect="blur"
                      alt="Read More Articles"
                      src="/assets/images/logozr.webp" // Provide a default image or leave it out
                      className="img-fluid"
                    />
                  </div>
                  <h5 className="equalHeight">Lihat Lebih Banyak</h5>
                </Link>
              </div>
            )}
          </div>
          {/* <!-- End of .carousel-container --> */}
        </div>
        {/* <!-- End of .news-slider --> */}
      </section>

      {showModal && (
        <NewsModal
          dataItem={dataItem}
          onClose={() => {
            setShowModal(false), setDataItem({});
          }}
          slug={slug}
        />
      )}
    </Fragment>
  );
};

export default Index;
