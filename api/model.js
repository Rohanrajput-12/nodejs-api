const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    First_Name: String,
    Last_Name: String,
    Email_ID:String,
    Phone_No:Number,
    Image:String
});

module.exports = mongoose.model('User', UserSchema);