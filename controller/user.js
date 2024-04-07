const user=require('../model/user.js');
const data=require('../model/admission.js')
const collegeData=require('../model/facilities.js')
const {setUser}=require('../service/auth')

async function handleuserSignup(req, res) {
    try{
        const studentdata=req.body;
        const userdata=new user(studentdata);
        const saveddata=await userdata.save();
        console.log(saveddata)
        return res.render('admission');
    }catch(error){
      console.log(error)
    }
 
}
async function handleschoolSignup(req, res) {
  try{
      const collegedata=req.body;
      const userdata=new user(collegedata);
      const saveddata=await userdata.save();
      console.log(saveddata)
      return res.redirect('/');
  }catch(error){
    console.log(error)
  }

}

async function handledata(req,res){
    try{
        const studentdata=req.body;
        const userdata=new data(studentdata);
        const saveddata=await userdata.save();
        console.log(saveddata)
        return res.send ("<h1>Form has been submitted");
    }catch(error){
      console.log(error)
    }
 

}
async function handlecollegedata(req, res) {
  try {
      const studentData = req.body;
      const newCollegeData = new collegeData(studentData);
      const savedData = await newCollegeData.save();
      console.log(savedData);
      return res.redirect('/college_data2');
  } catch (error) {
      console.log(error);
      return res.status(500).send('An error occurred');
  }
}


async function handleuserlogin(req,res,next){
   const {username, email, password}=req.body;
   const User=await user.findOne({username:username,email:email,password:password})
  console.log(User)
  if(!User)
    return res.render("login",{error: "user not found"});
    const token=setUser(user)
    console.log(token)
    res.cookie("uid",token)
    return res.redirect('/dashboard');

}
async function handleschoollogin(req,res,next){

  const {username, email, password}=req.body;
  const User=await user.findOne({username:username,email:email,password:password})
 console.log(User)
 if(!User)
   return res.render("logint",{error: "user not found"});
   const token=setUser(user)
   console.log(token)
   res.cookie("uid",token)
  next()

}
module.exports={handleuserSignup,handleschoolSignup,handledata,handleuserlogin,handlecollegedata,handleschoollogin};