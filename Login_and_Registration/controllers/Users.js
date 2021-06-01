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
            form_errors: req.session.form_errors != undefined ? req.session.form_errors : undefined,    
        });
        req.session.destroy();
    }

    create(req, res){
        let form_error_array = registrationValidation(req.body, validateEmail);

        if(form_error_array.length > 0){
            req.session.form_errors = formError("register", form_error_array);
            res.redirect("/");
            return false;
        }

        bcrypt.hash(req.body.password, saltRounds, async(err, hash) => {
            //check if email is already exist
            req.body.password = hash;
            userModel.findByEmail(req.body.email, (err, user) => {
                
                let message;
                if(user.length > 0){
                    message = messageHandler("error", "Error, email already exist in the database");
                }
                else{
                    let user_data = userModel.userData(req.body);
                    let create_user = userModel.create(user_data);
                    message = messageHandler("success", "User has been registered!");
                }
                req.session.message = message;
                res.redirect("/");
            });
        });
    }

    login_process(req, res){
        let form_error_array = loginValidation(req.body, validateEmail);

        if(form_error_array.length > 0){
            req.session.form_errors = formError("login", form_error_array);
            res.redirect("/");
            return false;
        }

        userModel.findByEmail(req.body.email, (err, user) => {
            if(user.length > 0){
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if(result){
                        console.log("credentials is correct");

                        req.session.user = user[0];
                        res.redirect("/welcome");
                    }
                    else{
                        req.session.form_errors = formError("login", ["Wrong Email or Password"]);
                        res.redirect("/");
                        return false;
                    }
                });
            }
            else{
                req.session.form_errors = formError("login", ["Wrong Email or Password"]);
                res.redirect("/");
            }               
        });
    }

    welcome(req, res){
        res.render("welcome", { user: req.session.user });_
    }

    logoff(req, res){
        req.session.destroy();
        res.redirect("/");
    }
}

module.expors = new Users();