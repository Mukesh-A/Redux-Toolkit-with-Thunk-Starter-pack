import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { STATUS, fetchProducts } from "../store/productSlice";

export const Products = () => {
  //   const [products, setproducts] = useState([]);

  //dispatch the state
  //means inserting to store

  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    //while using THunk
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products/");
    //   const data = await res.json();
    //   console.log(data);
    //   setproducts(data);
    // };
    // fetchProducts();
  }, []);

  const handelAdd = (product) => {
    dispatch(add(product));
  };
  console.log(status);

  if (status === STATUS.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status === STATUS.ERROR) {
    return <h2>Something went wrong...</h2>;
  }
  return (
    <div className="productsWrap">
      {products.slice(0, 5).map((product) => (
        <div className="card" key={product.id}>
          <img height="200" src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handelAdd(product)}>
            Buy
          </button>
        </div>
      ))}
    </div>
  );
};
