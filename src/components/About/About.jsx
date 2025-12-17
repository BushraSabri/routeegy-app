import React from "react";
import Divider from "../Divider/Divider.jsx";

export default function About() {
  return (
    <section className="about bg-success text-white py-5 vh-100 d-flex align-items-center">
      <div className="container">
        <h2 className="text-center fw-bold text-uppercase">About Component</h2>

        <Divider color="white" />

        <div className="row justify-content-center">
          <div className="col-md-5">
            <p className="lead">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>

          <div className="col-md-5">
            <p className="lead">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
