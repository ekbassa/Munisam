import React from "react";
import { useContext } from "react";
import "./CartDropdown..scss";
import ButtonComponent from "../button/buttonComponent";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/CartContext";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent>CheckOUT</ButtonComponent>
    </div>
  );
};

export default CartDropdown;
