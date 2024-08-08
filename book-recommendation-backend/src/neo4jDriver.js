const neo4j = require('neo4j-driver');

const uri = '340367c1.databases.neo4j.io:7687';
const user = 'neo4j+s://';
const password = 'cpnav8sSUk0AR0xs-x4zLiZ6sW1RnKzlOgAWts69QLY';

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();

module.exports = { driver, session };
