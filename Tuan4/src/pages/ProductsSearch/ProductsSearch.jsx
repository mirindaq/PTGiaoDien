import React from "react";
import FoodBox from "../../components/FoodBox/FoodBox";
import Filter from "../../components/Filters/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "../../components/Pagination/Pagination";
import { foodData } from "../../data/data";

export default function ProductsSearch() {
  return (
    <div className="d-flex container my-0 pt-5">
      <div>
        <Filter />
      </div>
      <div className="mt-0">
        <div className="d-flex align-items-center justify-content-between">
          <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
            Salad (32)
          </h2>
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle d-flex justify-content-between align-items-center text-start"
              type="button"
              style={{ width: "200px", opacity: 0.9 }}
            >
              A - Z
            </button>
          </div>
        </div>
        <div className="row justify-content-between">
          {foodData.map((food) => (
            <div key={food.id} className="col-md-4 mb-4">
              <FoodBox product={food} />
            </div>
          ))}
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
