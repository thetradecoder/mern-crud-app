const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;


let userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:5,
        trim:true
    },
    email:{
        type: mongoose.SchemaTypes.Email,
        required:true,
        unique:true,
        trim:true,
        minlength:8
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
}, {timestamps:true});

const User = mongoose.model('TodoUser', userSchema);

module.exports =  User;


