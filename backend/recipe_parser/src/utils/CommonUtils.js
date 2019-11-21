const generateRandomNumber = (maxLimitExclusive) => {
    return Math.floor(Math.random()*maxLimitExclusive);
};

const getCallerFunctionName = ()=> getCallerFunctionName.caller.name()

module.exports = {
    generateRandomNumber,
    getCallerFunctionName
}