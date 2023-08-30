const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const person = new Schema({
    tailor_id: String,
    name: String,
    age: String,
    phone: String,
    email: String,
    address: String,
    status: String
    
},{timestamps: true});

module.exports = mongoose.model('person', person, 'person');
