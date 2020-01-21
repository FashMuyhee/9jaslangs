import React from "react";
import "./index.scss";
import { Header, Searchbar } from "../../component";
import { Container, Icon, Title, Text } from "../../component/styled-component";
import search from "../../img/icons/search.png";
import back from "../../img/icons/back.png";
const Left = props => (
  <>
    <Icon
      src={back}
      alt="back"
      onClick={() => {
        props.history.goBack();
      }}
      className="hide-bg"
    />
    <span className="header-logo hide-sm" />
  </>
);

const Right = () => (
  <>
    <Icon src={search} alt="search" className="hide-bg" />
    <Searchbar customClass="hide-sm" />
  </>
);
const Result = () => {
  return (
    <>
      <Header
        color="#79d2f2"
        left={<Left />}
        title="Mad oo"
        right={<Right />}
      />
      <main className="result-page">
        <Container className="result">
          <Title className="title" size="1em" case="capitalize">
            Mad oo
          </Title>
          <Text className="text">
            Ea proident laborum aliquip enim veniam ex deserunt ipsum anim magna
            qui ex mollit.
          </Text>
          <section className="examples">
            <Title className="title" size="1em" case="capitalize">
              Examples :
            </Title>
            <Text className="text">
              Ea proident laborum aliquip enim veniam ex deserunt ipsum anim
              magna qui ex mollit.
            </Text>
            <Text className="text">
              Ea proident laborum aliquip enim veniam ex deserunt ipsum anim
              magna qui ex mollit.
            </Text>
          </section>
          <section className="author">
            <Title className="title" size=".7em" case="capitalize">
              Added by:
            </Title>
            <Text className="text">Fash Muyhee</Text>
          </section>
        </Container>
      </main>
    </>
  );
};

export default Result;
