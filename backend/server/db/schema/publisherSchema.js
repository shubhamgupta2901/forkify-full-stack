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
// publisherSchema.virtual('recipes',{
//     ref:'recipes',
//     localField: '_id',
//     foreignField: 'publisher',
// })

// publisherSchema.pre('save', async function (next){
//     let publisher = this;
//     console.log('Mongoose middleware: pre publisher save');
//     console.log(publisher);
//     next();
// })

// publisherSchema.methods.toJSON = function () {
//     const publisher = this;
//     const publisherObject = publisher.toObject();
//     delete publisherObject.createdAt;
//     delete publisherObject.updatedAt;
//     delete publisherObject.__v;
//     return publisherObject;
// }

module.exports = publisherSchema;