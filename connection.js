const mongoose=require('mongoose')
const mongodbconnect=async function(url){
   return  mongoose.connect(url)
}
module.exports={mongodbconnect};