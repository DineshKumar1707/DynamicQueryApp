// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

// const QueryPost = require('../models/queries');
// const path = require('path');
// const mysql = require('mysql');



const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');
const { Console } = require('console');

const URI = "mongodb+srv://dinesh123:Password123@cluster0.bxkot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Database is connected');
});

// Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP Request Logger
app.use(cors());
app.use(morgan('tiny'));
app.use('/api', routes);




app.listen(PORT, () => console.log(`Hey, Your Server Started at ${PORT}`));

