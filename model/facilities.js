const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    organization:{
        type:String,
    },
    Responsible:{
        type:String,
    },
    Responsible2:{
        type:String,
    },
    phone:{
        type:Number,
    },
    Email:{
        type:String,
    },
    ID:{
        type:Number,
    },
    class:{
        type:String,
    },
    Select:{
        type:String,
    },
    Check:{
        type:String,
    },
    Check2:{
        type:String,
    },time:{
        type:String,
    },
    Check3:{
        type:String,
    },
    Check4:{
        type:String,
    }
})
const facility=mongoose.model("facility",userSchema)
module.exports=facility;