import React, { useState } from 'react'
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

let datas =[
    {
        sno:0,
        name:"Tarun sir",
        positoin:'Software Developer tranee'
    },
    {
        sno:1,
        name:"Chandan kumar yadav",
        positoin:'Software Developer tranee'
    },
    {
        sno:2,
        name:"Patra",
        positoin:'Software Developer tranee'
    },
    {
        sno:3,
        name:"Chandan kumar yadav",
        positoin:'Software Developer tranee'
    }, 
    {
        sno:4,
        name:"Veshah ",
        positoin:'Software Developer tranee'
    }
     ,
     {
        sno:5,
        name:"Sri ",
        positoin:'Developer tranee'
    },
    {
        sno:6,
        name:"Tony ",
        positoin:'QA'
    }
    ,
    {
        sno:7,
        name:"Sonu ",
        positoin:'Java Developer '
    }
    ,
    {
        sno:8,
        name:"Mnu ",
        positoin:'Pyton Developer tranee'
    }
    ,{
        sno:9,
        name:"Rahul ",
        positoin:'C++ Developer tranee'
    },
    {
        sno:10,
        name:"Tickkk ",
        positoin:' Designer '
    },
    {
        sno:12,
        name:"Dev ",
        positoin:' Tranee'
    },
    {
        sno:12,
        name:"metan ",
        positoin:'Java  tranee'
    },
    {
        sno:13,
        name:"ketean ",
        positoin:'Software Developer tranee'
    },
 ]



