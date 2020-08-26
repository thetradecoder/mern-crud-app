const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    heading:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    startdate:{
        type:Date,
        required:true,
    },
    deadline:{
        type:Date,
        required:true
    },
    editpassword:{
        type:String,
        required:true
    }
}, {timestamps:true});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;