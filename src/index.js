const express = require('express');
const neo4j = require('neo4j-driver');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

app.use(cors());
app.use(express.json());

app.get('/api/books', async (req, res) => {
  const session = driver.session();
  try {
    const result = await session.run('MATCH (b:Book) RETURN b');
    const books = result.records.map(record => record.get('b').properties);
    res.json(books);
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await session.close();
  }
});

app.get('/api/books/:id', async (req, res) => {
  const session = driver.session();
  const { id } = req.params;
  try {
    const result = await session.run('MATCH (b:Book {id: $id}) RETURN b', { id });
    const book = result.records.length > 0 ? result.records[0].get('b').properties : null;
    res.json(book);
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await session.close();
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

