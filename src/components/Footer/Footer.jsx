import React from "react";

function Footer() {
  return (
    <footer className=" text-white text-center pt-5">
      <div className="container foot">
        <div className="row text-start">
          <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
            <h3 className="fw-bold">LOCATION</h3>
            <p className="mb-1 text-center">2215 John Daniel Drive</p>
            <p className="text-center">Clark, MO 65243</p>
          </div>

          <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
            <h3 className="fw-bold">AROUND THE WEB</h3>
            <p className="text-center">
              <div className="d-flex gap-3 mt-2">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>

                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a href="#" className="social-icon">
                  <i className="fas fa-globe"></i>
                </a>
              </div>
            </p>
          </div>

          <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
            <h3 className="fw-bold">ABOUT FREELANCER</h3>
            <p className="text-center">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <p className="mb-0 bg-dark py-4">
        Copyright &copy; Your Website {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
