import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import { getBookById } from '../services/BookService';

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const result = await getBookById(id);
      setBook(result);
    };
    fetchBook();
  }, [id]);

  return (
    <div className="book-page">
      {book ? <BookDetail book={book} /> : <p>Loading...</p>}
    </div>
  );
};

export default BookPage;
