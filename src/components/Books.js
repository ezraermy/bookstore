import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from 'redux/books/booksSlice';
import { useState } from 'react';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const categories = ['Fiction', 'Nonfiction'];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddBook = () => {
    const newBook = {
      itemId: Math.floor(Math.random() * 100),
      title,
      author,
      category: selectedCategory || categories[0],
    };

    dispatch(addBook(newBook));

    setTitle('');
    setAuthor('');
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook({ itemId }));
  };

  const filteredBooks = selectedCategory
    ? books.filter((book) => book.category === selectedCategory)
    : books;

  return (
    <div>
      <div>
        {categories.map((category) => (
          <button type="button" key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
        <button type="button" onClick={() => setSelectedCategory(null)}>All</button>
      </div>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.itemId}>
            {book.title}
            {' '}
            by
            {' '}
            {book.author}
            <button type="button" onClick={() => handleRemoveBook(book.itemId)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
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
      </div>
    </div>
  );
};

export default Books;
