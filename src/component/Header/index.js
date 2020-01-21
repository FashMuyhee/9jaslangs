import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { Title } from "../styled-component";

const Header = ({ left, title, right, color }) => {
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
        <nav className="header-links">{right}</nav>
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
export default Header;
