const express=require("express")
const cors=require("cors")
const app=express()
const {Connect}=require("./Config/db")
const {UserRout}=require("./Route/UserRoute")
const {PostRoute}=require("./Route/PostRout")
app.use(express.json())
app.use(cors({
    origin:"*"
}))
app.use("/",UserRout)
app.use("/",PostRoute)
app.listen(8080,async()=>{
    try{
     await Connect
     console.log("Connect")
    }
    catch{
       console.log("Err Connection")
    }
}) 