const driver = require('./driver');

const fetchBooks = async () => {
  const session = driver.session();
  const result = await session.run(
    `MATCH (b:Book)
     RETURN b.title AS title, b.author AS author, b.publishedYear AS year`
  );
  session.close();
  return result.records.map((record) => ({
    title: record.get('title'),
    author: record.get('author'),
    year: record.get('year')
  }));
};

module.exports = { fetchBooks };
