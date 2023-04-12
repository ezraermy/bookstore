import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBook, getBooks } from 'redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleAddBook = async () => {
    if (title.trim() === '' || author.trim() === '') {
      setMessage('Please enter a title and author.');
      return;
    }

    const newBook = {
      id: Math.floor(Math.random() * 100),
      title,
      author,
      category: '',
    };

    await dispatch(postBook(newBook));
    await dispatch(getBooks());

    setTitle('');
    setAuthor('');
    setMessage('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br />
      <br />
      <button type="button" onClick={handleAddBook}>
        Add Book
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Form;
