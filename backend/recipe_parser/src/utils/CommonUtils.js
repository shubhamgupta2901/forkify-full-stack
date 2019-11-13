const generateRandomNumber = (maxLimitExclusive) => {
    return Math.floor(Math.random()*maxLimitExclusive);
};

module.exports = {
    generateRandomNumber,
}