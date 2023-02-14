const express=require('express');
const { addRecipe, getAllRecipe, getRecipeById } = require('../controller/recipeController');
const { userAuth } = require('../middleware/middleware');
const multer  = require('multer')
const route=express()
const path=require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'public/uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' +'ran'+Math.random() * 1000+'-'+file.originalname)
    }
  })
  const upload=multer({storage})
route.post('/addRecipe',upload.array('image'),addRecipe)
route.get('/getAllRecipe',userAuth,getAllRecipe)
route.post('/getRecipeById',userAuth,getRecipeById)

module.exports=route;