import { useEffect, useState } from "react";
import Head from "next/head";
import booksJSON from "../books.json";
import { Book } from "@/types";
import { useDispatch } from "react-redux";
import { loadBooks } from "@/reducers/books";
import BooksList from "@/components/books-list";
import AddBook from "@/components/add-book";
import Modal from "@/components/modal";

interface HomeProps {
  books: Book[];
}

const Home = ({ books }: HomeProps) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (books.length) {
      dispatch(loadBooks(books));
    }
  }, [books, dispatch]);

  return (
    <>
      <Head>
        <title>BookStore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Bookstore</h1>
        <AddBook onClick={() => setShow(true)} />
        <BooksList />
      </div>
      {show && (
        <Modal>
          <form>
            <div className="form-field">
              <label htmlFor="title">Enter Name: </label>
              <input type="text" name="title" />
            </div>
            <div className="form-field">
              <label htmlFor="price">Enter Price: </label>
              <input type="number" name="price" />
            </div>
            <div className="form-field">
              <label htmlFor="category">Enter Category: </label>
              <input type="text" name="category" />
            </div>
            <div className="form-field">
              <label htmlFor="description">Enter Description: </label>
              <input type="text" name="description" />
            </div>
          </form>
          <button onClick={() => setShow(false)}>Close</button>
        </Modal>
      )}
    </>
  );
};

export function getStaticProps() {
  return { props: { books: booksJSON } };
}

export default Home;
