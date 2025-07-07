'use client';

import './styles.scss';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListLatestNews } from '@/redux/action/latest-news/creator';

// Components
import Navbar from '@/components/navbar';
import Contactus from '@/app/contact-us';
import Footer from '@/components/footer';

import Banners from '@/app/artikel/components/banners';
import NewsModal from '@/app/artikel/modals';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Page = (props) => {
  const { slug } = props;
  const latestNewsList = useSelector((state) => state.latestNews.latestNewsList);
  const dispatch = useDispatch();
  const [dataItem, setDataItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleItems, setVisibleItems] = useState(8); // Tracks how many items are currently visible
  const [loadingMore, setLoadingMore] = useState(false); // Tracks loading state for "Load More"

  const fetchLatestNewsList = async () => {
    dispatch(getListLatestNews());
  };

  const handleNewsModal = async (item) => {
    setDataItem(item);
    setShowModal(true);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setVisibleItems(8); // Reset visible items count when searching
  };

  // Filter latestNewsList based on search term (title or description)
  const filteredNewsList = latestNewsList.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + 8); // Load 10 more items
      setLoadingMore(false);
    }, 1000); // Simulate loading time
  };

  useEffect(() => {
    fetchLatestNewsList();
  }, []);

  return (
    <Fragment>
      <Navbar page="latest-news" />
      <div className="latest-news pb-0">
        <Banners />
        <div className="container pt-5">
          <div className="row">
            <div className="col-12">
              <div className="form-wrapper">
                <form className="contact-form" method="post">
                  <div className="row">
                    <div className="col-12">
                      <input
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e)}
                        type="text"
                        name="keyword"
                        placeholder="Cari artikel..."
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className={`row ${filteredNewsList.length < 4 ? 'd-flex justify-content-center' : ''}`}>
            {filteredNewsList?.length > 0 ? (
              filteredNewsList.slice(0, visibleItems).map((item, i) => (
                <div className="col-sm-3 col-6 mb-5" key={item?.id || i}>
                  <a
                    href={`/artikel/${item?.slug}`}
                    className="news-content-block content-block"
                    data-toggle="modal"
                    data-target={'#news-modal' + item?.id}
                    onClick={() => handleNewsModal(item)}>
                    <div className="img-container">
                      <LazyLoadImage
                        effect="blur"
                        alt="Jasa Pembuatan Website | ZRDigitalTech"
                        src={item.banner}
                        className="img-fluid"
                      />
                    </div>
                    <h5
                      className="equalHeight"
                      style={{ padding: '2rem 2rem 2rem' }}
                      title={item?.title?.length > 20 ? item.title : ''}>
                      <span className="two-lines">{item?.title}</span>
                    </h5>
                  </a>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>Tidak ada artikel yang ditemukan.</p>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {visibleItems < filteredNewsList.length && (
            <div className="text-center mb-5 mb-sm-0">
              <button
                className="custom-btn btn-big grad-style-ef btn-full"
                onClick={handleLoadMore}
                disabled={loadingMore}>
                {loadingMore ? 'Sedang Memuat...' : 'Lihat Lebih Banyak'}
              </button>
            </div>
          )}
        </div>
      </div>
      <Contactus />
      <Footer />

      {showModal && (
        <NewsModal
          dataItem={dataItem}
          onClose={() => {
            setShowModal(false), setDataItem({});
          }}
          slug={slug}
          showModal={showModal}
          setShowModal={setShowModal}
          setDataItem={setDataItem}
        />
      )}
    </Fragment>
  );
};

export default Page;
