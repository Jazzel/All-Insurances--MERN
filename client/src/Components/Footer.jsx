import React from "react";

const Footer = () => {
  return (
    <footer style={{ boxShadow: ".125rem 0 0 0 rgba(0,0,0,.075)!important;" }}>
      <div className="container-fluid text-center text-md-left shadow-sm">
        <div className="row">
          <div className="col-md-12 mt-md-0 mt-3 pb-5 mb-3">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-3" />
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © {new Date().getFullYear()} Copyright:
        <a href="/"> CarInsurance</a>
      </div>
    </footer>
  );
};

export default Footer;
