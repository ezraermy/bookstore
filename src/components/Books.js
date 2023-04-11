const Books = () => (
  <div className="Books">
    <h1>Bookstore CMS</h1>
    <form className="formContainer">
      <br />
      <input type="text" placeholder="Write your book here" />
      <br />
      <br />
      <input type="text" placeholder="Author" />
      <br />
      <br />
      <button type="submit" className="btn">Add book</button>
    </form>
  </div>
);

export default Books;
