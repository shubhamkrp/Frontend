const express = require('express');
const { searchBooks, getBookDetails } = require('../neo4j/queries');

const router = express.Router();

router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    const books = await searchBooks(q);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await getBookDetails(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
