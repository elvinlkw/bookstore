import styled from "styled-components";

export const StyledForm = styled.form`
  .form-field {
    width: 100%;
    padding: 0.2rem 0;
    box-sizing: border-box;

    input {
      box-sizing: border-box;
      width: 100%;
      margin: 0.25rem 0;
      padding: 0.75rem;
      border: 1px #aaa solid;
    }

    input.input-error {
      border: 1px #f00 solid;
    }

    input.input-error::placeholder {
      color: #f00;
    }
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
    gap: 0.25rem;
    margin-top: 0.5rem;
  }

  .val-error {
    font-size: 0.75rem;
    color: #f00;
    height: 15px;
  }
`;
