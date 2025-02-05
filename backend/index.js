import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;




app.get("/",function(req,res){
    res.send("Hi this is point of contect")
})




app.listen(PORT,()=>{
    console.log(`app is runing on the port ${PORT}`)
})