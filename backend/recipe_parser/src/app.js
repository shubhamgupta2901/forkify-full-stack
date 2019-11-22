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


const generateCleanRecipes = () => {
  const cleanRecipes = [];
  inputRecipes.forEach((recipe) =>{
    let cleanRecipe = {};
    Object.entries(dataCleaner).forEach(([key,value])=>{
      cleanRecipe = {...cleanRecipe, ...dataCleaner[key](recipe)}
    });
    cleanRecipes.push(cleanRecipe);
  });
  FileUtils.writeContentToFile('','clean_db.json',cleanRecipes);
}
// generateCleanRecipe(inputRecipes[0]);
generateCleanRecipes();