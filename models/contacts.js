const mongoose = require('mongoose');

const schema = require('./contactsSchema')  
const Contacts = mongoose.model('contact', schema);

module.exports = Contacts;
