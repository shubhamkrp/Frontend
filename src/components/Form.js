import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [input, setInput] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleReset = () => {
    setInput('');
    setRecommendations([]);
  };

  const handleRecommend = async () => {
    const [genres, authors] = input.split(',').map(str => str.trim().split(' '));

    try {
      const response = await fetch('http://localhost:5000/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ genres, authors }),
      });

      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <section className="input-form">
      <textarea 
        placeholder="Please enter genres & authors here"
        rows="4" 
        cols="50"
        value={input}
        onChange={handleInputChange}
      />
      <div className="buttons">
        <button className="reset" onClick={handleReset}>Reset/Clear</button>
        <button className="recommend" onClick={handleRecommend}>Recommend Books</button>
      </div>
      <div className="recommendations">
        {recommendations.map((book, index) => (
          <div key={index} className="recommendation">
            <h3>{book.title}</h3>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Form;
