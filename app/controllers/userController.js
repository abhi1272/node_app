const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('../libs/timeLib');
const response = require('../libs/responseLib');
const logger = require('../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib');
const check = require('../libs/checkLib');
const email = require('../email/mail');

/* Models */
const User = require('../models/User');

// start user signup function 

let signUpFunction = async (req, res) => {
  
    let newUser = new User(req.body);

    try{
        let token = await newUser.generateAuthToken();
        await newUser.save();
        await email.sendMail(newUser.email,newUser.firstName);
        logger.info('You are successfully registered','userController: signup',1);
        let apiResponse = response.generate(false,'You are successfully registered',200,{newUser,token});
        res.send(apiResponse);
        

    }
    catch(e){
        let apiResponse = response.generate(true,e,500,null);
        res.status('500').send(apiResponse);
    }

};// end user signup function 

// start of login function 
let loginFunction = async (req, res) => {
    console.log('login called',req.body);
    // if(check.isEmpty(req.body.email)){
    //     throw Error('Enter email id')
    // }
    // if(check.isEmpty(req.body.password)){
    //     throw Error('Enter password...')
    // }

    try{
        let user = await User.findByCredentials(req.body.email,req.body.password);
        const token = await user.generateAuthToken();
        let apiResponse = response.generate(false,'You are successfully loggedin',200,{user,token});
        res.send(apiResponse);
    }
    catch(e){
        res.status('500').send(e);
    }
};


// end of the login function 


let logout = async (req, res) => {

    try{
        req.loggedInUser.tokens = req.loggedInUser.tokens.filter((token)=>{
            return token.token !== req.token;
        });
        await req.loggedInUser.save();
        res.status('200').send('successfully logout');
    }catch(e){
        res.status('501').send(e);
    }

}; // end of the logout function.

let getProfile = async (req,res) => {

    res.status('200').send(req.loggedInUser);
};

let updateProfile = async (req,res) => {

    let loggedInUser = req.loggedInUser;

    try {
        let result = await User.findByIdAndUpdate(loggedInUser._id,req.body,{new:true});
        res.send(result);

    }catch(e){
        res.status('500').send(e);
    }
};

module.exports = {

    signUpFunction: signUpFunction,
    loginFunction: loginFunction,
    logout: logout,
    getProfile:getProfile,
    updateProfile:updateProfile

};// end exports