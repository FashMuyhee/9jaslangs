import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { Title, Avatar } from "../styled-component";
import { Button } from "../index";
import { Link } from "react-router-dom";
import withFirebaseAuth from "react-with-firebase-auth";
import firebaseApp from "../../config/firebase";
// import "firebase/auth";

const firebaseAppAuth = firebaseApp.auth();

const Header = ({ left, title, right, color, onClick, user, signOut }) => {
  const [user_name, setuserName] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("user");
    const array = username.split(" ");
    const new_username = `${array[0].charAt(0)} ${array[1].charAt(0)}`;
    setuserName(new_username);
  }, []);

  const handleSignOut = () => {
    signOut().then(() => {
      localStorage.clear()
      console.log("signed out");
    });
  };
  const titleContent = title ? (
    <Title className="header-brand" size="1em" case="Capitalize">
      {title}
    </Title>
  ) : (
    ""
  );

  return (
    <header className="header" style={{ background: color }}>
      <div className="header-container">
        <>{left}</>
        <>{titleContent}</>
        <nav className="header-links">
          {right}
          {user ? (
            <Avatar onClick={handleSignOut}>{user_name}</Avatar>
          ) : (
            <ul>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li className="no-visible" onClick={onClick}>
                <Button>Add Slang</Button>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};
Header.defaultProps = {
  left: <span className="header-logo" />
};

Header.propTypes = {
  left: PropTypes.element,
  title: PropTypes.string,
  right: PropTypes.element
};
export default withFirebaseAuth({
  firebaseAppAuth
})(Header);
