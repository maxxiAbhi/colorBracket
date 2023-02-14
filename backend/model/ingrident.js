const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingridentSchema = new Schema({
    items: {
        type: 'String',
        require: true
    },
    amount: {
        type: 'String',
        require: true
    },
    unit: {
        type: 'String',
        require: true
    },
    recipe_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'recipes'
    }
});

const Ingrident = mongoose.model('ingrident', ingridentSchema);

module.exports = Ingrident;