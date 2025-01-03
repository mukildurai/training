var path = require("path")
var express = require("express")
var mdb = require("mongoose")
var app = express()
var users=require("./models/users")
const portnumber = 3001;
app.use(express.json())
mdb.connect("mongodb://localhost:27017/kongu").then(() => {
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
   var {fname,lname,email}=req.body
   console.log(fname,lname,email);
   try{
    var newuser=new users({
        fname:fname,
        lname:lname,
        email:email
        
    })
    newuser.save()
    console.log("succesfully signup")
    res.status(200).send("vankam too  signup")

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
   

app.listen(portnumber, () => {
    
    console.log(`back  end conneted\n Url:http://localhost:${portnumber}`)
})
