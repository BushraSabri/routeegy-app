import React from "react";
import Divider from "../Divider/Divider.jsx";
import avataaars from "../../assets/avataaars.svg";
function Home() {
  return (
    <section className="bg-success text-white d-flex align-items-center p-5">
      <div className="container text-center">
        <img src={avataaars} className="avatar pb-5" />
        <h1 className="fw-bold">START FRAMEWORK</h1>
        <Divider color="white" />
        <p className="lead">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
}

export default Home;
