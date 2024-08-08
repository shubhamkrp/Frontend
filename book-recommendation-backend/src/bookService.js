const { session } = require('./neo4jDriver');

async function getAllBooks() {
  const query = `
    MATCH (b:Book)-[:BELONGS_TO]->(g:Genre), (b)-[:WRITTEN_BY]->(a:Author)
    RETURN b.title AS title, b.description AS description, collect(g.name) AS genres, collect(a.name) AS authors
  `;

  try {
    const result = await session.run(query);
    const books = result.records.map(record => ({
      title: record.get('title'),
      description: record.get('description'),
      genres: record.get('genres'),
      authors: record.get('authors'),
    }));
    return books;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  } finally {
    await session.close();
  }
}

module.exports = {
  getAllBooks,
};
