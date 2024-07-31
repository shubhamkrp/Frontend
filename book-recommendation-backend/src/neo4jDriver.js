const neo4j = require('neo4j-driver');

const uri = 'YOUR_NEO4J_INSTANCE_URI';
const user = 'YOUR_NEO4J_USERNAME';
const password = 'YOUR_NEO4J_PASSWORD';

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();

module.exports = { driver, session };
