const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const QueriesSchema = new Schema( {
    name: {
        type: String,
        required: true
    },
    insertQuery: {
        type: String,
        required: true
    },
    selectQuery: {
        type: String,
        required: true
    },
});

// Model
const queries = mongoose.model('queries', QueriesSchema);

module.exports = queries;