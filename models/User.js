// const { mainModule } = require("node:process");
const { DB } = require("../config");

class User{
    fetch_users(callback){
        const query =  DB.format(`SELECT * FROM users ORDER BY name DESC`);
        DB.query(query, (err, result) => {
            callback(err, results);
        });
    }
}
module.exports = User;