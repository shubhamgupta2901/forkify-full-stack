const mongoose = require('mongoose');
const validator = require('validator');

let Schema = mongoose.Schema;
let userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: (value)=> validator.isEmail(value),
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate: (value)=> {
            if(value.toLowerCase().included('password'))
                throw new Error('Your password can not contain the word password.')
            return true;
        }
    },
    tokens: [{
        token:{
            type: String,
            required: true,
        }
    }]
},{
    timestamps: true,
});

module.exports = userSchema;