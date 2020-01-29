import React from "react";
import "./index.scss";
const Button = ({
  fab,
  iconOnly,
  withIcon,
  children,
  customStyle = "",
  onClick,
  link,
  type
}) => {
  let buttonStyle = "just-button";
  if (iconOnly) buttonStyle = "icon-only";
  else if (link) buttonStyle = "link";
  else if (withIcon) buttonStyle = "with-icon";
  else if (fab) buttonStyle = "fab";

  return (
    <button
      className={` ${customStyle} ${buttonStyle}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
