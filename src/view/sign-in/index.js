import React from "react";
import "./index.scss";
import { Button } from "../../component";
import { InputText, Title, Text, Icon } from "../../component/styled-component";
import colors from "../../helpers/colors";
import welcome from "../../img/welcome.png";
import facebook from "../../img/icons/facebook.png";
import google from "../../img/icons/google.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
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
          <form>
            <InputText
              borderColor={colors.accent}
              name="email"
              type="email"
              placeholder="Email"
            />
            <InputText
              borderColor={colors.accent}
              name="password"
              type="password"
              placeholder="Password"
            />
            <Button type="submit" customStyle="btn">
              Sign In
            </Button>
          </form>
          <Text className="small-text">or connect using</Text>
          <div className="social-button">
            <Button iconOnly customStyle="btn-facebook">
              <Icon src={facebook} alt="facebook" />
            </Button>
            <Button iconOnly customStyle="btn-google">
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

export default SignIn;
