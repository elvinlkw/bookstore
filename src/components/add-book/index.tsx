import React from "react";
import { StyledButton } from "./styles";

interface AddBookProps {
  onClick: () => void;
}

const AddBook = ({ onClick }: AddBookProps) => {
  return <StyledButton onClick={onClick}>Add Book</StyledButton>;
};

export default AddBook;
