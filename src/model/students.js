//her we define our Schema 

const mongoose = require('mongoose');

const validator = require('validator');

const studentSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        minlength:3
    },

    email:{
        type:String,
        required: true,
        unique:[true, "Email id Alreday Exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
              }
        }
    },

    phone:{
        type:Number,
        required: true,
        minlength:10,
        maxlength:10,
    },

    address:{
        type:String,
        required:true,

    }
})

//now we make a collection

const Student = new mongoose.model('Student', studentSchema);



//now we export this collection

module.exports = Student;