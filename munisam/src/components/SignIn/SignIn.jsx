import React, { useState } from "react";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../button/buttonComponent";
import "./SignIn.scss";
import { signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from "../../Utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response)

    } catch (error) {
      switch(error.code){
        case 'auth/wrong-password':
        alert('incorrect password or email' )
        break;

        case 'auth/user-not-found':
          alert('no user associated with this email' )
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
          <ButtonComponent type='button'  buttonType="google" onClick={signInWithGoogle}>
            Google sign in{" "}
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
