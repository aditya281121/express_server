const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
        minLength:4,//Validation
        maxLength:20,
    },
    lastName: {
        type:String,
    },
    emailId:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        trim:true,
    },
    password: {
        type:String,
        required:true,
    },
    age: {
        type:Number,
        min: 18,
    },
    gender: {
        type:String,
        validate(value){ //Custom validator- works only in signup not in update
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        }
    },
    photoUrl: {
        type:String,
        default: "https://www.pngmart.com/files/23/Profile-PNG-Photo.png",
    },
    about: {
        type:String,
        default: "This is a default about of the user!",
    },
    skills: {
        type: [String],
    }
},
    {
        timestamps: true, //createdAt and updatedAt fields will be added automatically
    }
)

const User = mongoose.model("User", userSchema)

module.exports = User;
