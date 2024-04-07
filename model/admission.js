const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Array,
    },
    dob: {
        type: String,
    },
    place_of_birth: {
        type: String,
    },
    religion: {
        type: String,
    },
    nationality: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    lastSchool: {
        type: String,
    },
    medium: {
        type: String,
    },
    standard: {
      type:String,
    },
    admission_standard: {
      type:String,
    },
    result: {
        type: String,
    },
    leaving_school: {
        type: String,
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    fphone: {
        type: Array
    },

})
const data=mongoose.model("data",UserSchema)
module.exports=data