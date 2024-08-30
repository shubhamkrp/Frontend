const express = require('express');
const { fetchBooks } = require('../neo4j/queries');

const router = express.Router();

router.get('/books', async (req, res) => {
  try {
    const books = await fetchBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

