import Link from 'next/link';
import './navbar.scss';

const Index = () => {
  return (
    <nav className="navbar onepage-navbar navbar-expand-lg position-absolute navbar-landing-page">
      <div className="container d-flex justify-content-center text-center navbar-landing-page__body">
        <Link
          className="navbar-brand page-scroll mr-0"
          href="/jasa-pembuatan-website"
          style={{ maxWidth: '100%' }}
        >
          {/* <h3 className='mb-0'>Jasa Pembuatan Website
          </h3> */}
          <h3>ZRDevelopers</h3>
        </Link>
      </div>
      {/* <!-- End of .container --> */}
    </nav>
  );
};

export default Index;
