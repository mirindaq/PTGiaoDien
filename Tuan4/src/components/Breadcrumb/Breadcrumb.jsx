import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Breadcrumb.css";

export default function Breadcrumb(props) {
  const { first, second } = props;
  return (
    <nav
      className="mb-5"
      style={{ "--bs-breadcrumb-divider": "'>'" }}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">{first}</a>
        </li>
        <li
          className="breadcrumb-item active"
          aria-current="page"
          style={{ color: "rgb(255, 105, 180)" }}
        >
          {second}
        </li>
      </ol>
    </nav>
  );
}
