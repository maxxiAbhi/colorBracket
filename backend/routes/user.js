const express=require('express');
const { signup, signin } = require('../controller/userController');
const route=express();

route.post('/signup',signup);
route.post('/signin',signin);
module.exports=route;