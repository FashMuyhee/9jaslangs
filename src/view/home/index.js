import React, { useState } from "react";
import "./index.scss";
import { Header, Searchbar, Modal, Button, Footer } from "../../component";
import {
  Title,
  Text,
  InputText,
  Icon,
  TextArea
} from "../../component/styled-component";
import plus from "../../img/icons/plus.png";
import { Link } from "react-router-dom";
import firebaseApp from "../../config/firebase";
import "firebase/firestore";

const Home = () => {
  const [modal_state, setModalState] = useState(false);
  const [input_state, setInputState] = useState({
    slang: "",
    meaning: "",
    examples: ""
  });

  const handleModalClose = () => {
    setModalState(false);
  };

  const handleModalOpen = () => {
    setModalState(true);
    setModalState(true);
  };

  const handleInputChange = e => {
    setInputState({ ...input_state, [e.target.name]: e.target.value });
  };

  const handleAddSlang = () => {
    firebaseApp
      .firestore()
      .collection(`slangs`)
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
  };
  return (
    <>
      <Header onClick={handleModalOpen} />
      <main className="landing-page">
        <div className="container">
          <Title>9ja Slangs</Title>
          <Text subtitle small align="center">
            Consequat veniam occaecat ad tempor quis nostrud nostrud magna.
          </Text>
          <Searchbar />
          <Link to="/result/1">To Result</Link>
          <Button fab customStyle="fab-btn" onClick={handleModalOpen}>
            <Icon src={plus} alt="plus" />
          </Button>
        </div>
        <Modal
          show={modal_state}
          title="New Slang"
          handleClose={handleModalClose}
        >
          <form className="add-form">
            <InputText
              placeholder="Mad oo"
              name="slang"
              borderColor="#79d2f2"
              onChange={handleInputChange}
              />
            <TextArea
              borderColor="#79d2f2"
              name="meaning"
              placeholder="A way of expressing suprise to an happening"
              onChange={handleInputChange}
              />
            <TextArea
              borderColor="#79d2f2"
              name="examples"
              placeholder="E.g Man-u beat Arsenal 4-0; Mad oo"
              onChange={handleInputChange}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Modal>
      </main>
      <Footer />
    </>
  );
};

export default Home;
