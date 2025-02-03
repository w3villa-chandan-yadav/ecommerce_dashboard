import React, { useState } from 'react';
import AddEmploy from '../SeveralForm/AddEmploy';
import ExperienceForm from '../SeveralForm/ExperienceForm';

const Forms = () => {

    const [active,sestACtive] = useState("Employee");


    console.log(active)

  return (
    <div className='w-full h-fit max-w-[1120px] ' style={{padding:"50px 0px"}}>
        {/* <div className='w-full h-[40%] absolute bg-gray-600' style={{marginTop:"-30px"}}>

        </div> */}  
        <div className='w-[90%]  bg-gray-100  rounded-xl   mx-auto   z-30 relative' style={{padding:"10px 5px" ,}}>
            <div className='flex md:flex-row flex-col items-center'>
            <h3 className='text-center merriweather font-bold text-xl  w-[100%] md:w-[70%]'>Please select a form</h3>
               <select
                 onChange={(e) => sestACtive(e.target.value)} 
               className=' w-[100%]  outline-none border-[2px] border-gray-300 rounded-2xl'
               style={{padding:"10px 19px "}} 
               name="cars" id="cars">
                <option  disabled defaultValue={"volvo"} >Choose one form below ....</option>
                <option 
                value="Employee">AddEmploye</option>
                <option
                value="Reviews">Reviews</option>
                </select>

            </div>

        </div>

        {
          active === "Employee" ? 
           <AddEmploy/>  :
        <ExperienceForm/>
        }

    </div>
  )
}

export default Forms