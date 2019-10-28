const mongoose = require('mongoose');
const userSchema = require('../db/schema/user');

const User = mongoose.model('users',userSchema);
module.exports = User;