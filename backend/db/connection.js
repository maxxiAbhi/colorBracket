const mongoose = require('mongoose');
const connection = async () => {
    console.log('try to connect');
     mongoose.set("strictQuery", false);
    const res = await mongoose.connect(`mongodb+srv://mernproject:1234@cluster0.ohxicvz.mongodb.net/reipiBook?retryWrites=true&w=majority`)
    if (res) {
        console.log('db connection established')
    }
}
connection();
module.exports = connection;

