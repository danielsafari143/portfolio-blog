const express = require('express');
const {body , validationResult , matchedData} = require('express-validator');
const bcrypt = require('bcrypt');
const userModel = require('../models/user');
const router = express.Router();


router.post('/user' , body('password').isLength({min : 5}).escape(),
 body('username').isLength({min:3 , max:20}).escape() , 
 body('email').isEmail().escape() ,async (req , res ) => {
    const result = validationResult(req);

    if(result.isEmpty()){
        const {password , username , email} = matchedData(req);
        bcrypt.hash(password , 10 , async (err , hashedPassword) => {
            if(err){
                return res.status(404);
            };
            const user = new userModel ({
                username : username,
                email : email,
                password : hashedPassword
            });
            await user.save();
            return res.json({massage : "Created"}).statusCode(200);
        });
        return res.status(200)
    };

    res.json({ errors: result.array()}).status(400);
})

module.exports = router;