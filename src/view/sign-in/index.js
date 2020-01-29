import React, { useState } from "react";
import "./index.scss";
import { Button } from "../../component";
import {
  InputText,
  Title,
  Text,
  Icon,
  ErrorLabel
} from "../../component/styled-component";
import colors from "../../helpers/colors";
import { validateEmail } from "../../helpers/validators";
import welcome from "../../img/welcome.png";
import facebook from "../../img/icons/facebook.png";
import google from "../../img/icons/google.png";
import { Link, Redirect } from "react-router-dom";
import withFirebaseAuth from "react-with-firebase-auth";
import firebaseApp from "../../config/firebase";
import * as firebase from "firebase/app";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import "firebase/auth";

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};
providers.googleProvider.setCustomParameters({ hd: "9jaSlangs" });

const Alert = withReactContent(Swal);

const SignIn = ({
  signInWithGoogle,
  user,
  error,
  signInWithEmailAndPassword
}) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    e_msg: "",
    p_msg: "",
    loading: false
  });

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        let username = user.displayName;
        localStorage.setItem("user", username);
      })
      .catch(error => {
        console.error('eror'+error);
      });
  };

  const handleInputChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSignIn = e => {
    e.preventDefault();
    setState({ ...state, loading: true });
    const { email, password } = state;
    // validation
    if (validateEmail(email)) {
      if (password && password.length >= 8) {
        // firebase login
        signInWithEmailAndPassword(email, password)
          .then(() => {
            setState({ ...state, loading: false, p_msg: " " });

            Alert.fire({
              position: "center",
              icon: "success",
              title: "Sucessful",
              showConfirmButton: false,
              timer: 1500
            });
          })
          .catch(error => {
            setState({ ...state, loading: false });

            Alert.fire({
              position: "center",
              icon: "error",
              title: error,
              showConfirmButton: false,
              timer: 1500
            });
          });
      } else {
        setState({ ...state, p_msg: "Password is less than 8" });
      }
    }
  };

  return user ? (
    <Redirect to="/" />
  ) : (
    <main className="signin-page">
      <div className="content">
        <div className="greeting">
          <img src={welcome} alt="welcome" />
        </div>
        <div className="signin-form">
          <Title case="capitilize">Welcome Back !</Title>
          <Text subtitle className="welcome-text">
            Sign in to your existing account of 9ja Slangs
          </Text>
          <form onSubmit={handleSignIn}>
            <div className="input-group">
              <InputText
                borderColor={colors.accent}
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleInputChange}
                required
                autoComplete="false"
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
                required
              />
              <ErrorLabel>{state.p_msg}</ErrorLabel>
            </div>
            <Button customStyle="btn" type="submit">
              {state.loading ? "Signing in" : "Sign In"}
            </Button>
          </form>
          <Text className="small-text">or connect using</Text>
          <div className="social-button">
            <Button iconOnly customStyle="btn-facebook">
              <Icon src={facebook} alt="facebook" />
            </Button>
            <Button
              iconOnly
              customStyle="btn-google"
              onClick={handleGoogleSignIn}
            >
              <Icon src={google} alt="google" />
            </Button>
          </div>
          <Text className="link-text">
            Don't have an account ? <Link to="/signup">Sign Up</Link>
          </Text>
        </div>
      </div>
    </main>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(SignIn);
