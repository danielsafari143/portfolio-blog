const express = require('express');
const jwt = require('jsonwebtoken');
const user = require('../models/user');
const routes = express.Router();

routes.get('/user' , (req , res) => {
    jwt.sign(req.body , "secretKey" , (err , keyToken) => {
        res.json(keyToken);
    })
});

module.exports = routes;