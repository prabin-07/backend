const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    memberName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    deadline: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Member', memberSchema); 