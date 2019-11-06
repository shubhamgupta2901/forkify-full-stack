const mongoose = require('mongoose');
const userSchema = require('../schema/userSchema');

const User = mongoose.model('users',userSchema);
module.exports = User;