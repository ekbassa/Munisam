import React, { useState } from "react";
// import InputComponent from "../../InputComponent/InputComponent";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../button/buttonComponent";
import "./SignIn.scss";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // using the UserContext
  const clearformFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      clearformFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password or email");
          break;

        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        case 'auth/invalid-credential':
          alert('To log in, please sign up first. The user does not exist');
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputComponent
          label="email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <InputComponent
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <ButtonComponent type="submit">Sign In </ButtonComponent>
          <ButtonComponent
            type="button"
            buttonType="google"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
