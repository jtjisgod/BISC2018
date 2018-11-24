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
    },
    isAdmin : {
        type: Boolean,
        default : false
    },
    solved : {
        type : Array,
        default : []
    },
    spendTime : {
        type: Number,
        default : 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('accounts', Database);
