const neo4j = require('neo4j-driver');

const driver = neo4j.driver(
  'bolt://localhost:7687', // Replace with your Neo4j instance URL
  neo4j.auth.basic('neo4j', 'cpnav8sSUk0AR0xs-x4zLiZ6sW1RnKzlOgAWts69QLY') // Replace with your Neo4j credentials
);

const session = driver.session();

module.exports = {
  driver,
  session,
};
