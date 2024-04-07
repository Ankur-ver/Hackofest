const express=require('express');
const fs=require('fs');
const path=require('path');
const router=require('./routes/user.js')
const uploadRouter = require('./routes/upload.js')
const {mongodbconnect}=require('./connection')
const {restrict}=require('./middleware/auth.js')
const {restricts}=require('./middleware/auth.js')
const {restrictt}=require('./middleware/auth.js')
const bodyparser=require('body-parser')
const app=express();
const schooldata=require('./model/facilities.js');
const data = require('./model/admission.js');
app.use(express.urlencoded({extended:false}))
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

app.use(express.json());
app.set('view engine','ejs')
app.set('views',path.resolve('./view'))

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});
app.use(express.static(path.join(__dirname, 'view','images')));
app.use(express.static(path.join(__dirname, 'view','dashboard')));
app.use(express.static('view'));
app.use(express.static('images'));
app.use(express.static(path.join(__dirname, 'view','school_profile')));
app.use(express.static('school_profile'));
app.use(express.static('dashboard'));
mongodbconnect('mongodb://127.0.0.1:27017/practice').then(()=>{
    console.log('mongodb connected')
})


app.get('/',(req,res)=>{
    res.render('head')
})
app.get('/data',(req,res)=>{
    res.render('admission')
})
app.get('/services',(req,res)=>{
    res.render('services')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/signups',(req,res)=>{
    res.render('signups');
})
app.get('/signupt',(req,res)=>{
    res.render('signupt');
})
app.get('/logins',(req,res)=>{
    res.render('logins');
})
app.get('/logint',(req,res)=>{
    res.render('logint');
})

app.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})
app.get('/datesheet2',(req,res)=>{
    res.render('datesheet2')
})
app.get('/datesheet1',(req,res)=>{
    res.render('datesheet1')
})
app.get('/datesheet3',(req,res)=>{
    res.render('datesheet3')
})
app.get('/start',(req,res)=>{
    res.render('start')
})
app.get('/homework-section',(req,res)=>{
    res.render('homework-section')
})
app.get('/student_profile',(req,res)=>{
    res.render('student_profile')
})
app.get('/fee',(req,res)=>{
    res.render('fees')
})
app.get('/library',(req,res)=>{
    res.render('library')
})
app.get('/syllabus',(req,res)=>{
    res.render('syllabus')
})


app.get('/college_data',restrict,async(req,res)=>{
   try{
        const Data=await schooldata.find({})
        console.log(Data)
        Data.forEach(item => {
            console.log(item.ID); 
        });
        const Datalast=Data.length-1;
        const Datal=Data[Datalast];
        console.log(Datal)
        res.render('school_profile',{
            Data:Datal,
        })

   }catch(error){
       console.log(error)
   }
 
})
app.get('/college_data2',async(req,res)=>{
    try{
         const Data=await schooldata.find({})
         console.log(Data)
         Data.forEach(item => {
             console.log(item.ID); 
         });
         const Datalast=Data.length-1;
         const Datal=Data[Datalast];
         console.log(Datal)
         res.render('school_profile',{
             Data:Datal,
         })
 
    }catch(error){
        console.log(error)
    }
  
 })


app.use('/upload', uploadRouter);
app.use('/user',router)
app.use('/college',router)

app.listen(3000,()=>{
    console.log('server starts');
})