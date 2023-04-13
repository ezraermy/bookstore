import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, getBooks } from 'redux/books/booksSlice';
import Form from './Form';
import './styles/books.css';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.allBooks);
  const isLoading = useSelector((state) => state.books.isLoading);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleRemoveBook = async (id) => {
    const key = process.env.REACT_APP_API_KEY;
    try {
      await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${key}/books/${id}`);

      dispatch(removeBook(id));
    } catch (error) {
      throw new Error('Something went wrong');
    }
  };

  return (
    <div className="container">
      {isLoading && <p className="loading">Loading books...</p>}
      {!isLoading && (
        <>
          <ul>
            {books.map((book) => (
              <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
            ))}
          </ul>
          <Form />
        </>
      )}
    </div>
  );
};

export default Books;
