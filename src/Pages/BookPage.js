import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import axios from 'axios';

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`https://api.example.com/books/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the book details!", error);
      });
  }, [id]);

  return (
    <div className="book-page">
      {book ? <BookDetail book={book} /> : <p>Loading...</p>}
    </div>
  );
};

export default BookPage;
