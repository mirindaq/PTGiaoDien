import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Profile from "../../components/Profile/Profile";
import TabNav from "../../components/TabNav/TabNav";
import FoodBox from "../../components/FoodBox/FoodBox";
import { foodData } from "../../data/data";
export default function Recipes() {
  const data = foodData;

  return (
    <div className="" style={{ padding: "50px 180px" }}>
      <Breadcrumb first={"Home"} second={"Your Recipe Box"} />
      <div>
        <Profile></Profile>
        <TabNav></TabNav>
        <div className="row justify-content-center">
          {data.slice(0, 8).map((food) => (
            <div key={food.id} className="col-md-3 mb-3">
              <FoodBox product={food} />
            </div>
          ))}
        </div>
        <Pagination></Pagination>
      </div>
    </div>
  );
}
