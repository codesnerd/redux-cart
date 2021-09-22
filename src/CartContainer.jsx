import React from "react";
import CartCard from "./CartCard";

import { connect } from "react-redux";
import { CLEAR_CART } from "./Actions";

const CartContainer = ({ cart = [], total_items, bill, dispatch }) => {
  if (total_items === 0) {
    return (
      <div className="cart-container">
        <a className="link-reload" href="/">
          RELOAD
        </a>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        {cart.map((cartItem) => {
          return <CartCard key={cartItem.id} {...cartItem} />;
        })}
        <h4 className="cart-card cart-bill">
          <p>Total:</p>
          <p>${bill}.00/-</p>
        </h4>
        <button
          className="btn btn-clear"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          Clear Cart
        </button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const { cart, total_items, quantity, bill } = state;
  return { cart, total_items, quantity, bill };
};

export default connect(mapStateToProps)(CartContainer);
