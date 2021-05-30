const express = require('express');
const app = express();
const DB = require('./config');
const Router = require('./routes');

app.use(express.urlencoded({extends: true}));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.get('/', Router);

app.listen(7000, () => {
    console.log("Server running on port 7000");
})