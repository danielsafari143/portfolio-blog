const express = require('express');
const mongoose = require('mongoose');
const signUp = require('./routes/sign-up');
const article = require('./routes/articles');
const logIn = require('./routes/log-in');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/' , logIn);
app.use( "/blog" , signUp);
app.use('/blog' , article);

try{
    mongoose.connect('mongodb://localhost:27017/mockBlog');
}catch(err){
    console.log(err)
}


app.listen(8000 , () => {
    console.log("The server is on")
})
