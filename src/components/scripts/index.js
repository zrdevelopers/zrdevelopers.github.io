import React, { Fragment } from 'react';
import Script from 'next/script';

const Index = () => {
  return (
    <Fragment>
      {/* <!-- jQuery --> */}
      <Script src="/assets/js/vendor/jquery-3.3.1.min.js" />
      <Script src="/assets/js/vendor/jquery-migrate.min.js" />
      {/* <!-- Bootstrap js --> */}
      <Script src="/assets/js/vendor/bootstrap.bundle.min.js" />
      {/* <!-- font awesome --> */}
      <Script src="/assets/js/vendor/fontawesome-all.min.js" />
      {/* <!-- jQuery Easing Plugin --> */}
      <Script src="/assets/js/vendor/easing-1.3.js" />
      {/* <!-- jQuery progressbar plugin --> */}
      <Script src="/assets/js/vendor/jquery.waypoints.min.js" />
      {/* <Script src="/assets/js/vendor/jquery.counterup.min.js" /> */}
      {/* <!-- Bootstrap Progressbar --> */}
      <Script src="/assets/js/vendor/bootstrap-progressbar.min.js" />
      {/* <!-- ImagesLoaded js --> */}
      <Script src="/assets/js/vendor/imagesloaded.pkgd.min.js" />
      {/* <!-- Slick carousel js --> */}
      <Script src="/assets/js/vendor/slick.min.js" />
      {/* <!-- Magnific popup --> */}
      <Script src="/assets/js/vendor/jquery.magnific-popup.min.js" />
      <Script src="/assets/js/vendor/isotope.pkgd.min.js" />
      {/* <!-- scroll magic --> */}
      <Script src="/assets/js/vendor/jquery.ScrollMagic.min.js" />
      <Script src="/assets/js/vendor/debug.addIndicators.min.js" />
      <Script src="/assets/js/vendor/jquery.TweenMax.min.js" />
      <Script src="/assets/js/vendor/animation.gsap.min.js" />
      {/* <Script src="/assets/js/vendor/scrollReveal.js" /> */}
      {/* <!-- Custom js --> */}
      <Script src="/assets/js/main.js" />
    </Fragment>
  );
};

export default Index;
