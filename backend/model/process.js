const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const processSchema = new Schema({
    steps: {
        type: 'String',
        require: true
    },
    recipe_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'recipes'
    }
});

const RecProcess = mongoose.model('process', processSchema);

module.exports = RecProcess;