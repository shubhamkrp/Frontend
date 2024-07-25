import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import axios from 'axios';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = (query) => {
    axios.get(`https://api.example.com/books?query=${query}`)
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the books!", error);
      });
  };

  return (
    <div className="home-page">
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
