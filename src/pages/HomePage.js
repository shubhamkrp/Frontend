
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; 

function HomePage() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleRecommendBooks = () => {
    console.log('Recommend button clicked');
    console.log('Input data:', input);

    fetch('http://localhost:5000/recommend', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: input }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Received data from backend:', data);
      // Navigate to the books page
      navigate('/books');
    })
    .catch(error => console.error('Error recommending books:', error));
  };

  const handleReset = () => {
    setInput('');
  };

  return (
    <div className="homepage">
      <h1>Book Recommendation System</h1>
      <p>Welcome to the Book Recommendation System. Enter the genres and authors you like, and we'll suggest some books for you!</p>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Genres & Authors"
      />
      <div className="button-group">
        <button className="reset-button" onClick={handleReset}>Reset/Clear</button>
        <button className="recommend-button" onClick={handleRecommendBooks}>Recommend Books</button>
      </div>
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
          {/* Table rows will be dynamically added here */}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;

