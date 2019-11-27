const Recipe = require('../db/models/recipeModel');

const getRecipes = async (query) => {
    
    const {search = undefined,page = 1, size = 10} = query;
    const mongoQuery = {};
    search? mongoQuery.$text = { $search: search}: null;
    try {
        const recipes = await Recipe.find(mongoQuery).skip((page-1)*size).limit(size).populate('publisher');
        return {recipes};
    } catch (error) {
        return {error};
    }
}

const getRecipeInformation = async (id) =>{
    try {
        const recipe = await Recipe.findOne({_id:id}).populate('publisher');
        if(!recipe){
            return {error: 'Recipe does not exist.'};
        }
        return recipe;
    } catch (error) {
        return {error: error.message};
    }
}

module.exports = {
    getRecipes,
    getRecipeInformation,
}