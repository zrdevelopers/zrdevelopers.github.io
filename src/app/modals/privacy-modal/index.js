import Modals from '@/components/modals';
import { Fragment } from 'react';

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
            height="369px"
          >
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
          {/* <!-- End of .modal-bg --> */}

          <svg
            className="news-modal-bg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="379px"
            height="369px"
          >
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
          {/* <!-- End of .modal-bg --> */}
        </Fragment>
      }
      modalBody={
        <Fragment>
          <h2>Privacy Policy</h2>
          <p>
            Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim
            assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum
            claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt
            saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
            lectorum.
          </p>
          <h4>Nobis eleifend option conguenes </h4>
          <p>
            Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed posuere massa
            nunc quis dui. Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa
            nisi. Curabitur sit amet suscipit nisl. Sed eget nisl laoreet, suscipit enim nec,
            viverra eros. Nunc imperdiet risus leo, in rutrum erat dignissim id. Praesent sit amet
            eleifend augue. Maecenas ac mollis elit, ut hendrerit mauris. Fusce volutpat convallis
            ligula, at interdum elit malesuada sit amet. Nam ultrices ullamcorper ligula, a mattis
            nisl laoreet nec.
          </p>
          <p>
            Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Nunc vitae nisi tortor. Morbi leo nulla, posuere vel lectus a, egestas posuere lacus.
            Fusce eleifend hendrerit bibendum. Morbi nec efficitur ex. In lacinia magna vel neque
            dapibus egestas sit amet ac lorem. Vestibulum facilisis lectus quis risus interdum
            tempor. Nulla facilisi.
          </p>
          <h4>Mauris tempor, orci id pellentesque convallis</h4>
          <p>
            Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent fringilla dapibus
            dignissim. Pellentesque quis quam enim. Vestibulum ultrices, leo id suscipit efficitur,
            odio lorem rhoncus dolor, a facilisis neque mi ut ex. Quisque tempor urna a nisi
            pretium, a pretium massa tristique. Nullam in aliquam diam. Maecenas at nibh gravida,
            ornare eros non, commodo ligula. Sed efficitur sollicitudin auctor. Quisque nec
            imperdiet purus, in ornare odio. Quisque odio felis, vestibulum et ex quis, tincidunt
            bibendum mauris.finibus. Aenean non lobortis neque, sit amet egestas ligula.varius
            sapien. Sed quis mollis est.
          </p>
        </Fragment>
      }
    />
  );
};

export default Index;
