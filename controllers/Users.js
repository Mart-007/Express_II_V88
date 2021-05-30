const User =  require('../models/User');
const user = new User();

class Users{
    index(req, res){
        res.render('index.ejs');
    }
    fetch_users(){
        user.fetch_users( (err, result) => {
            if(err){
                console.log('Error fetching users', err);
                return;
            }
            res.render('users.ejs', {users: results});
        });
    }
}

module.exports = Users;