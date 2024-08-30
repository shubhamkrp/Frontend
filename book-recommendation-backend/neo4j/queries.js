const driver = require('./driver');

const searchBooks = async (query) => {
  const session = driver.session();
  const result = await session.run(
    `MATCH (b:Book)
     WHERE b.title CONTAINS $query OR b.author CONTAINS $query
     RETURN b`,
    { query }
  );
  session.close();
  return result.records.map((record) => record.get('b').properties);
};

const getBookDetails = async (id) => {
  const session = driver.session();
  const result = await session.run(
    `MATCH (b:Book)
     WHERE b.id = $id
     RETURN b`,
    { id }
  );
  session.close();
  return result.records.length > 0 ? result.records[0].get('b').properties : null;
};

module.exports = {
  searchBooks,
  getBookDetails,
};
