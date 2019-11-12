const mongoose = require('mongoose');
const publisherSchema = require('../schema/publisherSchema');

const publisherModel = mongoose.model('publishers',publisherSchema);
module.exports = publisherModel;