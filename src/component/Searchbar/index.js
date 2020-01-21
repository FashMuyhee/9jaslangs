import React from "react";
import "./index.scss";
import { InputText, Icon } from "../styled-component";
import search from "../../img/icons/search.png";
const Searchbar = ({ customClass }) => {
  return (
    <div className={`searchbar ${customClass}`}>
      <InputText
        name="query"
        placeholder="Lorem quis amet "
        className="search-input"
      />
      <Icon
        src={search}
        className="search-icon"
        alt="search"
        onClick={() => console.log("click")}
      />
    </div>
  );
};

export default Searchbar;
