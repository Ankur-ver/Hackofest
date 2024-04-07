const {getUser}=require('../service/auth');
async function restrict(req,res,next){
    console.log("restrict")
    const userUid=req.cookies?.uid;
    if(!userUid) return res.redirect('/logint')
    const user=getUser(userUid);
if(!user) return res.redirect("/logint");
req.user=user;
next();

}
async function restricts(req,res,next){
    const userUid=req.cookies?.uid;
    if(!userUid) return res.redirect('/logins')
    const user=getUser(userUid);
if(!user) return res.redirect("/logins");
req.user=user;
next();

}
async function restrictt(req,res,next){
    const userUid=req.cookies?.uid;
    if(!userUid) return res.redirect('/logint')
    const user=getUser(userUid);
if(!user) return res.redirect("/logint");
req.user=user;
next();

}
module.exports={
    restrict,restrictt,restricts
}