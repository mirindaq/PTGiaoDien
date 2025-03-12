import React from "react";
import FoodBox from "../FoodBox/FoodBox";
import FoodWithAuthorBox from "../FoodWithAuthorBox/FoodWithAuthorBox";

export default function SectionHomepageDetail(props) {
  const { foodWithAuthorData, title, des } = props;
  return (
    <div
      className="w-100 d-flex flex-column justify-content-center align-items-center bg-white"
      style={{ padding: "80px 0px 50px 0px" }}
    >
      <h2 className="title">{title}</h2>
      <span className="description">{des}</span>
      <div className="row d-flex justify-content-center align-items-center w-75">
        {foodWithAuthorData.slice(0, 4).map((food) => (
          <div key={food.id} className="col-6 mb-5">
            <FoodWithAuthorBox foodData={food} />
          </div>
        ))}
      </div>
    </div>
  );
}
