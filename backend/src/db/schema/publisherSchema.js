const mongoose = require('mongoose');
const validator = require('validator');

let Schema = mongoose.Schema;
let publisherSchema = new Schema({
    name: {
        type: String,
        required: false,
        trim: true,
        default: 'Forkify',
    },
    imageUrl: {
        type: String,
        required: false,
        validate: (value)=> validator.isURL(value),
    }
},{
    timestamps: true,
});

publisherSchema.pre('save', async function (next){
    let publisher = this;
    console.log('Mongoose middleware: pre publisher save');
    console.log(publisher);
    next();
})

module.exports = publisherSchema;