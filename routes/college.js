const express=require('express');
const router=express.Router();
const {handleuserSignup,handledata,handleuserlogin}=require('../controller/user.js')