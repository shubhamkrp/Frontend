const neo4j = require('neo4j-driver');

const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j+s://340367c1.databases.neo4j.io', 'cpnav8sSUk0AR0xs-x4zLiZ6sW1RnKzlOgAWts69QLY'));

const session = driver.session();

const query = `
  MATCH (b:Book)-[:BELONGS_TO]->(g:Genre), (b)-[:WRITTEN_BY]->(a:Author)
  RETURN b.title AS title, b.description AS description, collect(g.name) AS genres, collect(a.name) AS authors
`;

session.run(query)
  .then(result => {
    result.records.forEach(record => {
      console.log(record.get('title'), record.get('description'), record.get('genres'), record.get('authors'));
    });
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    session.close();
    driver.close();
  });

