const FileUtils = require('./utils/FileUtils');
const IngredientParser  = require('./ingredientParser'); 

const data = FileUtils.loadFileContent('','db.json',false);
const recipes = data.content;

const ingredientsParser = (recipe) => {
    const extraIngredients = recipe.ingredients.map(ingredient => {
        let extraIngredient = {};
        let originalIngredient = ingredient;
        ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");
        try {
            extraIngredient =IngredientParser.parse(ingredient);
        } catch (error) {
            console.log(`Error Parsing ingredient ${ingredient}. Error: ${error.message}`)
        }

        return{
            ...extraIngredient,
            originalIngredient
        }
    });
    recipe.ingredients = extraIngredients;
    return recipe;
}


const startParsing = () => {
    const ingredientsDictionary = [];
    const data = FileUtils.loadFileContent('','db.json',false);
    const recipes = data.content;
    const outputRecipes = recipes.map(recipe=>ingredientsParser(recipe));
    const ingredients= outputRecipes.map(recipe=> recipe.ingredients);
    FileUtils.writeContentToFile('','Ingredients.json',ingredients);
}

console.log(startParsing());
