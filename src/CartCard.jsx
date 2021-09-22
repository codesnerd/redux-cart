import React from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "./Actions";

const CartCard = ({
  id,
  name,
  category,
  description,
  price,
  quantity,
  increase,
  decrease,
  remove,
}) => {
  return (
    <article key={id}>
      <div className="cart-card">
        <div className="card-text">
          <h3>{name}</h3>
          <p>Category: {category}</p>
          <p>Description: {description}</p>
          <br />
          <p>
            <b>Price:</b> ${price}/-
          </p>
        </div>
        <div className="quantity">
          <button className="btn-quantity" onClick={() => increase()}>
            +
          </button>
          {quantity}
          <button className="btn-quantity" onClick={() => decrease()}>
            -
          </button>
          <button onClick={() => remove()}>Remove</button>
        </div>
      </div>
    </article>
  );
};

export default CartCard;
