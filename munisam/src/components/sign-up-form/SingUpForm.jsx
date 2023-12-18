import React from "react";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../Utils/firebase/firebase.utils";
import InputComponent from "../../InputComponent/InputComponent";
import './SingUpForm.scss'
import ButtonComponent from "../button/buttonComponent";

const defaultFormFields = {
  displayname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SingUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  //next we are going to destructure the above values
  const { displayName, email, password, confirmPassword } = formFields;

  const clearFormFields = ()=>{
    setFormFields(defaultFormFields);
  }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        //now check if the password filed is identical to the confirmPassword filed
        if(password !== confirmPassword){
            alert(`Password does not match`)
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user,{displayName})
            clearFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use'){
                alert('Cannot create a user, email already in use')
            }else{
                console.log('user creation  encountered an error  ',error)
            }
        }
    }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span> Sign up with your email and password</span>
      
      <form onSubmit={handleSubmit}>
        <InputComponent 
          label='Display Name'
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <InputComponent
          label='Email'
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <InputComponent
          label='Password'
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <InputComponent
          label='Confirm Password'
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <ButtonComponent type="submit">Sign Up </ButtonComponent>
      </form>
    </div>
  );
};

export default SingUpForm;
