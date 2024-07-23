import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;
