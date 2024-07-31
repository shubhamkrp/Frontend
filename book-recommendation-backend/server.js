
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

let books = [
  { id: 1, title: 'Book 1', description: 'Description 1', genres: ['Romance'], authors: ['Colleen Hoover'] },
  { id: 2, title: 'Book 2', description: 'Description 2', genres: ['Sci-Fi'], authors: ['Isaac Asimov'] },
];

app.post('/recommend', (req, res) => {
  const query = req.body.query;
  const recommendedBooks = books.filter(book =>
    book.genres.some(genre => query.includes(genre)) ||
    book.authors.some(author => query.includes(author))
  );
  res.json(recommendedBooks);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
