//load Cuisines.json file from src/dictionaries/ to load all type of cuisines
//Select a random cuisine and assign it to the recipe
const FileUtils = require('../utils/FileUtils');
const path = require('path');
const CommonUtils = require('../utils/CommonUtils');

const directoryPath = path.join(__dirname,'../dictionaries');
const parseCuisine = () => {
    const fileName = 'Cuisines.json';
    const data = FileUtils.loadFileContent(directoryPath,fileName);
    console.log('Max Number exclusive', data.content.length);
    const randomCuisine = data.content[CommonUtils.generateRandomNumber(data.content.length)];
    return randomCuisine;
}

const parseDishType = () => {
    const fileName = 'DishTypes.json';
    const data = FileUtils.loadFileContent(directoryPath,fileName);
    console.log('Max Number exclusive', data.content.length);
    const randomDishType = data.content[CommonUtils.generateRandomNumber(data.content.length)];
    return randomDishType; 
}

module.exports = {
    parseCuisine,
    parseDishType,
}