const express=require("express")
const UserRout=express.Router()
const {UserModel}=require("../Model/UserModel")
UserRout.get("/users",async(req,res)=>{
    try{
      const data=await UserModel.find()
      res.send(data)
    }
    catch{
      res.send("Err User Section")
    }
})
UserRout.post("/register",async(req,res)=>{
    const payload=req.body
    try{
     const exit= await UserModel.findOne({email:payload.email})
     if(exit){
        res.send("User already Exit")
     }
     else{
        const user=new UserModel(payload)
        await user.save()
        res.send(user)
     }
    }
    catch{ 
       res.send("Err user registration")
    }
})
UserRout.post("/login",async(req,res)=>{
    const payload=req.body
        try{
             const check=await UserModel.findOne({email:payload.email})
             if(check){
                if(check.password===payload.password){
                    res.send("Login Success")
                }
                else{
                    res.send("password wrong")
                }
             }
             else{
                res.send("User not found")
             }
        }   
        catch{
            res.send("Login error")
        }
})
module.exports={
    UserRout
} 