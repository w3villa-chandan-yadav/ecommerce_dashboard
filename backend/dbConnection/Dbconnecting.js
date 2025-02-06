import mongoose from "mongoose";


export const connectDB =()=>{
    try {
        mongoose.connect(process.env.MONGODB_URL).then(()=>{
            console.log("db connected succesfully")
        }).catch((error)=>{
            console.log("there is an error in connecting the database")

        })
        
    } catch (error) {
        console.log("error aa gai ooooye")
    }
}