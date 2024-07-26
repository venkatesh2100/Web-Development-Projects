const mongoose = require('mongoose');
const { MONGO_URL } = require('./config');

mongoose.connect(MONGO_URL);

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minLength : 3,
        maxLength : 30,
    },
    password : {
        type : String,
        required : true,
        minLength : 6
    },
    firstName : {
        type : String,
        required : true,    
        trim : true,
        maxLength : 30,
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 30,
    },
})

const accountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    balance : {
        type : Number,
        required : true
    } 
})

const User = mongoose.model("User",userSchema);
const Account = mongoose.model("Account",accountSchema);

module.exports =  {
    User,
    Account
}
