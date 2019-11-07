const mongoose = require('mongoose');
const validator = require('validator');
const ingredientSchema = require('./ingredientSchema');
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
        // validate using regex, type is 15 digit alphanumeric string prefixed by image_ (image_5da9ba113ca4405f3ceb4df1)
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
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User',
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
},{
    timestamps: true
});

module.exports = recipeSchema;