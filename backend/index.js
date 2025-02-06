import express from "express";
import dotenv from "dotenv"
dotenv.config();
const app = express();
import {connectDB} from "./dbConnection/Dbconnecting.js"
import userRoute from "./routes/employeRoutes.js";
import cors from "cors"

connectDB()



const PORT = process.env.PORT || 4000;



app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({}))
app.get("/",function(req,res){
    res.send("Hi this is point of contect")
})

app.use("/v1/user",userRoute)




app.listen(PORT,()=>{
    console.log(`app is runing on the port ${PORT}`)
})