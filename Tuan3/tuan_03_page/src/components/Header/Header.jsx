import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-logo">
          <img src="/images/chefify.png" />
        </div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Tìm kiếm" />
        </div>
        <div className="navigation-container">
          <ul>
            <li>What to cook</li>
            <li>Recipes</li>
            <li>Ingredients</li>
            <li>Occasions</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className="recipe-box">
          <span className="text">Your Recipe Box</span>
        </div>

        <div className="avatar-container">
          <img
            src="/images/avatar.png"
            alt="Avatar"
          />
        </div>
      </div>
    </>
  );
}
