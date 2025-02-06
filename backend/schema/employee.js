import mongoose from "mongoose";


const employeeSchema = new mongoose.Schema({
    first:{
        type:String,
        reuqired:true,
    },
    last:{
        type:String,
        reuqired:true,
    },
    designation:{
        type:String,
        required:true
    },
    age:{
      type:Number,
      required:true
    },
    gender:{
        type:String,
        required:true
    }
})

const Employee = mongoose.model("Employee",employeeSchema);

export default Employee ;