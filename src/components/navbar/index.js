'use client';
import Link from 'next/link';

const Index = (props) => {
  const { page } = props;
  return (
    <nav className="navbar onepage-navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand page-scroll" href="/">
          <h3>ZRDigitalTech</h3>
          {/* <!-- <img src="http://placehold.it/204x57" alt="Brand Logo" className="img-fluid"> --> */}
          {/* <!-- images/brand-logo.png --> */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          <span className="custom-toggler-icon bar1"></span>
          <span className="custom-toggler-icon bar2"></span>
          <span className="custom-toggler-icon bar3"></span>
        </button>
        {/* <!-- End of .navbar-toggler --> */}

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-md-auto typo-color-c align-items-center">
            <li className="nav-item active">
              <Link
                className={`nav-link ${page === 'artikel' ? '' : 'page-scroll'}`}
                href={`${page === 'artikel' ? '/layanan' : '#layanan'}`}>
                Layanan
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${page === 'artikel' ? '' : 'page-scroll'}`}
                href={`${page === 'artikel' ? '/tentang-kami' : '#about-us'}`}>
                Tentang kami
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${page === 'artikel' ? '' : 'page-scroll'}`}
                href={`${page === 'artikel' ? '/portofolio' : '#portofolio'}`}>
                Portofolio
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className={`nav-link ${page === 'artikel' ? "": "page-scroll"}`} href="#case-studies">
                Case Studies
              </a>
            </li> */}
            {/* <!-- <li className="nav-item">
                  <a className={`nav-link ${page === 'artikel' ? "": "page-scroll"}`} href="#team">Team</a>
              </li> --> */}
            <li className="nav-item">
              <Link
                className={`nav-link ${page === 'artikel' ? '' : 'page-scroll'}`}
                href={`${page === 'artikel' ? '/harga' : '#harga'}`}>
                Harga
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${page === 'artikel' ? '' : 'page-scroll'}`}
                href={`${page === 'artikel' ? '/artikel' : '#artikel'}`}>
                Artikel
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link custom-btn btn-mid grad-style-cd page-scroll"
                href="#kontak-kami">
                Kontak Kami
              </Link>
            </li>
          </ul>
          {/* <!-- End of .navbar-nav --> */}
        </div>
        {/* <!-- End of .navbar-collapse --> */}
      </div>
      {/* <!-- End of .container --> */}
    </nav>
  );
};

export default Index;
