import Modals from '@/components/modals';

const Index = (props) => {
  const { dataItem } = props;

  return (
    <Modals
      classModal={'featured-project-modal' + dataItem?.id}
      idModal={'featured-project-modal' + dataItem?.id}
      modalBg={
        <svg
          className="modal-bg"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="379px"
          height="369px"
        >
          <defs>
            <linearGradient id="PSgrad_012" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
              <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            fill="url(#PSgrad_012)"
            d="M54.086,281.380 L105.962,327.505 C173.075,387.178 276.496,381.853 336.956,315.610 C397.418,249.367 392.025,147.292 324.911,87.619 L273.035,41.495 C205.921,-18.178 102.501,-12.853 42.040,53.390 C-18.422,119.633 -13.028,221.708 54.086,281.380 Z"
          />
        </svg>
      }
      modalHeading={null}
      btnClose={true}
      modalBody={
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              id="featured-project-carousel"
              className="carousel slide featured-project-carousel"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                {dataItem?.carousel_images?.length > 1 &&
                  dataItem?.carousel_images?.map((item, i) => (
                    <li
                      key={item?.id || i}
                      data-target="#featured-project-carousel"
                      data-slide-to={i}
                      class={`${i === 0 ? 'active' : ''}`}
                    ></li>
                  ))}
              </ol>
              <div className="carousel-inner">
                {dataItem?.carousel_images?.map((item, i) => (
                  <div class={`carousel-item ${i === 0 ? 'active' : ''}`} key={item?.id || i}>
                    <img
                      className="d-block w-100 img-fluid"
                      src={item}
                      alt="Jasa Pembuatan Website | ZRDevelopers"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#featured-project-carousel"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#featured-project-carousel"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/* <!-- End of .featured-project-carousel --> */}
          </div>
          {/* <!-- End of .col-lg-6 --> */}

          <div className="col-lg-6">
            <div className="text-content">
              <h3>
                <span>{dataItem.category}</span> {dataItem.title}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: dataItem.description }}></div>
              {dataItem?.launch_website && (
                <a
                  href={dataItem?.launch_website}
                  className="custom-btn btn-big grad-style-ef"
                  target="_blank"
                >
                  SITUS WEB
                </a>
              )}
            </div>
            {/* <!-- End of .text-content --> */}
          </div>
        </div>
      }
    />
  );
};

export default Index;
