import React from "react";
import "./CartContainer.css";
import "../../index.css";

import CartItem from "./CartItem/CartItem";

import { connect } from "react-redux";
import { CLEAR_CART } from "../../redux/Actions";

const CartContainer = ({ cart = [], total_items, bill, dispatch }) => {
  if (total_items === 0) {
    return (
      <div className="cart-container">
        <a className="link-reload" href="/redux-cart">
          RELOAD
        </a>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
        <h4 className="cart-item cart-bill">
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
