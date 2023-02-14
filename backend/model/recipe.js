const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: 'String',
        require: true
    },
    description: {
        type: 'String',
        require: true
    },
    image: {
        type: 'String',
        require: true
    },
    creator_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
});

const Recipe = mongoose.model('recipes', recipeSchema);

module.exports = Recipe;