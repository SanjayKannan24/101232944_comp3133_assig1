const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required: [true , "Please enter the user name"],
        unique : [true , "username already exists"]
    },
    firstname : {
        type: String,
        required: [true , "Please enter the first name"]
    },
    lastname : {
        type: String,
        required: [true , "Please enter the last name"]
    },
    password : {
        type: String,
        required: [true , "Please enter the password"],
        minlength: 6,
        lowercase: true,
        uppercase: true,
        
    },
    email : {
        type: String,
        required: true,
        unique: [true , "This email already exists"],
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    type : {
        type: String,
        required: true,
    },
});


const User = mongoose.model("Users" , UserSchema);
module.exports = User;