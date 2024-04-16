import styled from "styled-components";

interface BtnStyles {
  $btnType: "primary" | "secondary";
}

export const StyledButton = styled.button<BtnStyles>`
  padding: 0.5rem 0.75rem;
  color: #fff;
  border: 1px solid;
  outline: none;
  border-radius: 4px;
  cursor: pointer;

  ${({ $btnType }) => {
    if ($btnType === "primary") {
      return {
        background: "#007bff",
        borderColor: "#007bff",
      };
    }

    return {
      background: "#6c757d",
      borderColor: "#6c757d;",
    };
  }}

  &:hover {
    opacity: 0.8;
  }

  &:active {
    scale: 1.05;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.65;
  }
`;
