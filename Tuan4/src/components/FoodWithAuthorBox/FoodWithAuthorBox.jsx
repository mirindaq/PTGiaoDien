import React from "react";
import "./FoodWithAuthorBox.css";
import { Bookmark } from "react-feather";

export default function FoodWithAuthorBox(props) {
  const { foodData } = props;
  return (
    <div className="food-card-container">
      <div className="food-card">
        <div className="food-card-left">
          <img
            src={foodData.image}
            className="food-card-img "
            alt={foodData.title}
          />
        </div>
        <div className="food-card-right">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="food-card-title">{foodData.title}</h5>
            <button className="btn btn-bookmark">
              <Bookmark className="text_favorites " size={20} />
            </button>
          </div>

          <p className="food-card-time">{foodData.time}</p>
          <div className="food-card-author">
            <img
              src={foodData.avatar}
              alt={foodData.author}
              className="author-avatar"
            />
            <p className="food-card-author-name">{foodData.author}</p>
          </div>
          <p className="food-card-description">{foodData.description}</p>
        </div>
      </div>
    </div>
  );
}
