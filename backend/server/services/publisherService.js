const Publisher = require('../db/models/publisherModel');

const getPublishers = async (params) => {
    const mongoQuery = {};
    const publishers = await Publisher.find(mongoQuery);
    return {publishers};
}

module.exports = {
    getPublishers
}