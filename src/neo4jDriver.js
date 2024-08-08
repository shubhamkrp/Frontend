const neo4j = require('neo4j-driver');

const driver = neo4j.driver(
  'bolt://localhost:7687', 
  neo4j.auth.basic('neo4j+s://', 'cpnav8sSUk0AR0xs-x4zLiZ6sW1RnKzlOgAWts69QLY') 
);

const session = driver.session();

module.exports = {
  driver,
  session,
};
