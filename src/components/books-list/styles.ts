import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-size: 0.8rem;
  letter-spacing: 1px;
  width: 100%;
  margin: 0.5rem 0;

  thead,
  tfoot {
    background-color: #b4cfdb;
  }

  th,
  td {
    padding: 8px 10px;
    text-align: left;
  }

  th:nth-child(1) {
    width: 25%;
  }
  th:nth-child(2) {
    width: 10%;
  }
  th:nth-child(3) {
    width: 15%;
  }
  th:nth-child(4) {
    width: 50%;
  }
  th:nth-child(5) {
    width: 20px;
  }

  .table-row {
    cursor: pointer;
  }

  .table-row .delete-icon {
    visibility: hidden;
  }

  .table-row:hover .delete-icon {
    visibility: visible;
  }

  tbody > tr:nth-of-type(even) {
    background-color: #e4f0f5;
  }

  tbody > tr:hover {
    background-color: rgb(237 238 242);
  }

  @media only screen and (max-width: 800px) {
    width: 100vw;
  }
`;
