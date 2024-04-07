const express = require('express');
const router = express.Router();
const path=require('path');
const data=require('../model/admission.js')
const multer=require('multer');
const storage=multer.diskStorage({
    destination(req,file,cb){
        cb(null,'images');

    },
    filename(req,file,cb){
        console.log(file)
        cb(null, Date.now()+ path.extname(file.originalname));
    }
})
const upload=multer({storage:storage})
router.post('/uploadFiles', upload.fields([
    { name: 'report', maxCount: 1 },
    { name: 'medical_certificate', maxCount: 1 },
    { name: 'aadhar', maxCount: 1 }
]), async(req, res) => {
  
    const formData = req.body;

    const reportFile = req.files['report'][0];
    const medicalCertificateFile = req.files['medical_certificate'][0];
    const aadharFile = req.files['aadhar'][0];
        try{
            const studentdata=req.body;
            const userdata=new data(studentdata);
            const saveddata=await userdata.save();
            console.log(saveddata)
            return res.redirect ("/dashboard");
        }catch(error){
          console.log(error)
        }
     
 
});
module.exports = router;