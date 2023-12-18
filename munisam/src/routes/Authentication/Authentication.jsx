import React from "react";
import SingUpForm from "../../components/sign-up-form/SingUpForm";
import SignIn from "../../components/SignIn/SignIn";
import './Authentication.scss'

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SingUpForm />
    </div>
  );
};

export default Authentication;
