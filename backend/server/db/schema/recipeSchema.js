const mongoose = require('mongoose');
const validator = require('validator');
const ingredientSchema = require('./ingredientSchema');
let Schema = mongoose.Schema;
let recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: false,
        trim: true,
        validate: (value) => validator.isURL(value),
    },
    servings: {
        type: Number,
        required: false,
        default: 2,
    },
    readyInMinutes: {
        type: Number,
        required: false,
        default: 15,
    },
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Publisher',
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
        required: false,
        default: Date.now(),
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
    ingredients: {
        type: [ingredientSchema],
        required: true,
        default: [],
    }
},{
    timestamps: true
});

module.exports = recipeSchema;