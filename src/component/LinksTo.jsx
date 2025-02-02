import React, { useState } from 'react'
import Linkss from './Linkss';


export const LinksTo = ({dashboard,headingg,active ,setActive}) => {



  return (<>
    <h3 className='text-left  text-white   merriweather-bold' style={{paddingLeft:"10px"}}>{headingg}</h3>
    {
        dashboard.map((item,index)=>{
          return <Linkss key={index} item={item} active={active} setActive={setActive}/>
        })
    }
    <div className='h-1 w-1 bg-transparent' style={{marginBottom:"20px"}}></div>
    </>
  )
}
