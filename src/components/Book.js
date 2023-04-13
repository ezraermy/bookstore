import PropTypes from 'prop-types';
import prog from './styles/Prog.png';
import './styles/book.css';

const Book = ({ book, handleRemoveBook }) => (
  <li key={book.id} className="book">
    <div className="book-detail">
      <div>
        <h2 className="book-category fonts">Fiction</h2>
        <h2 className="book-title fonts">
          {book.title}
        </h2>
        <h4 className="book-author fonts">
          {book.author}
        </h4>
      </div>
      <button type="button" className="comment-btn fonts">
        Comments
      </button>
      <span className="s-line">|</span>
      <button type="button" onClick={() => handleRemoveBook(book.id)} className="remove-btn fonts">
        Remove
      </button>
      <span className="s-line">|</span>
      <button type="button" className="edit-btn fonts">
        Edit
      </button>
    </div>
    <div className="prog-image">
      <img src={prog} alt="proress" className="image" />
      <div>
        <h1 className="pent-complete fonts">64%</h1>
        <h3 className="completed fonts">Completed</h3>
      </div>
    </div>
    <div className="line">|</div>
    <div className="prog-detail">
      <h3 className="curr-chap fonts">CURRENT CHAPTER</h3>
      <h3 className="intro">INTRODUCTION</h3>
      <button type="button" className="prog-btn">UPDATE PROGRESS</button>
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
