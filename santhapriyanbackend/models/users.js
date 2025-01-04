var mdb=require("mongoose")
var userSchema=mdb.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String  
})
  var user_schema=mdb.model("users",userSchema)
  module.exports=user_schema



    
  