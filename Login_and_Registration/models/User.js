const dbConnection = require('../config');

class User{
    constructor(){
        this.user = {};
    }
    
    userData(user){
        let data = {
            first_name: user.fname,
            last_name: user.lname,
            email: user.email,
            password: user.password,
        };
        this.user = data;
        return this.user;
    }

    create(newUser){
        return dbConnection.query(
            "INSERT INTO user (first_name, last_name, email, password) VALUES (?,?,?,?)",
            [newUser.first_name, newUser.last_name, newUser.email, newUser.password],
            (err, res) => {
                if(err){
                    return err;
                }
                else{
                    return res;
                }
            }
        );
    }

    findByEmail(email, result){
        dbConnection.query("SELECT * FROM user WHERE email = ?", email, (err, res) => {
            if(err){
                result(null, err);
            }
            else{
                result(null, ress);
            }
        });
    }
}

module.exports = new User();