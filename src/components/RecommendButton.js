import React from 'react';
import { searchBooks } from '../services/bookService';

const handleRecommendBooks = async () => {
  try {
    const recommendedBooks = await searchBooks();
    console.log(recommendedBooks); 
  } catch (error) {
    console.error('Error recommending books:', error);
  }
};

const RecommendButton = () => (
  <button onClick={handleRecommendBooks}>Recommend</button>
);

export default RecommendButton;
