import express from "express"
import { createUser, deleteUserdetails, getUser, updateUser } from "../controller/employeeConteoller.js";
const userRoute = express.Router();



userRoute.get("/name",getUser)
userRoute.post("/newUser",createUser)
userRoute.put("/update/:id",updateUser)
userRoute.delete("/delete/:id",deleteUserdetails)



export default userRoute ;