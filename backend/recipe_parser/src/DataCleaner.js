const moment = require('moment');
const path = require('path');
const FileUtils = require('./utils/FileUtils');
const CommonUtils = require('./utils/CommonUtils');

const dictionaryDirPath = path.join(__dirname,'../dictionaries');

const getTitleForRecipe = title => {
    title = title.replace("&amp;", "&");
    return { title };
}

const getImageIdForRecipe = imageId => imageId;

/**
 * If no recipeYield return 2 other wise find the first word in string which is a number 
 * @param {*} recipeYield 
 */
const getServingsForRecipe = recipeYield => {
    const servings = !recipeYield ? 2 : recipeYield.split(' ').find(el => !isNaN(el));
    return { servings }
}

const getDatePublishedForRecipe = datePublished => {
    datePublished = moment(datePublished).format();
    return { datePublished };
}

const reduceToMinutes = (timeStr) => {
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

const getReadyInMinutesForRecipe = (prepTime, cookTime) =>{  
    if(!cookTime && !prepTime){
        cookTime = '15M'
        prepTime = '15M'
    }else if(!cookTime){
        cookTime = '0M';
    }else{
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
}

const getSourceUrlForRecipe = url => ({sourceUrl: url});

const getSourceForRecipe = source => ({source});

/**
 * Send array of cuisines.
 */
const getCusineForRecipe = () => {
    const fileName = 'Cuisines.json';
    const data = FileUtils.loadFileContent(dictionaryDirPath,fileName);
    console.log('Max Number exclusive', data.content.length);
    const randomCuisines = [data.content[CommonUtils.generateRandomNumber(data.content.length)]];
    return {cuisines : randomCuisines};
}

const getDishTypeForRecipe = () => {
    const fileName = 'DishTypes.json';
    const data = FileUtils.loadFileContent(dictionaryDirPath,fileName);
    console.log('Max Number exclusive', data.content.length);
    const randomDishTypes = [data.content[CommonUtils.generateRandomNumber(data.content.length)]];
    return {dishTypes: randomDishTypes}; 
}

const getIngredientsForRecipe = () => {
    const fileName = 'Ingredients.json';
    const data = FileUtils.loadFileContent(dictionaryDirPath,fileName);
    const randomIngredientArray = data.content[CommonUtils.generateRandomNumber(data.content.length)];
    return {Ingredients: randomIngredientArray};
}



module.exports = {
    getTitleForRecipe,
    getImageIdForRecipe,
    getServingsForRecipe,
    getReadyInMinutesForRecipe,
    getSourceUrlForRecipe,
    getSourceForRecipe,
    getDatePublishedForRecipe,
    getCusineForRecipe,
    getDishTypeForRecipe,
    getIngredientsForRecipe,
}