import { RightArrow } from "../../assets";
import { ButtonType } from "../../types";
import "../style.scss";

const Button = ({
  type = "light",
  size = "rg",
  children,
  ...rest
}: ButtonType) => {
  return (
    <button className={`button-${type} ${size}`} {...rest}>
      {children}
      <RightArrow color={type === "ghost" ? "white" : "#0088ff"} />
    </button>
  );
};

export default Button;
