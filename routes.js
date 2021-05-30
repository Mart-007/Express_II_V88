const express = require('express');
const Router = express.Router();
const Users = require('./controllers/Users');
const UserController = new Users();

Router.get('/', UserController.index);
Router.get('/users', UserController.fetch_users);

module.exports = Router;