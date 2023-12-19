import React from "react";
import { useContext } from "react";
import "./CartDropdown..scss";
import ButtonComponent from "../button/buttonComponent";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";



const CartDropdown = () => {
  
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = ()=>{
    navigate('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent onClick={goToCheckOutHandler}>CheckOUT</ButtonComponent>
    </div>
  );
};

export default CartDropdown;
