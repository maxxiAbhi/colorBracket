const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    name: {
        type: 'String',
        require: true
    },
    userId: {
        type: 'String',
        require: true
    },
    password: {
        type: 'String',
        require: true
    }
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

const User = mongoose.model('users', userSchema);

module.exports = User;