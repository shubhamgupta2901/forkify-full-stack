const fs = require('fs');
const path = require('path');
const util = require('util');
require('../db/mongoose');
const Recipe = require('../db/models/recipeModel');
const Publisher = require('../db/models/publisherModel');

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
}

const readFile = util.promisify(fs.readFile);
const readRecipesFromJson= async ()=> {
    try {
        const filePath = path.join(__dirname,'./clean_db.json');
        const dataBuffer = await readFile(filePath);
        const dataJSON = dataBuffer.toString();
        const dataObj =  JSON.parse(dataJSON);
        return dataObj;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const attemptSeeding = async () => {
    try {
        const recipeJson = await readRecipesFromJson();
        const recipes = recipeJson.recipes;
        asyncForEach(recipes,async (recipe)=>{
            let publisher;
            publisher = await Publisher.findOne({name: recipe.source});
            if(!publisher){
                publisher = await new Publisher({name:recipe.source}).save();
                console.log(`Publisher created: ${publisher._id}`)
            }
            recipe.publisher = publisher._id;
            const recipeResponse  = await new Recipe(recipe).save();
            console.log(`Recipe created: ${recipeResponse._id}`)
        });
        
    } catch (error) {
        console.log(`Error while seeding!`,error);
    }
    
}
const performSeeding = async ()=> {
    await attemptSeeding();
    console.log('Seeding complete');
}

performSeeding();

