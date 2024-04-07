const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String,},
    email: { type: String, },
    password: { type: String,},
    cpassword:{
        type:String,
    }
});

const user=mongoose.model('user',userSchema);
module.exports= user