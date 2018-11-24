const mongoose = require('mongoose');

const Database = new mongoose.Schema({
    username : {
        type: String,
        required: true,
    },
    prob : {
        type: String,
        required: true,
    },
    flag : {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Log', Database);
