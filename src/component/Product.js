import React from "react";
// import StarIcon from "@mui/icons-material/Star";
import "./Product.css";

export default function Product(props) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <strong>US ${props.price}.00</strong>
        </p>
        <div className="product__rating">{Array(props.rating).fill().map(()=>(<p>⭐</p>))}</div>
      </div>
      <img src={props.img} alt="Product" />
      <button>
        <strong>Add To Basket</strong>
      </button>
    </div>
  );
}
