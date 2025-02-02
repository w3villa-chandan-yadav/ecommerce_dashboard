import React from 'react'
import { MdNavigateNext } from "react-icons/md";

import { Link, useParams } from 'react-router-dom'

const Linkss = ({ item, active, setActive }) => {


  return (
    <>
      {
        item.isNavigate ? <Link key={item.id}

          to={`${ item.name === "Overview" ? "/" : `/${item.name}`}`}
          onClick={() => {
            setActive(item.id)
          }}

          className={`flex relative items-center cursor-pointer justify-between hover:bg-gray-700  text-white hover:text-white   group button-padding ${active === item.id ? " bg-linear-to-tr from-orange-500 from-40% to-pink-800" : ''}  rounded-md  text-sm merriweather-light`} ><span className='flex items-center gap-2'>{item.icon}{item.name} </span><span>{
            item.istrue && <MdNavigateNext className='text-2xl' />

          }
          </span>
         
        </Link> : <div key={item.id}
          className={`flex relative items-center cursor-pointer justify-between hover:bg-gray-700 text-white hover:text-white   group button-padding ${active === item.id ? " bg-linear-to-tr from-orange-500 from-40% to-pink-800" : ''}  rounded-md  text-sm merriweather-light`} >
          <span className='flex items-center gap-2'>{item.icon}{item.name} </span>
          <span>{
            item.istrue && <MdNavigateNext className='text-2xl' />
          }
          </span>
          {
            item.istrue &&  
            <div className='bg-[rgba(15,15,15,0.8)] shadow-orange-50 shadow-sm backdrop:blur-md absolute right-0 text-center   hidden button-padding top-[40%] rounded-xl transition-all w-[150px] group-hover:block z-30 "'>

              {
                item?.subDrop?.map((el, indexs) => {
                  return <Link key={indexs} to={`/indexs/${el}`} 
                  onClick={() => {
                    setActive(item.id)
                  }}
                  style={{ padding: "10px 5px", margin: "10px 0px" }} 
                  className="block border-[1px] border-gray-500  hover:bg-gray-600 rounded-2xl">
                    {el}
                  </Link>
                })
              }
            </div>
          }
        </div>
      }

    </>
  )
}

export default Linkss