import Modals from '@/components/modals';
import { Fragment } from 'react';

const Index = (props) => {
  const { dataItem } = props;

  return (
    <Modals
      classModal={'case-study-modal' + dataItem?.id}
      idModal={'case-study-modal' + dataItem?.id}
      modalBg={
        <svg
          className="modal-bg"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="379px"
          height="369px"
        >
          <defs>
            <linearGradient id="PSgrad_09" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
              <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            fill="url(#PSgrad_09)"
            d="M54.086,281.380 L105.962,327.505 C173.075,387.178 276.496,381.853 336.956,315.610 C397.418,249.367 392.025,147.292 324.911,87.619 L273.035,41.495 C205.921,-18.178 102.501,-12.853 42.040,53.390 C-18.422,119.633 -13.028,221.708 54.086,281.380 Z"
          />
        </svg>
      }
      btnClose={true}
      modalHeading={
        <div className="modal-heading text-center">
          <h2>Crypto Landing Page</h2>
          <p className="section-subheading">
            Quisque a turpis id leo luctus mollis eget vitae magna. Maecenas tristique, sapien eget
            fermentum viverra, metus purus mattis tortor.
          </p>
          <a href="#" className="custom-btn btn-big grad-style-ef">
            LAUNCH WEBSITE
          </a>
        </div>
      }
      modalBody={
        <Fragment>
          <div className="row no-gutters align-items-center case-study-content">
            <svg
              className="case-study-challenge-bg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="379px"
              height="369px"
            >
              <defs>
                <linearGradient id="PSgrad_010" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                  <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                  <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                fillRule="evenodd"
                fill="url(#PSgrad_010)"
                d="M54.086,281.380 L105.962,327.505 C173.075,387.178 276.496,381.853 336.956,315.610 C397.418,249.367 392.025,147.292 324.911,87.619 L273.035,41.495 C205.921,-18.178 102.501,-12.853 42.040,53.390 C-18.422,119.633 -13.028,221.708 54.086,281.380 Z"
              />
            </svg>
            <div className="col-lg-5 offset-lg-1 order-lg-2">
              <h3>Challeneges</h3>
              <p>
                Nulla lobortis condimentum tortor, vitae sollicitudin ante sodales ac. Ut in ipsum
                eu dolor scelerisque sagittis ut augue. Aliquam convallis iaculis suscipit. Sed
                pulvinar maximus dui sit amet cursus. Vestibulum.{' '}
              </p>
              <p>
                Quisque a turpis id leo luctus mollis eget vitae magna. Maecenas tristique, sapien
                eget fermentum viverra, metus purus mattis tortor.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/assets/images/case-study/modal-img-1.jpg"
                alt="case study modal image"
                className="img-fluid"
              />
            </div>
          </div>
          {/* <!-- End of .row --> */}

          <div className="row no-gutters align-items-center case-study-content">
            <svg
              className="case-study-solutions-bg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="379px"
              height="369px"
            >
              <defs>
                <linearGradient id="PSgrad_011" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                  <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                  <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                fillRule="evenodd"
                fill="url(#PSgrad_011)"
                d="M54.086,281.380 L105.962,327.505 C173.075,387.178 276.496,381.853 336.956,315.610 C397.418,249.367 392.025,147.292 324.911,87.619 L273.035,41.495 C205.921,-18.178 102.501,-12.853 42.040,53.390 C-18.422,119.633 -13.028,221.708 54.086,281.380 Z"
              />
            </svg>
            <div className="col-lg-5">
              <h3>Solutions</h3>
              <p>
                Aliquam convallis iaculis suscipit. Sed pulvinar maximus dui sit amet cursus.
                Vestibulum. Quisque a turpis id leo luctus mollis eget vitae magna. Maecenas
                tristique{' '}
              </p>
              <p>
                Mauris sit amet dapibus quam, sed euismod magna. Aenean eros odio, fringilla eu
                tellus quis.
              </p>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <img
                src="/assets/images/case-study/modal-img-1.jpg"
                alt="case study modal image"
                className="img-fluid"
              />
            </div>
          </div>
          {/* <!-- End of .row --> */}

          <div className="row no-gutters case-study-content scoreboard">
            <div className="col-md-12">
              <h3 className="text-md-center">scoreboard</h3>
            </div>
            <div className="col-md-6">
              <div className="scores">
                <div className="score">
                  <i className="ml-symtwo-23-check-mark"></i> +2.64% sessions
                </div>
                <div className="score">
                  <i className="ml-symtwo-23-check-mark"></i> +25.47% pageviews
                </div>
                <div className="score">
                  <i className="ml-symtwo-23-check-mark"></i> +22.23% pages per session
                </div>
              </div>
              {/* <!-- End of .scores --> */}
            </div>
            <div className="col-md-6">
              <div className="scores">
                <div className="score">
                  <i className="ml-symtwo-23-check-mark"></i> +22.23% growth in sales
                </div>
                <div className="score">
                  <i className="ml-symtwo-23-check-mark"></i> -53.21% bounce rate
                </div>
                <div className="score">
                  <i className="ml-symtwo-23-check-mark"></i> +12.35% average session duration
                </div>
              </div>
              {/* <!-- End of .scores --> */}
            </div>
          </div>
          {/* <!-- End of .row --> */}
        </Fragment>
      }
    />
  );
};

export default Index;
