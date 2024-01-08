import React from "react";
import Mycard from "./Mycard";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <div className="row" style={{ textAlign: "center" }}>
        <h1> Products </h1>
        {cartItems.map((ele) => (
          <Mycard
            key={ele.id}
            title={ele.title}
            Img={ele.image}
            descrip={ele.description}
            price={ele.price}
            isRemove={true}
            Eleid={ele.id}
          />
        ))}
      </div>
    </>
  );
};

export default Cart;
