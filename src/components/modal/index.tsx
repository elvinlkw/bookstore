"use client";
import React from "react";
import ReactDOM from "react-dom";
import { StyledBackdrop, StyledModal } from "./styles";
import { ModalProps } from "./types";

const Modal = ({ children, onBackDropClick }: ModalProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  return mounted
    ? ReactDOM.createPortal(
        <StyledBackdrop onClick={onBackDropClick} className="backdrop">
          <StyledModal onClick={(e) => e.stopPropagation()}>
            {children}
          </StyledModal>
        </StyledBackdrop>,
        document.getElementById("modal-root") as HTMLElement
      )
    : null;
};

export default Modal;
