const express=require('express');
const route=express()
const { addProcess } = require('../controller/processController');


route.post('/addProcess',addProcess)
module.exports=route;