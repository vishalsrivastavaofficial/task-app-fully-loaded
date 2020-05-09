//CRUD Operations

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.getTimestamp())

// MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to db!')
//     }

//     const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Vishal Srivastava',
    //     age: 27
    // }, (error, result)=> {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Surya Prakash',
    //     age: 18
    // }, {
    //     name: 'Vishal Khanna',
    //     age: 27
    // }], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert many users')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //     description: 'Surya Prakash',
    //     completed: true
    // }, {
    //     description: 'Vishal Srivastav',
    //     completed: false
    // }], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert many users')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ age: 18 }, (error, result)=> {
    //     if(error) {
    //         return console.log('Unable to find user')
    //     }

    //     console.log(result)
    // })

    // db.collection('users').find({ age: 18 }).toArray((error, result)=> {
    //     if(error) {
    //         return console.log('Unable to find user')
    //     }

    //     console.log(result)
    // })

    // db.collection('users').find({ age: 18 }).count((error, result)=> {
    //     if(error) {
    //         return console.log('Unable to find user')
    //     }

    //     console.log(result)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5eb5b5b7b7473e3684879047')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result)=> {
    //     console.log(result)
    // }).catch((error)=> {
    //     console.log(error)
    // })

//     db.collection('users').deleteMany({ age:27 }
//         ).then((result)=> {
//         console.log(result)
//     }).catch((error)=> {
//         console.log(error)
//     })

// })

