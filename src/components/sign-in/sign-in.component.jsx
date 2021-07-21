import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import {
  ButtonsBarContainer,
  SignInContainer,
  SignInTitle,
} from "./sign-in.styles";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.error(`error related to sign in with email and password: ${err}`);
      alert(err);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <ButtonsBarContainer>
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
