const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://Sawon:Sawon123@node-conn.snu2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const dbName = 'myFirstDatabase';

const options = { useUnifiedTopology: true };

let db = null;

MongoClient.connect(url, options, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db = client.db(dbName);

  client.close();
});

module.exports = {db};