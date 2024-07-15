const Index = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="footer-content d-flex justify-content-between">
          <p>&copy; 2019 - {currentYear} ZRDevelopers | All rights reserved</p>
          <p>
            <a href="#" data-toggle="modal" data-target="#privacy-modal">
              Privacy Policy
            </a>{' '}
            -{' '}
            <a href="#" data-toggle="modal" data-target="#terms-modal">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
        {/* <!-- End of .footer-content --> */}
      </div>
      {/* <!-- End of .container --> */}
    </footer>
  );
};

export default Index;
