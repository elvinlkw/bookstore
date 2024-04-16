"use client";
import React from "react";
import ReactDOM from "react-dom";
import { StyledBackdrop, StyledModal } from "./styles";

const ModalComponent = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <StyledBackdrop className="backdrop">
      <StyledModal>{children}</StyledModal>
    </StyledBackdrop>
  );
};

const Modal = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  return mounted
    ? ReactDOM.createPortal(
        <ModalComponent>{children}</ModalComponent>,
        document.getElementById("modal-root") as HTMLElement
      )
    : null;
};

export default Modal;
