import React from "react";
import FoodBox from "../FoodBox/FoodBox";
import "./SectionHomepage.css";

export default function SectionHomepage(props) {
  const { foodData, title, des } = props;
  return (
    <>
      <div
        className="w-100 d-flex flex-column justify-content-center align-items-center bg-white"
        style={{ padding: "80px 0px 20px 0px" }}
      >
        <h2 className="title">{title}</h2>
        <span className="description">
         {des}
        </span>
        <div className="row d-flex justify-content-center align-items-center w-75">
          {foodData.slice(0, 4).map((food) => (
            <div key={food.id} className="col-md-3 mb-4">
              <FoodBox product={food} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
