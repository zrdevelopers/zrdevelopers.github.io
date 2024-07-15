const Index = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="d-flex footer-content justify-content-center">
          <p>&copy; 2019 - {currentYear} ZRDevelopers | All rights reserved</p>
        </div>
        {/* <!-- End of .footer-content --> */}
      </div>
      {/* <!-- End of .container --> */}
    </footer>
  );
};

export default Index;
