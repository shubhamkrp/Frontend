import React, { useState, useEffect } from 'react';
import './BookTable.css'; // Add this for styling

function BookTable() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/recommend') 
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="book-table-page">
      <h1>Recommended Books</h1>
      <table className="books-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Genres</th>
            <th>Authors</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.description}</td>
                <td>{book.genres.join(', ')}</td>
                <td>{book.authors.join(', ')}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No books found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
