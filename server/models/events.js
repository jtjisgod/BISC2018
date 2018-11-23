const mongoose = require('mongoose');

const Database = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    code : {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('events', Database);
