// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'Pandika', age: 20};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    var db = client.db('TodoApp');
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Pandika Pinata',
        age: 20,
        location: 'Denpasar'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});