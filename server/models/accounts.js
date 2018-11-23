const mongoose = require('mongoose');

const Database = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true
    },
    fullname : {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('accounts', Database);
