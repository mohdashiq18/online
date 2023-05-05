const express=require("express")
const PostRoute=express.Router()
const {PostModel}=require("../Model/PostModel")


PostRoute.get("/getpost",async(req,res)=>{
    try{
        const data=await PostModel.find()
        res.send(data)
    }
    catch{
      res.send("Err GetPost") 
    }
})

PostRoute.post("/postfeed",async(req,res)=>{
    const payload=req.body
   try{
    const post =new PostModel(payload)
    await post.save()
    res.send(post)
   }
   catch{
     res.send("Err feedpost")
   }
})
PostRoute.patch("/comment/:id",async(req,res)=>{
    const id=req.params.id
    const payload=req.body
    try{
       let post=await PostModel.findOne({"_id":id})
       let comment=post.Comment
       comment.push(payload)
       await PostModel.findByIdAndUpdate({"_id":id},{Comment:comment})
       res.send(comment)
    }
    catch{
       res.send("ER")
    }
})

module.exports={
    PostRoute
}