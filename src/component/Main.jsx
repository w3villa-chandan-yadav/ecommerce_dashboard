import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { LinksTo } from './LinksTo';
import { PiSquaresFourFill } from "react-icons/pi";
import { BsCalendar2EventFill } from "react-icons/bs";
import { HiMiniTicket } from "react-icons/hi2";
import { FaFolderOpen } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { IoCopy } from "react-icons/io5";
import { MdTask } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { BsBoxSeamFill } from "react-icons/bs";
import { AiFillLayout } from "react-icons/ai";
import { MdContactSupport } from "react-icons/md";
import { RiSettingsFill } from "react-icons/ri";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";











const dashboard =[
  {id:0,istrue:false, name:"Overview",icon:<PiSquaresFourFill/>},
  {id:1,istrue:false, name:"Calender",icon:<BsCalendar2EventFill/>},
  {id:2,istrue:false, name:"Tickets",icon:<HiMiniTicket/>},
  {id:3,istrue:false, name:"File Manager",icon:<FaFolderOpen/>},
  {id:4,istrue:false, name:"Kanban",icon:<PiNotebookFill/>},
  {id:5,istrue:true, name:"Projects",icon:<IoCopy/>},
  {id:6,istrue:true, name:"task",icon:<MdTask/>},
]

const heading=[
  {id:7,istrue:true, name:"Auth Pages",icon:<IoPeopleSharp/>},
  {id:8,istrue:true, name:"Extra Page",icon:<BsBoxSeamFill/>}, 
  {id:9,istrue:false, name:"Layout",icon:<AiFillLayout/>},
]

const setting =[
  {id:10,istrue:true, name:"Support",icon:<MdContactSupport/>},
  {id:11,istrue:true, name:"Setting",icon:<RiSettingsFill/>},
  {id:12,istrue:false, name:"Logout",icon:<RiLogoutCircleRFill/>},

]









const Main = () => {
  const [inputs,setInput] = useState("");

   const handleClick =(e)=>{
          if(e.key ==="Enter"){
            alert("Ye galt kr hai janab")
          }
  }


  const [active,setActive]  =useState(0)
 

  return (
    <div className='flex justify-center items-center  w-screen h-screen overflow-hidden' >
    <div className='  w-[244px] bg-zinc-900 h-screen'>
      <div className='nosifer-bold text-3xl text-white' style={{paddingTop:"20px",marginLeft:"10px",paddingBottom:"6px"}}>
        panze
      </div>
      <div className='w-full h-full overflow-auto ' style={{padding:"10px 0px"}}>
        <LinksTo dashboard={dashboard} headingg ={"DASHBOARD"} setActive={setActive} active={active}/>
        <LinksTo dashboard={heading} headingg ={"ADMISTRATOR"} setActive={setActive} active={active} />
        <LinksTo dashboard={setting} headingg ={"SETTING"} setActive={setActive} active={active} />


      </div>
    </div>
    <div className='flex-1 w-full '>
    <div className='w-full  bg-white h-[70px] relative'>
      <div className='w-[97%] h-[100%] mx-auto flex items-center justify-between '>
          <div  className='bg-gray-200 flex gap-4 items-center w-[33%] rounded-3xl' style={{padding:"6px 5px"}}>
             <IoMdSearch className='text-3xl text-gray-600 cursor-pointer'/>
              <input 
              value={inputs}
              onChange={(e)=>setInput(e.target.value)}
              onKeyDown={handleClick}
              className='border-none merriweather-bold  font-[400] text-gray-500 outline-none h-full' placeholder='Search task...'/>
          </div>
          <div className='flex gap-3 justify-end items-center w-[33%] rounded-3xl'>
            <div className='w-10 h-10 rounded-full bg-gray-300 overflow-hidden grid place-items-center'>
                 <IoMoon className='text-xl'/>
            </div>

            <div className='w-10 h-10 rounded-full bg-gray-300 overflow-hidden grid place-items-center'>
                <FaBell className='text-xl'/>
              </div>

              <div className='w-10 h-10 rounded-full bg-gray-300 overflow-hidden grid place-items-center'>
               <CiGlobe className='text-xl'/> 
              </div>

              <div className='w-10 h-10 rounded-full bg-gray-300 overflow-hidden grid place-items-center'>
              <img src={"https://www.shutterstock.com/shutterstock/photos/2151833739/display_1500/stock-photo-portrait-of-a-young-latin-woman-with-pleasant-smile-and-crossed-arms-isolated-on-grey-wall-with-2151833739.jpg"} className=' -left-[18px] top-2 w-full h-full  object-cover rounded-full'/>

              </div>

          </div>
    

        </div>  

     
    </div>
    <div className='w-full flex justify-center items-center custom-height bg-zinc-200 overflow-y-scroll  '> 
      <div className=' w-[97%] h-[99%]  mx-auto custom-paddinginner'>
        <Outlet/>
      </div>
      

    </div>
    </div>

   </div>
  
  )
}

export default Main