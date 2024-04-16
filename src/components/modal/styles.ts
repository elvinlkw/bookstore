import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  cursor: pointer;
`;

export const StyledModal = styled.div`
  width: 420px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 1.5rem;
  cursor: auto;
  box-sizing: border-box;
  border-radius: 8px;
`;
