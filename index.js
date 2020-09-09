const MongoClint = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbName = 'conFusion';

console.log('Connecting to... : ' + url)

MongoClint.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('Connected to : ' + url)

    const db = client.db(dbName);

    /**  dboper.insertDocument(db, { name: "Vadonut", description: "Test" }, "dishes", (result) => {
         console.log("Insert Document:\n", result.ops);
     });
 
     dboper.findDocument(db, "dishes", result => {
         console.log("\nFound Documents:\n", result);
     });
 
     dboper.updateDocument(db, { description: "Test1" }, { name: "Vadonut Test" },  "dishes", result => {
         console.log("Updated Document:\n", result.result);
     });

    dboper.findDocument(db, "dishes", result => {
        console.log("\nFound Documents:\n", result);
    });

    dboper.removeDocument(db, "dishes", { name: "Vadonut Test" }, result => {
        console.log("Dropped Collection: ", result);
    });

    dboper.findDocument(db, "dishes", result => {
        console.log("\nFound Documents:\n", result);
    });
    client.close();
    */

    dboper.insertDocument(db, { name: "Vadonut", description: "Test" },
        "dishes", (result) => {
            console.log("\nInsert Document:\n", result.ops);

            dboper.findDocument(db, "dishes", (docs) => {
                console.log("\nFound Documents:\n", docs);

                dboper.updateDocument(db, { name: "Vadonut" },
                    { description: "\nUpdated Test" }, "dishes",
                    (result) => {
                        console.log("\nUpdated Document:\n", result.result);

                        dboper.findDocument(db, "dishes", (docs) => {
                            console.log("\nFound Updated Documents:\n", docs);

                            db.dropCollection("dishes", (result) => {
                                console.log("\nDropped Collection: ", result);

                                client.close();
                            });

                        });
                    });
            });
        });

});
