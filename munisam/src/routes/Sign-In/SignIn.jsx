import React from "react";
import SingUpForm from "../../components/sign-up-form/SingUpForm";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../Utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>sign in with google Popup</button>
      <SingUpForm />
    </div>
  );
};

export default SignIn;