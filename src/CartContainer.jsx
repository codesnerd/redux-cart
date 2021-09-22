import React from "react";
import CartCard from "./CartCard";

import { connect } from "react-redux";
import { CLEAR_CART } from "./Actions";

const CartContainer = ({ cart = [], total_items, bill, dispatch }) => {
  return <h1>Cart Container</h1>;
};

const mapStateToProps = (state) => {
  const { cart, total_items, quantity, bill } = state;
  return { cart, total_items, quantity, bill };
};

export default connect(mapStateToProps)(CartContainer);
