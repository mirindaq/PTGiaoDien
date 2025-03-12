import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TabNav.css";

export default function () {
  return (
    <div className="mb-4">
      <ul className="nav nav-tabs mt-4">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Saved Recipes
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Folders
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Recipes by Genevieve
          </a>
        </li>
      </ul>
    </div>
  );
}
