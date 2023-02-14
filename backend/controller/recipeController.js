const Recipe = require("../model/recipe");
const User = require("../model/users");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
exports.addRecipe = async (req, res) => {
  const { name, discription, image, userid } = req.body;
  if (!name || !discription  || !userid) {
    res.status(400).json({ message: 'plz fill all filed' })
  } else {
    try {
      const createRecipe = new Recipe({ name, description:discription, image:req.files[0].filename, creator_id: userid });
      const addRecipe = await createRecipe.save();
      if (addRecipe) {
        res.status(200).json({ message: 'recipe added successfully' })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

exports.getAllRecipe = async (req, res) => {
  try {
    const recipeData = await Recipe.aggregate([
      {
        $lookup:
        {
          from: "users",
          localField: "creator_id",
          foreignField: "_id",
          as: "author"
        }
      }
    ])

    // console.log(recipeData)
    res.status(200).send({ data: recipeData })
  } catch (error) {
    console.log(error)
  }
}


exports.getRecipeById = async (req, res) => {
  const { resid } = req.body
  console.log(resid)
  try {
    const recipeData = await Recipe.aggregate([
      { $match: { '_id': ObjectId(resid) } },
      {
        $lookup:
        {
          from: "users",
          localField: "creator_id",
          foreignField: "_id",
          as: "author"
        }
      }, {
        $lookup:
        {
          from: "ingridents",
          localField: "_id",
          foreignField: "recipe_id",
          as: "ingrident"
        }
      }, {
        $lookup:
        {
          from: "processes",
          localField: "_id",
          foreignField: "recipe_id",
          as: "process"
        }
      }
    ])

    // console.log(recipeData)
    res.status(200).send({ data: recipeData })
  } catch (error) {
    console.log(error)
  }
}