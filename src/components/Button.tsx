import React from "react";
import "./style.scss";
import { RightArrow } from "../assets";
import { ButtonTtype } from "../utils/type";

const Button = ({
  type = "light",
  size = "rg",
  icon,
  children,
  ...rest
}: ButtonTtype) => {
  return (
    <button className={`button-${type} ${size}`} {...rest}>
      {children}
      <RightArrow color={type === "ghost" ? "white" : "#0088ff"} />
    </button>
  );
};

export default Button;
