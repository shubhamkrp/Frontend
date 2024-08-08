import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookTable from './components/BookTable';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BookTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




