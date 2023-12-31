import React from "react";
import "./Checkout.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div>
        {cartItems.map((cartItem) => {
          return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
