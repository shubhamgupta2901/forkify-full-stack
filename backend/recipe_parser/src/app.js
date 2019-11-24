const dataCleaner = require('./DataCleaner');
const inputRecipes = require('../assets/db.json');
const FileUtils = require('./utils/FileUtils');

// const getAllMethodsInDataCleaner = () => {
//   Object.entries(DataCleaner).forEach(([key,value])=> console.log(key));
// }

// const generateCleanRecipe =(recipe)=> {
//   // recipe.datePublished = null;
//   const cleanRecipe = {};
//   // Object.entries(dataCleaner).forEach(([key]) => {
//   //     cleanRecipe = {...cleanRecipe, ...dataCleaner[key](recipe)}
//   //     console.log(key);
//   // })
//   // console.log({ ...cleanRecipe});
//   const key = 'getTitleForRecipe';
//   cleanRecipe = {...cleanRecipe, ...dataCleaner[key](recipe)};
//   console.log({ ...cleanRecipe});
// }

// inputRecipes.forEach(recipe=> generateCleanRecipe(recipe))


const generateCleanReadyInMinutes = () => {
  inputRecipes.forEach(recipe=>{
    const readyInMinutes = { prepTime: recipe.prepTime, cookTime: recipe.cookTime, ...dataCleaner.getReadyInMinutesForRecipe(recipe)};
    console.log(readyInMinutes);
  })
}

const generateCleanRecipe = (recipe) => {
  let cleanRecipe = {}
  Object.entries(dataCleaner).forEach(([key,value])=>{
      cleanRecipe = {...cleanRecipe, ...dataCleaner[key](recipe)}
  })
  // const cleanRecipe = dataCleaner['getTitleForRecipe'](recipe);
  console.log(cleanRecipe); 
}


console.log(FileUtils.getJSONSize('json'));

/**
* Read recipes from all the files in json directory.
* For each recipe, perform all the functions written in DataCleaner to clean the recipe json,
* Push all the clean recipes in an array and write in a file to seed.
 */
const generateCleanRecipes = () => {
  const filesContent = FileUtils.getAllFilesData('json');
  const cleanRecipes = [];
  filesContent.forEach(file=>{
    const recipes = file.content.recipes;
    recipes.forEach(recipe=>{
      let cleanRecipe = {};
      Object.entries(dataCleaner).forEach(([key,value])=>{
        cleanRecipe = {...cleanRecipe,...dataCleaner[key](recipe)}
      });
      cleanRecipes.push(cleanRecipe);
    })
  })
  FileUtils.writeContentToFile('','clean_db.json',{size: cleanRecipes.length, recipes: cleanRecipes });
}

generateCleanRecipes();




