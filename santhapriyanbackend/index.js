var path = require("path")
var express = require("express")
var mdb = require("mongoose")
var app = express()
var users=require("./models/users")
var cors=require("cors")
var env=require('dotenv')

const portnumber = 3001;
env.config()
app.use(express.json())
app.use(cors())
mdb.connect(process.env.MONGO_URL).then(() => {
    console.log("process.env.MONGO_URL")
    console.log("connected to mongodb")
}).catch((err) => {
    console.log(err)
    console.log("check your connection string")
})

app.get('/', (req, res) => {
    res.send("welcome backend")
})
app.post('/signup',(req,res)=>{
    console.log(req.body);
   var {fname,lname,email,password}=req.body
   console.log(fname,lname,email,password);
   try{
    var newuser =new users(req.body)
    console.log(req.body.password);
    newuser.save()
    console.log("succesfully addeed user")
    res.send("user added successfully")
   
    
   }
   catch(err){ 
    console.log(err)    

   }
    
   
    
})
app.get('/json', (req, res) => {
    res.json({ server: "welcome to backend", url: "//localhost:", portnumber: portnumber })
})
app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/getsignup',async(req,res)=>{
    try{
        var allsignuprecords=await users.find()
        res.json(allsignuprecords)
        console.log("signup records are readed")

    }
    catch(err){
        
    
    console.log("cannot able to read the records");
    }
}) 
app.post('/login',async(req,res)=>{
    var {email,password}=req.body
    try{
        var existinguser=await users.findOne({email:email})
       if(existinguser) {
        if(existinguser.password!==password){
            res.json({message:"login not succesfull",isLoggedIn:false})
           
        }
       
        
        else{
            res.json({message :"login succssfull",isLoggedIn:true})
        }
    }
    else{
        res.json({message:"login failed",isLoggedIn:false})
       
        
        }
    }
     catch(err){

        console.log("cannot able to login")
    }


})
   

app.listen(portnumber, () => {
    
    console.log(`back  end conneted\n Url:http://localhost:${portnumber}`)
})
