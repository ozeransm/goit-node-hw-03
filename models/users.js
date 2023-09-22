const mongoose = require('mongoose');
const usersSchema = require("./userSchema");

const Users = mongoose.model('user', usersSchema);

module.exports = Users;