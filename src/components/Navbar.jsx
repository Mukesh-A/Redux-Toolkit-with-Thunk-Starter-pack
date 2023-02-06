import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  // useselector will fetch the data from store
  // this work like we have to SUBSCRIBE the action we need to use so that if their is a data change then automatically data gets updated.

  //cart is name which defined in product slice page
  const items = useSelector((state) => state.cart);
  return (
    <div>
      <span>REDUX STORE</span>
      <div className="">
        <Link to="/">Home</Link>
        <Link to="/cart"> Cart</Link>
        <span className="cartCount">Cart Items: {items.length}</span>
      </div>
    </div>
  );
};
