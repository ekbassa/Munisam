import React, { useContext } from "react";
import "./CheckOutItem.scss";
import { CartContext } from "../../contexts/CartContext";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCard, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => {clearItemFromCard(cartItem)};
  const addItemHandler = ()=> {addItemToCart(cartItem)}
  const removeItemHandler = ()=> {removeItemFromCart(cartItem)}

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
        <span value>{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        {" "}
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
