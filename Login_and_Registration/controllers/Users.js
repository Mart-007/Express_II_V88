const userModel = require("../models/User")
const { registrationValidation, loginValidation } = require("../helpers/validation");
const { validateEmail, formError, messageHandler } = require("../helpers/utilities");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class Users {
    constructor() {}
    
    index(req, res){
        res.render('index', {
            message: req.session.message != undefined ? req.session.message : undefined,
            
        })
    }
}