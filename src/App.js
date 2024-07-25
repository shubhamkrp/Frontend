import React from 'react';
import './App.css';
import Form from './components/Form';
import BookTable from './components/BookTable';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Recommendation System</h1>
      </header>
      <main>
        <section className="intro">
          <p>Welcome to the Book Recommendation System. Enter the genres and authors you like, we'll suggest some books for you!</p>
        </section>
        <section className="input-form">
          <textarea 
          placeholder="Please enter genres & authors here"
          rows="4"
          cols="5"
          />
          <div className="buttons">
            <button className="reset">Reset/Clear</button>
            <button className="recommend">Recommend Books</button>
          </div>
        </section>
      </main>
      <Form />
      <BookTable />
    </div>
  );
}

export default App;
