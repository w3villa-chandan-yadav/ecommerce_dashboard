import React, { useState } from 'react';
import AddEmploy from '../SeveralForm/AddEmploy';
import ExperienceForm from '../SeveralForm/ExperienceForm';

const Forms = () => {

    const [active,sestACtive] = useState(0);

  return (
    <div className='w-full h-fit max-w-[1120px] ' style={{padding:"50px 0px"}}>
        {/* <div className='w-full h-[40%] absolute bg-gray-600' style={{marginTop:"-30px"}}>

        </div> */}  
        <div className='w-[90%]  bg-gray-100  rounded-xl   mx-auto   z-30 relative' style={{padding:"10px 5px" ,}}>
            <div className='flex items-center'>
            <h3 className='text-left merriweather font-bold text-xl  flex-[0.4]'>Please select a form</h3>
               <select
               className='flex-1 outline-none border-[2px] border-gray-300 rounded-2xl'
               style={{padding:"10px 19px "}} 
               name="cars" id="cars">
                <option  disabled selected value="volvo">Choose one form below ....</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                </select>

            </div>

        </div>
        <AddEmploy/>  
        {/* <ExperienceForm/> */}

    </div>
  )
}

export default Forms