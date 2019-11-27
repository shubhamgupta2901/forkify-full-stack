const Recipe = require('../db/models/recipeModel');

const getRecipes = async (query) => {
    const {page = 1, size = 10} = query
    const mongoQuery = {};
    try {
        const recipes = await Recipe.find(mongoQuery).skip((page-1)*size).limit(size).populate('publisher');
        return {recipes};
    } catch (error) {
        return {error}
    }
}

module.exports = {
    getRecipes
}