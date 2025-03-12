import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router";
import { path } from "../../constants/path";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-logo">
          <Link to={path.homepage}>
            <img src="/images/chefify.png" style={{ width: "100%" }} />
          </Link>
        </div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Tìm kiếm" />
        </div>
        <div className="navigation-container">
          <ul>
            <NavLink
              to={path.products}
              className={({ isActive }) => (isActive ? "active-link" : "")}
              end
            >
              What to cook
            </NavLink>
            <NavLink
              to={path.recipes}
              className={({ isActive }) => (isActive ? "active-link" : "")}
              end
            >
              Recipes
            </NavLink>
            <NavLink
              to={path.productsSearch}
              className={({ isActive }) => (isActive ? "active-link" : "")}
              end
            >
              Product Search
            </NavLink>
            <li>Occasions</li>
            <NavLink
              to={path.about}
              className={({ isActive }) => (isActive ? "active-link" : "")}
              end
            >
              About Us
            </NavLink>
          </ul>
        </div>

        <div className="information-box">
          <div className="recipe-box">
            <span className="text">Your Recipe Box</span>
          </div>
          <div>
            <ShoppingCart />
          </div>
          <div className="avatar-container">
            <img src="/images/avatar.png" alt="Avatar" />
          </div>
        </div>
      </div>
    </>
  );
}
