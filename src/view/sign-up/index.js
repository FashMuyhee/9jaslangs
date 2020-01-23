import React from "react";
import "./index.scss";
import { Button } from "../../component";
import { InputText, Title, Text } from "../../component/styled-component";
import colors from "../../helpers/colors";
import welcome from "../../img/welcome.png";

import { Link } from "react-router-dom";

const SignUp = () => {
  return (
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
          <form>
            <InputText
              borderColor={colors.accent}
              name="name"
              type="text"
              placeholder="Fullname"
            />
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
            <InputText
              borderColor={colors.accent}
              name="comfirm-password"
              type="password"
              placeholder="Confirm Password"
            />
            <Button type="submit" customStyle="btn">
              Sign Up
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

export default SignUp;
