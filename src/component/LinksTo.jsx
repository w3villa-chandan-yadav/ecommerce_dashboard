import React, { useState } from 'react'
import { MdNavigateNext } from "react-icons/md";
import { Link } from 'react-router-dom';


export const LinksTo = ({dashboard,headingg,active ,setActive}) => {



  return (<>
    <h3 className='text-left  text-white   merriweather-bold' style={{paddingLeft:"10px"}}>{headingg}</h3>
    {
        dashboard.map((item,index)=>{
          return <Link key={item.id} 
          to={`${item.name==="Overview" ?"/":`/${item.name}` }`}
          onClick={()=>setActive(item.id)}
          
          className={`flex relative items-center cursor-pointer justify-between  group button-padding ${active ===item.id ? " bg-linear-to-tr from-orange-500 from-40% to-pink-800":'' }  rounded-md text-white text-sm merriweather-light`} ><span className='text-white flex items-center gap-2'>{item.icon}{item.name} </span><span>{
            item.istrue && <MdNavigateNext className='text-2xl'/>

         }
         </span> 
         {

          

          item.istrue && <div className='bg-[rgba(15,15,15,0.8)] shadow-orange-50 shadow-sm backdrop:blur-md absolute right-0 text-center   hidden button-padding top-[40%] rounded-xl transition-all w-[150px] group-hover:block z-30 "'>
            <Link to={"/frontend"} className="block button-padding  hover:bg-linear-to-tr from-orange-500 from-40% to-pink-800 rounded-2xl">
                Front-end
            </Link>

            <Link to={"/backend"} className="block button-padding hover:bg-linear-to-tr from-orange-500 from-40% to-pink-800 rounded-2xl">
                Back-end
            </Link>

            <Link to={"/mislenious"} className="block button-padding hover:bg-linear-to-tr from-orange-500 from-40% to-pink-800 rounded-2xl">
                UnKnown
            </Link>

          </div>
         }
          </Link>
        })
    }
    <div className='h-1 w-1 bg-transparent' style={{marginBottom:"20px"}}></div>
    </>
  )
}
