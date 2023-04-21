import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBook, getBooks } from 'redux/books/booksSlice';
import './styles/Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const categories = ['Fiction', 'Classic'];

  const handleAddBook = async () => {
    if (title.trim() === '' || author.trim() === '') {
      setMessage('Please enter a title and author.');
      return;
    }

    const newBook = {
      id: Math.floor(Math.random() * 100),
      title,
      author,
      category: categories[0],
    };

    await dispatch(postBook(newBook));
    await dispatch(getBooks());

    setTitle('');
    setAuthor('');
    setMessage('');
  };

  return (
    <div className="form-container">
      <h3 className="form-title fonts">ADD NEW BOOK</h3>
      <div className="input-form">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="book-input fonts"
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="author-input fonts"
        />
        <button type="button" onClick={handleAddBook} className="add-btn fonts">
          Add Book
        </button>
      </div>
      {message && <p className="error">{message}</p>}
    </div>
  );
};

export default Form;
