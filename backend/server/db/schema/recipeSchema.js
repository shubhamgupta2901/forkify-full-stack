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
    imageId: {
        type: String,
        required: true,
    },
    imageExtension:{
        type: String,
        required: true,
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
        ref: 'publishers',
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

recipeSchema.methods.toJSON = function () {
    const recipe = this;
    const recipeObject = recipe.toObject();
    recipeObject.imageUrl = `https://forkify-recipes.s3.ap-south-1.amazonaws.com/images/recipes/${recipeObject.imageId}.${recipeObject.imageExtension}`;
    delete recipeObject.aggregateBookmarks;
    delete recipeObject.imageId;
    delete recipeObject.imageExtension;
    delete recipeObject.createdAt;
    delete recipeObject.updatedAt;
    delete recipeObject.__v;

    if(recipeObject.publisher){
        delete recipeObject.publisher.createdAt;
        delete recipeObject.publisher.updatedAt;
        delete recipeObject.publisher.__v;
    }
    return recipeObject;
}
module.exports = recipeSchema;