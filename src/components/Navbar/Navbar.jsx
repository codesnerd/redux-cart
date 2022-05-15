import React from "react";
import "./Navbar.css";
import "../../index.css";

import { connect } from "react-redux";

const Navbar = ({ total_items }) => {
  if (total_items === 0) {
    return (
      <div className="navbar">
        <h1 className="hero-heading">Cart is empty</h1>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <h1 className="hero-heading">{total_items} Items in the Cart</h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const { total_items } = state;
  return { total_items };
};

export default connect(mapStateToProps)(Navbar);
