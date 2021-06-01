//don't forget to export this module
const mysql =  require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhots',
    user: 'root',
    paswword: 'root',
    database: 'login_reg',
});

dbConnection.connect((err) => {
    if(err) throw err;
    console.log("Congrats! You are successfully connected to the database!");
});

module.exports = dbConnection;