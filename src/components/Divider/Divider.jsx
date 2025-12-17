import React from "react";

export default function Divider({ color = "white" }) {
  return (
    <div
      className={`divider d-flex align-items-center justify-content-center my-4 text-${color}`}
    >
      <span className={`line bg-${color}`}></span>
      <i className="bi bi-star-fill mx-3"></i>
      <span className={`line bg-${color}`}></span>
    </div>
  );
}
