const mongoose = require('mongoose');
const {model , Schema} = mongoose;

const articleSchema = new Schema({
    title : {type : String , required : true},
    body : {type : String , required : true},
    date : {type : Date , default : Date.now()},
    author : {type : String , required : true}
});

module.exports = model("articles" , articleSchema);