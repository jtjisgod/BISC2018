const mongoose = require('mongoose');

const Database = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    event : {
        type: String,
        required: true,
    },
    phone : {
        type: String,
        required: true,
    },
    time : {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('report', Database);
