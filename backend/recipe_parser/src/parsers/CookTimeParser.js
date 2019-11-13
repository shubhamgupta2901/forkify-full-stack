const moment = require('moment');

const parseDatePublished = datePublished => {
    return moment(datePublished).format();
}

const reduceToMilliseconds = (timeStr) => {
    let lastChar = timeStr[timeStr.length -1];
    let multiplier = 1;
    switch(lastChar){
        case 'S': 
            multiplier = 1; 
            break;
        case 'M': 
            multiplier = 1*60; 
            break;
        case 'H': 
            multiplier = 1*60*60; 
            break;
    }
    return  timeStr.substring(0,timeStr.length-1) * multiplier;

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
const parseReadyInMinutes = recipe =>{
    let prepTime = recipe.prepTime.replace("PT",'');
    let cookTime = recipe.cookTime.replace("PT",'');
    
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
        const convertedHours = reduceToMilliseconds(cookTime.substring(0,indexOfHour+1));
        const convertedMinutes = reduceToMilliseconds(cookTime.substring(indexOfHour+1));
        cookTime = convertedHours + convertedMinutes;
        // prepTime = prepTime.substring(0,prepTime.length-1);
    }
    return cookTime+prepTime;
}

// recipes.forEach(recipe => {
//     //recipe.ingredients = parseIngredients(recipe.ingredients);
//     recipe.datePublished = parseDatePublished(recipe.datePublished);
//     recipe = parseReadyInMinutes(recipe);
// });

// const filteredRecipes = 
// recipes.filter(recipe=> {
//     // if(isNaN(recipe.cookTime))
//     //     return true;
//     // return false;
//     return true;
// })


// let resultRecipes = filteredRecipes.map(recipe=> ({
//     // ingredients : recipe.ingredients,
//     ...recipe
// }))


module.exports = {
    parseDatePublished,
    parseReadyInMinutes,
}
