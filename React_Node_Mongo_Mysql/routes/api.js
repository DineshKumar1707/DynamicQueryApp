const express = require('express');

const router = express.Router();

const QueryPost = require('../models/queries');

const cors = require('cors');
const mysql = require('mysql');


// MySQL Connection 

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rootroot123",
    database:"newquery"
});

db.connect(function(err) {
    if(err) throw err;
    console.log('MySQl is connected');
});

// Routes
router.get('/read', async(req, res) => {

    const selectQuery = req.body.selectQuery;

    QueryPost.find({ })
        .then((data) => {
            console.log('Data:', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error', daerrorta);
        });
});

router.post('/save', (req, res) => {

    const name = req.body.name;
    const insertQuery = req.body.insertQuery;
    const selectQuery = req.body.selectQuery;

    const newQueryPost = new QueryPost({name: name, insertQuery: insertQuery, selectQuery: selectQuery});

    newQueryPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        res.json({
            msg: 'Your data has been saved!!!'
        });
    });
});


// QueryPost.findOne({}, function(err, result) {
//     if(err) console.warn(err);
//     console.warn(result.name);
// })

router.get('/mysqlread', (req, res) => {
    QueryPost.findOne({}, function(err, result) {
        if(err) console.warn(err);
        console.warn(result.selectQuery);
        var select = result.selectQuery;
        db.query(select, (err, result1) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result1);
            }
        });
    });
});

router.post('/mysqlcreate', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;

    const insertQuery = req.body.insertQuery;

    QueryPost.findOne({}, function(err, result) {
            if(err) console.warn(err);
            console.warn(result.insertQuery);
            var insert = result.insertQuery 
    db.query(insert, [firstname, lastname, age], (err, result1) => {
            if (err) {
                console.log(err);
            } else {
                res.send('Values inserted');
            }
        });
    });
});



router.get('/name', (req, res) => {
    const data = {
        username: 'prem',
        age: 24
    };
    res.json(data);
})


module.exports = router;