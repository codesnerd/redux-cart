import React from "react";
import "./CartItem.css";
import "../../../index.css";

import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "../../../redux/Actions";

const CartItem = ({
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
      <div className="cart-item">
        <div>
          <h3 className="cart-item-name">{name}</h3>
          <p>Category: {category}</p>
          <p>Description: {description}</p>
          <br />
          <p>
            <b>Price:</b> ${price}/-
          </p>
        </div>
        <div className="quantity">
          <button className="btn btn-quantity" onClick={() => increase()}>
            +
          </button>
          {quantity}
          <button className="btn btn-quantity" onClick={() => decrease()}>
            -
          </button>
          <button className="btn-remove" onClick={() => remove()}>
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, price, quantity } = ownProps;

  return {
    increase: () =>
      dispatch({
        type: INCREASE,
        payload: { id, price, quantity },
      }),

    decrease: () =>
      dispatch({
        type: DECREASE,
        payload: { id, price, quantity },
      }),

    remove: () =>
      dispatch({
        type: REMOVE,
        payload: { id, price, quantity },
      }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