const AddEmploy = () => {

    const [istrue,SetIsTrue] = useState(true);
    const [name,setName] = useState("");
    const [positon,setpositon] =useState("");
    const [editing,sestEditing] =useState(null);
    const [search ,setsearch] =useState("");
    const [currentPage,sestCurrnetPage] = useState(1);
    const [totalItems,setTotalItems] = useState(5)
  

    const [data,setData] = useState(datas);

    // const [newdata,setNewdata]= useState(datas);

    const addEmploye=(e)=>{
        e.preventDefault();
        // console.log(data)

        if(name.length <3 || positon.length <5 ){
            alert("please fill correct details")
            return
        }

        const newdataIs ={sno:data.at(-1).sno+1,
            name:name,
            positoin:positon
         }
   
         datas.push(newdataIs)
          
         setData([...data,newdataIs])
         alert("employee Added successufy")

         setName("");
         setpositon("");

    }

    const handelSearch =(e)=>{

        setsearch(e.target.value)

        const newData = datas.filter((ele,indexx)=> {
            
                if(ele.name.includes(e.target.value) || ele.positoin.includes(e.target.value)){
                    console.log("finding")
                    return true
                }
            
        })

        console.log(newData)
        setData(newData)

    }


    const handeleChange=(toDo)=>{
        console.log(toDo)



    }




    
  return (
    <section className='w-full       ' style={{padding:"15px 0px"}} >
        <div className='w-[90%] mx-auto ' >
 
            <div className='flex items-center gap-6' style={{marginBottom:"15px"}}>
                <button className={`bg-blue-500 ${istrue ===true && "bg-blue-900 text-white font-bold"} cursor-pointer rounded-md`} 
                onClick={()=>SetIsTrue(true)}
                style={{padding:"7px 10px"}}>
                    Search
                </button>
                <button className={`bg-blue-500 ${istrue ===false && "bg-blue-900 text-white font-bold"} cursor-pointer  rounded-md`} 
                  onClick={()=>SetIsTrue(false)}
                style={{padding:"7px 10px"}}>
                    Add Employe
                </button>
            </div>

 


             {
                istrue ?     <div>
                <input type='text' placeholder='Degination/Name'
                value={search}
                onChange={handelSearch}
                className='border-[1px] border-gray-500 w-[40%] outline-none rounded-sm'
                style={{padding:"6px 5px"}}
                />
            </div> :
                <form onSubmit={addEmploye}>
                    <div className='flex gap-3 relative '>
                    <input
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                     name="name" className='block outline-none border-[1px] w-[100%] border-gray-700 rounded-[10px] '
                    placeholder='Name'
                    style={{padding:"4px 10px"}}/>
                    <input name="name"
                     value={positon}
                     onChange={(e)=>setpositon(e.target.value)}
                    className='block outline-none border-[1px] w-[100%] border-gray-700 rounded-[10px] '
                    placeholder='Position'
                    style={{padding:"4px 10px"}}/>
                 
                       <button 
                       type='submit'
                       className=' w-[60%] border-[1px] border-gray-500 rounded-2xl bg-orange-400 hover:bg-orange-500 hover:scale-105 transition-all-[1s] cursor-pointer '>
                        Submit
                    </button>
                    </div>
                </form>
             }

 
        


                {data.length > 0 &&
                    <div className='' style={{margin:"20px 0px "}}>
                        <table className='w-full text-center table-fixed'>
                            <thead className=' border-collapse  border-none' style={{padding:"10px 5px"}}>
                                <tr className='border-collapse border-none  rounded-t-2xl'>
                                    <th className='text-left border-collapse border-b-[1px] border-gray-300  bg-gray-500 first:rounded-tl-2xl merriweather text-xl font-semibold text-gray-300' 
                                    style={{padding:"10px 5px"}}>Index</th>
                                    <th className='text-left border-collapse  border-b-[1px] border-gray-300  bg-gray-500 merriweather text-xl font-semibold text-gray-300' 
                                    style={{padding:"10px 5px"}}>Name</th>
                                    <th className='text-left border- border-b-[1px] border-gray-300  bg-gray-500  merriweather text-xl font-semibold text-gray-300'
                                    style={{padding:"10px 5px"}}>Position</th>
                                    <th className='last:rounded-tr-2xl bg-gray-500 text-center  border-b-[1px] border-gray-300 '>
                                        Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data.slice(0,3).map((ele,index)=>{
                                        return(
                            <tr key={index} className='border-collapse border-none  rounded-t-2xl'>
                                    <th className='text-left border-collapse border-b-[1px] border-gray-900    merriweather text-sm font-light text-gray-600' 
                                    style={{padding:"10px 5px"}}>{ele.sno+1}</th>
                                    <th className='text-left border-collapse  border-b-[1px] border-gray-900   merriweather text-sm font-light text-gray-600'
                                    style={{padding:"10px 5px"}}>
                                        {/* {ele?.name} */}
                                        <input 
                                        readOnly={ele.sno ===editing ? false:true}
                                        value={ele.name} className='w-full outline-none'/>
                                        </th>
                                    <th className='text-left border- border-b-[1px] border-gray-900   merriweather text-sm font-light text-gray-600'
                                    style={{padding:"10px 5px"}}>
                                        {/* {ele?.positoin} */}

                                        <input 
                                        readOnly={ele.sno ===editing ? false:true}
                                        value={ele?.positoin} className='w-full outline-none'/>
                                        
                                        </th>
                                    <th className=' border-b-[1px] w-[24%]   border-gray-900 text-gray-600 text-center text-sm '>
                                        
                                            {
                                               ele.sno === editing ?  <button className='bg-blue-600 text-white hover:text-black rounded-2xl cursor-pointer'
                                                 onClick={(e)=>sestEditing(null)}
                                                 style={{padding:"4px 13px",marginInline:"10px"}}>
                                                     cancle</button>:
                                                     <button className='bg-yellow-600 hover:text-white rounded-2xl cursor-pointer'
                                        onClick={(e)=>sestEditing(ele.sno)}
                                        style={{padding:"4px 13px",marginInline:"10px"}}>
                                            edit</button>
                                            }
                                        <button className='bg-red-600 hover:text-white rounded-2xl cursor-pointer' 
                                        style={{padding:"4px 13px",marginInline:"10px"}}>
                                            delet</button>
                                        {
                                            editing === ele.sno && (
                                                <button className='bg-green-600 hover:text-white rounded-2xl cursor-pointer' 
                                        style={{padding:"4px 13px",marginInline:"10px"}}>
                                            save</button>
                                            )
                                        }

                                        
                                        </th>
                                </tr>

                                        )
                                    })
                                }
                                

                            </tbody>
                        </table>
                        
                        <div className='bg-gray-600 h-[40px] w-fit flex justify-center items-center gap-3 rounded-md ' style={{padding:"2px 6px",margin:"10px auto "}} >
                          <button
                          onClick={()=>handeleChange(1)}
                          className='bg-gray-400 rounded-md flex-1 cursor-pointer hover:bg-gray-500' style={{padding:"8px 10px"}}>
                          <FaAngleDoubleLeft/>
                          </button>
                          <button className='bg-gray-400 rounded-md flex-1 cursor-pointer hover:bg-gray-500' style={{padding:"3px 10px"}}>
                            1
                          </button>
                          <button className='bg-gray-400 rounded-md flex-1 cursor-pointer hover:bg-gray-500' style={{padding:"3px 10px"}}>
                            2
                          </button>
                          <button className='bg-gray-400 rounded-md flex-1 cursor-pointer hover:bg-gray-500' style={{padding:"3px 10px"}}>
                            3
                          </button>
                          <button
                          onClick={()=>handeleChange(data.length/totalItems)}
                          className='bg-gray-400 rounded-md flex-1 cursor-pointer hover:bg-gray-500 ' style={{padding:"8px 10px"}}>
                            <FaAngleDoubleRight/>
                          </button>

                        </div>


                    </div>
}


        </div>
               
              
            </section>
  )
}

export default AddEmploy