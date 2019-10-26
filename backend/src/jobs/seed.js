const fs = require('fs');
const path = require('path');
require('../db/mongoose');
const Recipe = require('../models/recipe');

const readRecipeFromTemplate = ()=> {
    const filePath = path.join(__dirname,'./recipeTemplate.json');
    console.log(`Attempting to read file: ${filePath}`);
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        const dataObj =  JSON.parse(dataJSON);
        return dataObj;
    } catch (error) {
        console.log(error+'. Returning empty Array.');
        return [];
    }
}

const attemptSeeding = () => {
    const recipe = readRecipeFromTemplate();
    new Recipe(recipe).save()
        .then(response=> console.log(response))
        .catch(error=> console.log(error.message));
}

attemptSeeding();
