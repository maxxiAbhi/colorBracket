const route=require('express')();
const { addIngredient } = require('../controller/ingridentController');

route.post('/addIngredient',addIngredient)
module.exports=route;