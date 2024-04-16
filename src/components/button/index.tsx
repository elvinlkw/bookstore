import React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

const Button = ({ children, type, onClick, disabled = false }: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      $btnType={type ?? "primary"}
      type={type === "primary" ? "submit" : "button"}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
