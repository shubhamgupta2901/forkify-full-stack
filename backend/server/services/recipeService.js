const recipeModel = require('../db/models/recipeModel');

const getRecipes = async (params) => {
    const mongoQuery = {};
    try {
        const recipes = await recipeModel.find(mongoQuery);
        return {recipes};
    } catch (error) {
        return {error}
    }
}

module.exports = {
    getRecipes
}