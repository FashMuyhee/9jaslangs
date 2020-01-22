import React from "react";
import "./index.scss";
import cancel from "../../img/icons/cancel.png";
import back from "../../img/icons/back.png";
import { Title, Icon } from "../styled-component";
const Modal = ({ handleClose, title, show, children, others }) => {
  const showModal = show
    ? "main-modal display-block"
    : "main-modal display-none";

  return (
    <div className={showModal}>
      <section className="modal-container">
        <nav className="modal-header">
          <Icon
            src={back}
            alt="cancel"
            className="modal-back"
            onClick={handleClose}
          />
          <Title className="modal-header-title">{title}</Title>
          <Icon
            src={cancel}
            alt="cancel"
            className="modal-cancel"
            onClick={handleClose}
          />
          
          <span/>
          {others}
        </nav>
        <div className="modal-content">
          <Title className="modal-title" align="center">
            {title}
          </Title>
          {children}
        </div>
      </section>
    </div>
  );
};

export default Modal;
