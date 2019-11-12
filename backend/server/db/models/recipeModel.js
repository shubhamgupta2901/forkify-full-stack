const mongoose = require('mongoose');
const recipeSchema = require('../schema/recipeSchema');

const Recipe = mongoose.model('recipes',recipeSchema);
module.exports = Recipe;