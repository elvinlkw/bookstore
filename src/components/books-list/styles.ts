import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
  width: 600px;

  thead,
  tfoot {
    background-color: #b4cfdb;
  }

  th,
  td {
    padding: 8px 10px;
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

  td:last-of-type {
    text-align: center;
  }

  tbody > tr:nth-of-type(even) {
    background-color: rgb(237 238 242);
  }
`;
