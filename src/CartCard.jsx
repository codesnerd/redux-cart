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
  return <h1>CartCard</h1>;
};

export default CartCard;
