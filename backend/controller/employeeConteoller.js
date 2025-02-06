import Employee from "../schema/employee.js";


export const getUser = async (req,res)=>{
    // console.log("here i a")
    try {

        const allUser = await Employee.find();

        res.status(200).json({
            allUser
        })

    } catch (error) {
        
    }
}

export const createUser = async (req,res)=>{
    try {
        // console.log(req.body)
        // console.log("here i am") 
        const {first,last,position,gender,age} = req.body;

        if(!first || !last || !gender || !position){
           return res.status(401).json({
                success:false,
                message:"Please provide a valid information"
            })
        }

        const newdetialse = await Employee.create({
            first :first,
            last:last,
            gender:gender,
            designation:position,
            age:age
        })
        
        
        if(!newdetialse){
         return   res.status(400).json({
                success:false,
                message:"there is error in adding data"
            })

        }

        res.status(200).json({
            success:true,
            message:"Data added successfuly",
            newdetialse
        })

    } catch (error) {
        console.log("error in create User",error)
    }
}

export const updateUser = async( req,res)=>{
    try {
        const {id} = req.params ;
        // console.log(req.body)

        const {first,last,position,gender,age} = req.body;

        if(!first || !last || !gender || !position){
           return res.status(401).json({
                success:false,
                message:"Please provide a valid information"
            })
        }

        const isUser = await Employee.findById({_id:id});
        console.log("is user")

        if(!isUser){
            return res.status(401).json({
                success:false,
                message:"Please provide a valid employee id"
            })
        }

        const updatedUser = await Employee.findByIdAndUpdate({_id:id},{
            first :first,
            last:last,
            gender:gender,
            designation:position,
            age:age
        },{new:true})

        res.status(200).json({
            success:true,
            message:"Data updated successfuly",
            updatedUser
        })

    } catch (error) {
        console.log("there is error in update user")
    }
}


// employeeController.js

export const deleteUserdetails = async(req, res) => {
  try {
    const { id } = req.params; 

    const deleted = await Employee.findByIdAndDelete({_id:id})

    

    res.status(200).json({
        success:false,
        message:"User deleted successfull",
    });  
  } catch (error) {
    console.log("there is an error in deleting ")
    res.status(402).json({
        success:false,
        message:"please provide all details correctly"
    })
    
  }
};
