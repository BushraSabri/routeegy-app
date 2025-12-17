import React from "react";
import Divider from "../Divider/Divider.jsx";

function Contact() {
  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-4 text-uppercase">
        contact section
      </h2>

      <Divider color="black" />

      <form className="w-50 mx-auto py-5">
        <div className=" position-relative floating-field">
          <input
            type="text"
            className="form-control border-0 border-bottom rounded-0 shadow-none"
            id="userName"
            placeholder="User Name"
          />
          <label htmlFor="userName">User Name</label>
        </div>

        <div className=" position-relative floating-field">
          <input
            type="number"
            className="form-control border-0 border-bottom rounded-0 shadow-none"
            id="userAge"
            placeholder="User Age"
          />
          <label htmlFor="userAge">User Age</label>
        </div>

        <div className=" position-relative floating-field">
          <input
            type="email"
            className="form-control border-0 border-bottom rounded-0 shadow-none"
            id="userEmail"
            placeholder="User Email"
          />
          <label htmlFor="userEmail">User Email</label>
        </div>

        <div className="mb-4 position-relative floating-field">
          <input
            type="password"
            className="form-control border-0 border-bottom rounded-0 shadow-none"
            id="userPassword"
            placeholder="User Password"
          />
          <label htmlFor="userPassword">User Password</label>
        </div>

        <button className="btn btn-success">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
