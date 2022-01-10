const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const runnerSchema = new Schema({
    firstName: {type: String, required: true, trim: true, minlength: 2},
    lastName: {type: String, required: true, trim: true, minlength: 2},
    SIID: {type: String, required: true, trim: true, unique: true, minlength: 7, maxlength: 7},
}, {
    timestamps: false,
});

const Runner = mongoose.model('Runner', runnerSchema);

module.exports = Runner;
