import Modals from '@/components/modals';
import { Fragment } from 'react';
import Konten from './konten';

const Index = () => {
  return (
    <Modals
      classModal="privacy-modal"
      idModal="privacy-modal"
      modalBg={null}
      modalHeading={null}
      btnClose={false}
      modalHeader={
        <Fragment>
          <svg
            className="modal-bg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="379px"
            height="369px">
            <defs>
              <linearGradient id="PSgrad_016" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              fill="url(#PSgrad_016)"
              d="M54.086,281.380 L105.962,327.505 C173.075,387.178 276.496,381.853 336.956,315.610 C397.418,249.367 392.025,147.292 324.911,87.619 L273.035,41.495 C205.921,-18.178 102.501,-12.853 42.040,53.390 C-18.422,119.633 -13.028,221.708 54.086,281.380 Z"
            />
          </svg>

          <svg
            className="news-modal-bg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="379px"
            height="369px">
            <defs>
              <linearGradient id="PSgrad_017" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              fill="url(#PSgrad_017)"
              d="M54.086,281.380 L105.962,327.505 C173.075,387.178 276.496,381.853 336.956,315.610 C397.418,249.367 392.025,147.292 324.911,87.619 L273.035,41.495 C205.921,-18.178 102.501,-12.853 42.040,53.390 C-18.422,119.633 -13.028,221.708 54.086,281.380 Z"
            />
          </svg>
        </Fragment>
      }
      modalBody={<Konten />}
    />
  );
};

export default Index;
