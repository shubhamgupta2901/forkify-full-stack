const mongoose = require('mongoose');
const validator = require('validator');

let Schema = mongoose.Schema;
let ingredientSchema = new Schema({
    quantity:{
        type: Number,
        required: true,
    },
    unit:{
        type: String,
        required: false,
    },
    ingredient:{
        type: String,
        required: true,
    },
    originalIngredient:{
        type: String, 
        required: true,
    }
});

module.exports = ingredientSchema;