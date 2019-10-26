const mongoose = require('mongoose');
const recipeSchema = require('../db/schema/recipe');

const Recipe = mongoose.model('recipes',recipeSchema);
module.exports = Recipe;