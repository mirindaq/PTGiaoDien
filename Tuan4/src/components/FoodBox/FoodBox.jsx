import React from "react";
import { Bookmark } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FoodBox.css";
import { useCart } from "../../hooks/CartContext";
import Button from "react-bootstrap/esm/Button";

export default function FoodBox(props) {
  // { image, title, time }
  const { product } = props;
  const { addToCart } = useCart();
  return (
    <div
      className="foodBox card shadow-sm border-0 rounded-4"
      style={{ width: "100%" }}
    >
      <img
        src={product.image}
        className="card-img-top rounded-top-4 object-fit-cover "
        alt={product.title}
      />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title fw-bold">{product.title}</h5>
          <button className="btn btn_favorites">
            <Bookmark className="text_favorites " size={20} />
          </button>
        </div>
        <div className="mt-2 d-flex  justify-content-between align-items-center">
          <span className="badge text-minutes">{product.time}</span>
          <Button
            variant="primary"
            className="d-flex align-items-center gap-2"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
