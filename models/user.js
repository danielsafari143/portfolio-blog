const mongoose = require('mongoose');
const {model , Schema} = mongoose;

const userChema = new Schema({
    username : {type: String , required : true} , 
    email : {type : String , required : true},
    password : {type : String , required : true},
});

module.exports = model("user" , userChema);