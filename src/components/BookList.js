import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <Link to={`/book/${book.id}`}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
