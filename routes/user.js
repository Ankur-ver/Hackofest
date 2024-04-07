const express=require('express');
const router=express.Router();
const {handleuserSignup,handledata,handleuserlogin,handlecollegedata,handleschoollogin,handleschoolSignup}=require('../controller/user.js')

router.post('/',handleuserSignup,(req,res)=>{
   return res.render('index')
})
router.post('/school',handleschoolSignup,(req,res)=>{
   return res.render('index')
})
router.post('/data',handledata,(req,res)=>{
   return res.render('index')
})
router.post('/logins',handleuserlogin,(req,res)=>{
   return res.render('dashboard')
})
router.post('/logint',handleschoollogin,(req,res)=>{
   return res.render('college_form')
})
router.post('/college_data',handlecollegedata,(req,res)=>{
   res.render('school_profile')
})


module.exports=router