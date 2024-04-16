import { RootState } from "@/store";
import React, { MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledTable } from "./styles";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ICON_SIZE } from "@/constants";
import { Book } from "@/types";
import { deleteBook } from "@/reducers/books";

const BooksList = ({ onRowClick }: { onRowClick: (book: Book) => void }) => {
  const dispatch = useDispatch();
  const books: Book[] = useSelector((state: RootState) => state.books);

  const handleDelete = (e: MouseEvent<SVGElement>, book: Book) => {
    e.stopPropagation();
    dispatch(deleteBook(book.id));
  };

  if (!books.length) {
    return <></>;
  }

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr
              onClick={() => onRowClick(book)}
              key={book.id}
              className="table-row"
            >
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>{book.category}</td>
              <td>{book.description}</td>
              <td>
                <RiDeleteBin6Line
                  color="#f00"
                  className="delete-icon"
                  size={ICON_SIZE}
                  onClick={(e) => handleDelete(e, book)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default BooksList;
