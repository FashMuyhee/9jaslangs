import React, { useState } from "react";
import "./index.scss";
import { Button } from "../../component";
import {
  InputText,
  Title,
  Text,
  ErrorLabel
} from "../../component/styled-component";
import colors from "../../helpers/colors";
import { validateEmail } from "../../helpers/validators";
import welcome from "../../img/welcome.png";
import { Link, Redirect } from "react-router-dom";

import withFirebaseAuth from "react-with-firebase-auth";
import firebaseApp from "../../config/firebase";
import "firebase/firestore";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const firebaseAppAuth = firebaseApp.auth();
const Alert = withReactContent(Swal);

const SignUp = ({ createUserWithEmailAndPassword, error, user }) => {
  const [state, setState] = useState({
    email: "",
    name: "",
    password: "",
    c_password: "",
    e_msg: "",
    p_msg: "",
    cp_msg: "",
    loading: false
  });

  const handleInputChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSignUp = e => {
    e.preventDefault();

    setState({ ...state, loading: true });
    const { email, name, password, c_password } = state;
    // validation
    if (validateEmail(email)) {
      if (password && password.length >= 8) {
        if (c_password && c_password === password) {
          console.log(state);
          createUserWithEmailAndPassword(email, password)
            .then(resp => {
              firebaseApp
                .firestore()
                .collection(`users`)
                .doc(resp.user.uid)
                .set({ name, email })
                .then(data => {
                  setState({ ...state, loading: false });
                  Alert.fire({
                    position: "center",
                    icon: "success",
                    title: error,
                    showConfirmButton: false,
                    timer: 2000
                  });
                });
            })
            .catch(error => {
              setState({ ...state, loading: false });

              /* Alert.fire({
                position: "center",
                icon: "error",
                title: error,
                showConfirmButton: false,
                timer: 2000
              }); */
              console.error(error);
            });
        } else {
          setState({
            ...state,
            loading: false,
            p_msg: "Passwords are not Equal "
          });
        }
      } else {
        setState({ ...state, p_msg: "Password is less than 8" });
      }
    }
  };
  return user ? (
    <Redirect to="/" />
  ) : (
    <main className="signup-page">
      <div className="content">
        <div className="greeting">
          <img src={welcome} alt="welcome" />
        </div>
        <div className="signup-form">
          <Title case="capitilize">Let Get Started !</Title>
          <Text subtitle className="welcome-text">
            Create an account with 9ja Slangs to get all features
          </Text>
          <form onSubmit={handleSignUp}>
            <div>
              <InputText
                borderColor={colors.accent}
                name="name"
                type="text"
                placeholder="Fullname"
                onChange={handleInputChange}
              />
              <ErrorLabel></ErrorLabel>
            </div>
            <div className="input-group">
              <InputText
                borderColor={colors.accent}
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleInputChange}
              />
              <ErrorLabel>{state.e_msg}</ErrorLabel>
            </div>
            <div className="input-group">
              <InputText
                borderColor={colors.accent}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleInputChange}
              />
              <ErrorLabel>{state.p_msg}</ErrorLabel>
            </div>
            <div className="input-group">
              <InputText
                borderColor={colors.accent}
                name="c_password"
                type="password"
                placeholder="Confirm Password"
                onChange={handleInputChange}
              />
              <ErrorLabel>{state.cp_msg}</ErrorLabel>
            </div>
            <Button type="submit" customStyle="btn">
              {state.loading ? "Creating Account" : "Sign Up"}
            </Button>
          </form>

          <Text className="link-text">
            Have an account already ? <Link to="/signin">Sign In</Link>
          </Text>
        </div>
      </div>
    </main>
  );
};

export default withFirebaseAuth({
  firebaseAppAuth
})(SignUp);
