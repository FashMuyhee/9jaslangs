import React, { useState } from "react";
import "./index.scss";
import { Header, Searchbar, Modal, Footer } from "../../component";
import {
  Container,
  Icon,
  Title,
  Text,
  InputText,
  Avatar
} from "../../component/styled-component";
import colors from "../../helpers/colors";
import search from "../../img/icons/search.png";
import back from "../../img/icons/back.png";
const Left = ({ onClick }) => (
  <>
    <Icon src={back} alt="back" onClick={onClick} className="hide-bg" />
    <span className="header-logo hide-sm" />
  </>
);

const Right = ({ onClick }) => (
  <>
    <Icon src={search} alt="search" className="hide-bg" onClick={onClick} />
    <Searchbar customClass="hide-sm no-margin" />
    <Avatar>FM</Avatar>
  </>
);
const Result = props => {
  const [modal_state, setModalState] = useState(false);

  const handleModalClose = () => {
    setModalState(false);
  };

  const handleModalOpen = () => {
    setModalState(true);
    setModalState(true);
  };
  const ModalSearch = () => (
    <div className="modal-search">
      <InputText
        placeholder="Pariatur duis"
        name="query"
        className="modal-input"
      />
    </div>
  );
  return (
    <>
      <Header
        color={colors.primary}
        left={<Left onClick={() => props.history.goBack()} />}
        title="Mad oo"
        right={<Right onClick={handleModalOpen} />}
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
              Slang Credit:
            </Title>
            <Text className="text">Fash Muyhee</Text>
          </section>
        </Container>
        <Modal
          show={modal_state}
          others={<ModalSearch />}
          handleClose={handleModalClose}
        ></Modal>
      </main>
      <Footer />
    </>
  );
};

export default Result;
