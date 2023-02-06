import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

export const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handelRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3>cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard">
            <img height="200" src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handelRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
