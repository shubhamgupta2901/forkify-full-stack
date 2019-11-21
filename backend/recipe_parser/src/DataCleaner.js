const moment = require('moment');
const path = require('path');
const FileUtils = require('./utils/FileUtils');
const CommonUtils = require('./utils/CommonUtils');

const dictionaryDirPath = path.join(__dirname,'./dictionaries');
let dataCleaner = {};
/**
 * TODO: "Za\'atar" , "Capers &amp; Green Olives"
 * 
 */
dataCleaner.getTitleForRecipe = recipe => {
    // return recipe.name ? {title: recipe.name.unescape().replace("&amp;", "&")} : {};
    try {
        if(!recipe.name)
        return {};
    let title = recipe.name.replace("&amp;", "&");
    return {title};
    } catch (error) {
        console.log(`Error in ${getTitleForRecipe.name} for recipe`, JSON.stringify(recipe));
        console.log(error);
    }
}

dataCleaner.getImageIdForRecipe = recipe => {
    try {
        return {imageId: recipe.imageId};
    } catch (error) {
        console.log(`Error in ${getImageIdForRecipe.name} for recipe`, JSON.stringify(recipe));
        console.log(error);
    }
}

/**
 * If no recipeYield return 2 other wise find the first word in string which is a number 
 * @param {*} recipeYield 
 */
dataCleaner.getServingsForRecipe = (recipe) => {
    try {
        let servings;
        if(!recipe.recipeYield)
            servings = 2;
        else {
            let num = recipe.recipeYield.split(' ').find(el=> !isNaN(el));
            servings = num ? parseInt(num) : 2; 
        }
        return {servings};
    } catch (error) {
        console.log(`Error in ${getServingsForRecipe.name} for recipe`, JSON.stringify(recipe));
        console.log(error);
    }
}

dataCleaner.getDatePublishedForRecipe = recipe => {
    try {
        return { datePublished : recipe.datePublished ? moment(recipe.datePublished).format() : moment().format() }
    } catch (error) {
        console.log(`Error in ${getDatePublishedForRecipe.name} for recipe`, JSON.stringify(recipe));
        console.log(error);
    }
}


reduceToMinutes = (timeStr) => {
    let lastChar = timeStr[timeStr.length-1];
    let multiplier = 1;
    switch(lastChar){
        case 'S': 
            multiplier = (1/60); 
            break;
        case 'M': 
            multiplier = 1; 
            break;
        case 'H': 
            multiplier = 1*60; 
            break;
    }
    return  timeStr.substring(0,timeStr.length-1) * multiplier;
}

dataCleaner.getReadyInMinutesForRecipe = (recipe) =>{  

    try {
        let prepTime = recipe.prepTime && recipe.prepTime.substring(2);
        let cookTime = recipe.cookTime && recipe.cookTime.substring(2);

        if(!cookTime && !prepTime){
            cookTime = '15M'
            prepTime = '15M'
        }else if(!cookTime){
            cookTime = '0M';
        }else if(!prepTime){
            prepTime = '0M';
        }

        if(!isNaN(prepTime.substring(0,prepTime.length-1))){
            prepTime = reduceToMinutes(prepTime);
        }
        else {
            const indexOfHour = prepTime.indexOf('H');
            const convertedHours = reduceToMinutes(prepTime.substring(0,indexOfHour+1));
            const convertedMinutes = reduceToMinutes(prepTime.substring(indexOfHour+1));
            prepTime = convertedHours + convertedMinutes;
            // prepTime = prepTime.substring(0,prepTime.length-1);
        }

        if(!isNaN(cookTime.substring(0,cookTime.length-1))){
            cookTime = reduceToMinutes(cookTime);
        }
        else {
            const indexOfHour = cookTime.indexOf('H');
            const convertedHours = reduceToMinutes(cookTime.substring(0,indexOfHour+1));
            const convertedMinutes = reduceToMinutes(cookTime.substring(indexOfHour+1));
            cookTime = convertedHours + convertedMinutes;
            // prepTime = prepTime.substring(0,prepTime.length-1);
        }
        const readyInMinutes = cookTime+prepTime;
        return {readyInMinutes};
    } catch (error) {
        console.log(`Error in ${getReadyInMinutesForRecipe.name} for recipe`, JSON.stringify(recipe));
        console.log(error);
    }
}

dataCleaner.getSourceUrlForRecipe = recipe => {
    try {
        return recipe.url ? {sourceUrl: recipe.url} : {};
    } catch (error) {
        console.log(`Error in ${getSourceUrlForRecipe.name} for recipe`, JSON.stringify(recipe));
        console.log(error);
    }
};

dataCleaner.getSourceForRecipe = recipe => {
    try {
        return recipe.source ? {source: recipe.source} : {};
    } catch (error) {
        console.log(`Error in ${getSourceForRecipe.name} for recipe`, JSON.stringify(recipe));
        console.log(error);
    }
};

/**
 * Send array of cuisines.
 */
dataCleaner.getCusineForRecipe = recipe => {
    try {
        const fileName = 'Cuisines.json';
        const data = FileUtils.loadFileContent(dictionaryDirPath,fileName);
        const randomCuisines = [data.content[CommonUtils.generateRandomNumber(data.content.length)]];
        return {cuisines : randomCuisines};
    } catch (error) {
        console.log(`Error in ${getCusineForRecipe.name} for recipe`, JSON.stringify(recipe));
        console.log(error);
    }
}

dataCleaner.getDishTypeForRecipe = recipe => {
    try {
        const fileName = 'DishTypes.json';
        const data = FileUtils.loadFileContent(dictionaryDirPath,fileName);
        const randomDishTypes = [data.content[CommonUtils.generateRandomNumber(data.content.length)]];
        return {dishTypes: randomDishTypes}; 
    } catch (error) {
        console.log(`Error in ${getDishTypeForRecipe.name} for recipe`, JSON.stringify(recipe));
        console.log(error);
    }
}

dataCleaner.getIngredientsForRecipe = recipe => {
    try {
        const fileName = 'Ingredients.json';
        const data = FileUtils.loadFileContent(dictionaryDirPath,fileName);
        const randomIngredientArray = data.content[CommonUtils.generateRandomNumber(data.content.length)];
        return {Ingredients: randomIngredientArray};
    } catch (error) {
        console.log(`Error in ${getIngredientsForRecipe.name} for recipe`, JSON.stringify(recipe));
        console.log(error);
    }
}


// module.exports = {
//     getTitleForRecipe: dataCleaner.getTitleForRecipe,
//     getImageIdForRecipe,
//     getServingsForRecipe,
//     getReadyInMinutesForRecipe,
//     getSourceUrlForRecipe,
//     getSourceForRecipe,
//     getDatePublishedForRecipe,
//     getCusineForRecipe,
//     getDishTypeForRecipe,
//     getIngredientsForRecipe,
// }

module.exports = dataCleaner;