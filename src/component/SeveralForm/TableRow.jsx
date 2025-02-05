import React,{memo} from 'react';

const TableRow = ({ele,editing,setEditing,handleEditing,handleDelete,handleUpdate}) => {
  return (
    <tr  className='border-collapse border-b rounded-t-2xl'>
                                    <th className='text-center border-collapse  border-gray-900  merriweather text-sm font-light text-gray-600' 
                                    style={{padding:"10px 5px"}}>
                                        {/* {ele.sno+1} */}
                                        {
                                            ele.id.value ? ele.id.value :Math.random(3)
                                        }
                                        </th>
                                    <th className='text-left border-collapse  border-gray-900 merriweather text-sm font-light text-gray-600'
                                    style={{padding:"10px 5px"}}>
                                        {/* {ele?.name} */}
                                        <input 
                                        readOnly={ele.sno ===editing ? false:true}
                                        value={ele.name.first} className='w-full outline-none'/>
                                        </th>

                                        <th className='text-left border-collapse  border-gray-900 merriweather text-sm font-light text-gray-600'
                                    style={{padding:"10px 5px"}}>
                                        {/* {ele?.name} */}
                                        <input 
                                        readOnly={ele.sno ===editing ? false:true}
                                        value={ele?.gender} className='w-full outline-none'/>
                                        </th>


                                        
                                    <th className='text-left border-gray-900 merriweather text-sm font-light text-gray-600'
                                    style={{padding:"10px 5px"}}>
                                        {/* {ele?.positoin} */}

                                        <input 
                                        readOnly={ele.sno ===editing ? false:true}
                                        value={ele?.location.country} className='w-full outline-none'/>
                                        
                                        </th>
                                    <th className=' w-[100%] md:block border-gray-900 text-gray-600 text-center text-sm '>
                                        <div className=' h-full flex md:flex-row justify-center flex-col gap-2' style={{padding:"9px 2px"}}>
                                            {
                                               ele?.login.md5 === editing ?  
                                               <button className=' w-full border border-blue-500 text-black hover:bg-blue-500 hover:text-white  text-[8px] lg:text-[10px]   rounded-2xl cursor-pointer'
                                                 onClick={(e)=>setEditing(null)}
                                                 style={{padding:"4px 13px"}}>
                                                     Cancle</button>:
                                                     <button className=' text-black w-full border border-orange-500 text-[8px] lg:text-[10px]  hover:bg-orange-500  hover:text-white rounded-2xl cursor-pointer'
                                                    onClick={(e)=>handleEditing(ele?.login.md5)}
                                                    style={{padding:"4px 13px"}}>
                                                        Edit</button>
                                            }

                                      {
                                        ele?.login.md5 !=editing  &&  <button className=' border border-red-500 text-xs w-full text-black text-[8px]  lg:text-[10px]  hover:bg-red-500 hover:text-white rounded-2xl cursor-pointer'
                                        onClick={(e)=>handleDelete(ele?.login.md5)}
                                        style={{padding:"4px 13px"}}>
                                            Delete</button>

                                      }

                                       
                                        {
                                            editing === ele?.login.md5 && (
                                                <button
                                                onClick={handleUpdate}
                                                className=' w-full border border-green-500 text-black hover:bg-green-500 hover:text-white text-[8px] lg:text-[10px] rounded-2xl cursor-pointer'
                                                style={{padding:"4px 13px"}}>
                                            Save</button>
                                            )
                                        }
                                        </div>
                                        </th>
                                </tr>
  )
}

export default memo(TableRow)