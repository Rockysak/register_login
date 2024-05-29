const express=require('express');

const reguser = require('../controllers/usercontroller');

const routes = express.Router();

routes.post('/generateotp',reguser);

module.exports=routes;