const mongoose = require('mongoose');

const Database = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    code : {
        type: String,
        require: true,
    },
    description : {
        type: String,
        required: true
    },
    flag: {
        type: String,
        required: true
    },
    isOpen : {
        type: Boolean,
        default : false
    },
    openTime : {
        type: Number,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('props', Database);
