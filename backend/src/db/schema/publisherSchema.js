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
    avatarUrl: {
        type: String,
        required: false,
        
    }
})