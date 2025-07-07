import { Fragment } from 'react';

import Modals from '@/components/modals';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ShareButtons from './ShareButtons';
import BeritaTerkait from './BeritaTerkait';

const Index = (props) => {
  const { dataItem, onClose, slug, showModal, setShowModal } = props;

  return (
    <Modals
      classModal={`news-modal ${slug && 'show'} ${dataItem?.id}`}
      idModal={'news-modal' + dataItem?.id}
      modalBg={null}
      modalHeading={null}
      btnClose={false}
      onClose={onClose}
      style={slug && { display: 'block', overflowX: 'hidden', overflowY: 'auto' }}
      modalHeader={
        <Fragment>
          <svg
            className="modal-bg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="379px"
            height="369px">
            <defs>
              <linearGradient id="PSgrad_014" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              fill="url(#PSgrad_014)"
              d="M54.086,281.380 L105.962,327.505 C173.075,387.178 276.496,381.853 336.956,315.610 C397.418,249.367 392.025,147.292 324.911,87.619 L273.035,41.495 C205.921,-18.178 102.501,-12.853 42.040,53.390 C-18.422,119.633 -13.028,221.708 54.086,281.380 Z"
            />
          </svg>
          {/* <!-- End of .modal-bg --> */}
          <svg
            className="news-modal-bg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="379px"
            height="369px">
            <defs>
              <linearGradient id="PSgrad_015" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              fill="url(#PSgrad_015)"
              d="M54.086,281.380 L105.962,327.505 C173.075,387.178 276.496,381.853 336.956,315.610 C397.418,249.367 392.025,147.292 324.911,87.619 L273.035,41.495 C205.921,-18.178 102.501,-12.853 42.040,53.390 C-18.422,119.633 -13.028,221.708 54.086,281.380 Z"
            />
          </svg>
          {/* <!-- End of .modal-bg --> */}
        </Fragment>
      }
      modalBody={
        <Fragment>
          <div className="text-center">
            <LazyLoadImage
              src={dataItem?.image}
              alt="Jasa Pembuatan Website | ZRDigitalTech"
              className="img-fluid modal-feat-img" //w-100
              style={{ maxHeight: '425px' }}
            />
          </div>
          <ShareButtons
            title={dataItem?.title}
            url={`https://ZRDigitalTech.github.io/artikel/${dataItem?.slug}`}
          />
          <h3>
            {/* <span>{dataItem.date}</span>  */}
            {dataItem.title}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: dataItem.description }}></div>
          <div className="pt-5">
            <h5 className="mb-4">Artikel Terkait</h5>
            <BeritaTerkait slug={slug} showModal={showModal} setShowModal={setShowModal} />
          </div>
        </Fragment>
      }
    />
  );
};

export default Index;
