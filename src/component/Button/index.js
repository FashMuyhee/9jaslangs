import React from "react";
import "./index.scss";
const Button = ({ fab, iconOnly, withIcon, children, customStyle }) => {
  let buttonStyle;
  if (iconOnly) buttonStyle = "icon-only";
  else if (withIcon) buttonStyle = "with-icon";
  else if (fab) buttonStyle = "fab";

  return (
    <button className={` ${customStyle} ${buttonStyle}`} type="button">
      {children}
    </button>
  );
};
export default Button;
