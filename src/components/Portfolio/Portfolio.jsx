import React from "react";
import { useState } from "react";
import Divider from "../Divider/Divider.jsx";

function Portfolio() {
  const images = [
    "/portfolio/poert1.png",
    "/portfolio/port2.png",
    "/portfolio/port3.png",
    "/portfolio/poert1.png",
    "/portfolio/port2.png",
    "/portfolio/port3.png",
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  return (
    <section className="container py-5 text-center">
      <h2 className="fw-bold mb-4 text-dark">PORTFOLIO COMPONENT</h2>
      <Divider color="black" />

      <div className="row g-5">
        {images.map((img, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div
              className="portfolio-item"
              onClick={() => {
                setSelectedImg(img);
                setShowModal(true);
              }}
            >
              <img src={img} alt="" />
              <div className="overlay">
                <span>+</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,.6)" }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-body">
                <img src={selectedImg} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
