import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BookTable from '../components/BookTable';
import { searchBooks } from '../services/BookService';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await searchBooks();
      setBooks(result);
    };
    fetchBooks();
  }, []);

  return (
    <div className="home-page">
      <SearchBar onSearch={() => {}} /> {/* You can implement search functionality later */}
      <BookTable books={books} />
    </div>
  );
};

export default HomePage;


