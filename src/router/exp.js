var express = require("express")
var router = express.Router();

const users = [
    {
         username:"yao",
         password:"123456"
    },
    {
         username:"张三",
         password:"654321"
    }

]



router.get('/',function(req,res,next){
    res.render("index",{title:"Express"});
})

router.post("/login",(req,res)=>{
       const {username,password} = req.body 
       let longinSuccess = false
       console.log(username,password)
       users.forEach(item=>{
            if(item.username === username && item.password === password) 
            longinSuccess = true
       })
       if(longinSuccess){
           res.json({
               code:200,
               msg:"登陆成功"
           })
       }else{
             alert("登陆失败")
       }
})

module.express = router;