import React from "react";
import CartCard from "./CartCard";

import { connect } from "react-redux";
import { CLEAR_CART } from "./Actions";

const CartContainer = ({ cart = [], total_items, bill, dispatch }) => {
  if (total_items === 0) {
    return (
      <div className="cart-container">
        <h1 className="hero-heading">Cart is empty</h1>
        <a className="link-reload" href="/">
          Reload
        </a>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        <h1 className="hero-heading">{total_items} Items in the Cart</h1>
        {cart.map((cartItem) => {
          return <CartCard key={cartItem.id} {...cartItem} />;
        })}
        <h4 className="cart-bill">
          Total: <span>${bill}/-</span>
        </h4>
        <button
          className="btn-clear"
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
