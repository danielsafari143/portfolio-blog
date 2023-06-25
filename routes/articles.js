const express = require('express');
const articles = require('../models/articles');
const jwt = require('jsonwebtoken');
const routes = express.Router();

routes.get('/articles' ,async (req , res) => {
    const article = await articles.find();
    res.json(article);
});

routes.post('/articles' ,async (req , res) => {
    //const bearer = req.headers['authorization'].split(' ');
    const bearToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IiF0dW1haW5pMjMiLCJlbWFpbCI6InR1bWFpbmltYWdhbmlrb0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6IlR1bWFpbmkgTWFnYW5pa28iLCJpYXQiOjE2ODc2NDU5NDN9.8rRQZkglpXnKDN4MuAHALgWSVcNBHYQSsDfX4XFA5Fo";
    jwt.verify(bearToken , "secretKey" , (err , data) => {
        res.json(data)
    })
})
module.exports = routes;