import React from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-2" to="/">
          START FRAMEWORK
        </NavLink>

        <ul className="navbar-nav ms-auto d-flex gap-3 fw-bold text-white">
          {["about", "portfolio", "contact"].map((item) => (
            <li className="nav-item" key={item}>
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                {item.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
