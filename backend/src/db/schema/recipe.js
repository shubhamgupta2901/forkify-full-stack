const mongoose = require('mongoose');
const validator = require('validator');
const ingredientSchema = require('./ingredient');
let Schema = mongoose.Schema;
let recipeSchema = new Schema({
    recipeId:{
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: false,
        trim: true,
        validate: (value) => validator.isURL(value),
    },
    imageId: {
        type: String,
        required: true,
        trim: true,
        // validate using regex, type is 15 digit alphanumeric string prefixed by image_ (image_532098dsfalasdf)
    },
    imageType: {
        type: String,
        required: true,
        trim: true,
    },
    servings: {
        type: Number,
        required: true,
    },
    readyInMinutes: {
        type: Number,
        required: true,
    },
    sourceName: {
        type: String,
        required: true,
    },
    sourceUrl: {
        type: String,
        required: true,
        trim: true,
        validate: (value) => validator.isURL(value),
    },
    aggregateBookmarks: {
        type: Number,
        required: false,
        default: 0,
    },
    datePublished: {
        type: Date,
        required: true,
    },
    cuisines: {
        type: [String],
        required: false,
        default: [],
    },
    dishTypes: {
        type: [String],
        required: false,
        default: [],
    },
    extraIngredients: {
        type: [ingredientSchema],
        required: false,
        default: [],
    }
})

module.exports = recipeSchema;