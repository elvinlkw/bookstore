import { useEffect, useState } from "react";
import Head from "next/head";
import booksJSON from "../books.json";
import { Book } from "@/types";
import { useDispatch } from "react-redux";
import { loadBooks, addBook, editBook } from "@/reducers/books";
import BooksList from "@/components/books-list";
import BookDetails from "@/components/book-details";
import Modal from "@/components/modal";
import Button from "@/components/button";
import { v4 as uuidV4 } from "uuid";
import { FormDetails } from "@/components/book-details/types";

interface HomeProps {
  books: Book[];
}

const Home = ({ books }: HomeProps) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<null | Book>(null);

  useEffect(() => {
    if (books.length) {
      dispatch(loadBooks(books));
    }
  }, [books, dispatch]);

  const handleSubmit = (formDetails: FormDetails) => {
    const book: Book = { ...formDetails, id: "" };
    book.price = parseFloat(Number(book.price).toFixed(2));

    if (selectedBook) {
      // edit
      book.id = selectedBook.id;
      dispatch(editBook(book));
    } else {
      book.id = uuidV4();
      dispatch(addBook(book));
    }

    closeModal();
  };

  const closeModal = () => {
    setShow(false);
    setSelectedBook(null);
  };

  return (
    <>
      <Head>
        <title>BookStore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1 className="title">Bookstore</h1>
        <Button onClick={() => setShow(true)}>Add Book</Button>
        <BooksList
          onRowClick={(book) => {
            setShow(true);
            setSelectedBook(book);
          }}
        />
      </div>
      {show && (
        <Modal onBackDropClick={closeModal}>
          <BookDetails
            onClose={closeModal}
            onSubmit={handleSubmit}
            book={selectedBook}
          />
        </Modal>
      )}
    </>
  );
};

export function getStaticProps() {
  return { props: { books: booksJSON } };
}

export default Home;
