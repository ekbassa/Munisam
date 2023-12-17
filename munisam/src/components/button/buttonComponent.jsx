import React from "react";
import './ButtonComponent.scss'

const BUTTON_TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
};
const ButtonComponent = ({ children, buttonType, ...otherPropes }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...otherPropes}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
