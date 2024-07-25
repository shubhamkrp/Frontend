const express = require('express');
const cors = require('cors');
const { getBookRecommendations, getAllBooks } = require('./src/bookService');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/recommendations', async (req, res) => {
  const { genres, authors } = req.body;

  try {
    const recommendations = await getBookRecommendations(genres, authors);
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching recommendations' });
  }
});

app.get('/api/books', async (req, res) => {
    try{
        const books = await getAllBooks();
        res.json(books);
    }   catch(error) {
        res.status(500).json({error: 'An error occurred while fetching books'});
    }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

