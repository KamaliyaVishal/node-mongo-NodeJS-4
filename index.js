const MongoClint = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbName = 'conFusion';

console.log('Connecting to... : ' + url)

MongoClint.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('Connected to : ' + url)

    const db = client.db(dbName);
    const collection = db.collection("dishes");

    collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);

        console.log('\nDocuments Founds are : \n');
        console.log(docs);

        client.close();
    });

});
