import React from "react";
import "./index.scss";
import { Header, Searchbar } from "../../component";
import { Title, Text, InputText, Icon } from "../../component/styled-component";
import search from "../../img/icons/search.png";
import plus from "../../img/icons/plus.png";
import Button from "../../component/Button";
import { Link } from "react-router-dom";

const Right = () => {
  return (
    <ul>
      <li>
        <a href="/">Sign In</a>
      </li>
      <li>
        <a href="/">Sign Up</a>
      </li>
      <li className="no-visible">
        <a href="/">Add Slang</a>
      </li>
    </ul>
  );
};
const Home = () => {
  return (
    <>
      <Header right={<Right />} />
      <main className="landing-page">
        <div className="container">
          <Title>9ja Slangs</Title>
          <Text subtitle small align="center">
            Consequat veniam occaecat ad tempor quis nostrud nostrud magna.
          </Text>
          <Searchbar />
          <Link to="/result/1">To Result</Link>
          <Button fab customStyle="fab-btn">
            <Icon src={plus} alt="plus" />
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;
