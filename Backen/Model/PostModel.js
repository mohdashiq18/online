const mongoose=require("mongoose")
const postSchema=mongoose.Schema({
    userId:{type:String,reuired:true},
    postText:{type:String,reuired:true},
    Comment:[{
        text:{type:String,reuired:true},
        author:{type:String,reuired:true}
    }]
})

const PostModel=mongoose.model("post",postSchema)
module.exports={
    PostModel
}