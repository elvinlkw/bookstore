import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.75rem 1rem;
  background: #357edd;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 4px;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    scale: 1.05;
  }
`;
