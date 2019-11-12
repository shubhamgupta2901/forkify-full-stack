const FileUtils = require('./FileUtils');
const path = require('path');

// const recipes = FileUtils.loadFileContent('./assets/seedingprospects/mega_recipes.json');
// console.log(recipes.length);
const subset = {};

recipes.forEach(recipe => {
    if(!(recipe.source in subset)){
        subset[recipe.source] = [];
    }
    subset[recipe.source].push(recipe);
});

Object.entries(subset).forEach(([key,value])=>{
    FileUtils.writeRecipesToFile({size: value.length, recipes:value},key);
})