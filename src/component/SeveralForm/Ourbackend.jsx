import React, { useEffect, useState } from 'react'
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import TableRow from './TableRow';




const Ourbackend = () => {


        //the original data
        const [datas,setDatas] = useState([])

        // to toggle between the search field and employeee
        const [istrue,SetIsTrue] = useState(true);


         //filds to create new employee send with api
        const [name,setName] = useState("");
        const [last,setLast]  =useState();
        const [age,setAge] = useState("")
        const [positon,setpositon] =useState("");
        const [gender,setGender] = useState("")


        //the editing id 
        const [editing,setEditing] =useState(null);

        //the searchind input
        const [search ,setsearch] =useState("");

        //the current page
        const [currentPage,setCurrnetPage] = useState(1);

        //how data i have to slice
        const [startEnd,setStartEnd] = useState({
            start:4*(currentPage-1),
            end: 4* currentPage
        })


        //the muted data
        const [data,setData] = useState([]);
    
        // console.log(data)
    

        //the editng fields which will open on clicking  the editing
        const [inputName, setInputName] = useState("");
    
        const [inputPositon,setinputPosition] = useState("");
    
        const [countryy,setCountryy] = useState("")
    
    
    
    
    
    
    
    
    
    
        const addEmploye= async(e)=>{
            e.preventDefault();
            // console.log(data)
            if(name.length <3 || positon.length <3 || !last ||!gender ){
                alert("please fill correct details")
                return
            }
           
            try {
                
                const newData  = await fetch("http://localhost:3000/v1/user/newUser",{
                    method:"POST",
                    body: JSON.stringify({
                        first:name,
                        last:last,
                        gender:gender,
                        age:age,
                        position:positon
                    }),
                    headers:{
                        "Content-Type": "application/json"
                    }
                })

                const dataIs = await newData.json()

                console.log(dataIs)
              setData([...data,dataIs.newdetialse])

            } catch (error) {
                console.log("there is an error in createing data in frontend")
            }
       
            //  datas.push(newdataIs)
              
            //  setData([...data,newdataIs])
             alert("employee Added successufy")
    
             setName("");
             setpositon("");
             setLast("");
             setGender("");
             setAge('')
    
        }
    
    
           /// Debouncing is applyied in the searching section
    
        const handelSearch =(e)=>{
    
            setsearch(e.target.value)
    
            if(timer){
                clearTimeout(timer)
            }
    
             timer = setTimeout(()=>{
    
                // console.log("searching")
    
                const newData = datas.filter((ele,indexx)=> {
                    console.log(ele.name.first)
                    
                    if(ele.name.first.toLowerCase().includes(e.target.value.trim().toLowerCase()) ){
                        console.log("finding")
                        return true
                    }
                    
                })
                
                console.log(newData)
                if(currentPage !== 1){
    
                    setCurrnetPage(1)
                }
                setData(newData)
                
            },400)
        }
    
    
        const handeleChange=(toDo)=>{
            // console.log(toDo)
    
            setCurrnetPage(toDo)
        }
    
    
        const handleDelete =(id)=>{
             
            // console.log("delete",id)
            const newData = datas.filter((ele)=>ele.sno !=id);
            setDatas(newData);
    
            // console.log(newData)
    
            const updatedData = data.filter((ele)=>ele.sno != id);
    
            setData(updatedData);
    
            
    
        }
    
        const handleEditing =(id)=>{
    
         const editable =   datas.find((ele)=>{
           return ele?.login?.md5 === id});
        //  console.log(editable)
    
         setEditing(id)
         setInputName(editable?.name?.first)
         console.log('here is the name ,gender and country ' +editable?.name?.first+ " "+ editable?.gender+" "+editable?.location?.country)
         setinputPosition(editable?.gender)
         setCountryy(editable?.location?.country)
    
        //  console.log(editable);
    
        }
    
        const handleUpdate =(e)=>{
            e.preventDefault();
    
            // const index = editing-1;
    
            // console.log("editing", index, editing)
            // console.log(e)
            const index = datas.findIndex((ele)=>ele._id === editing)
    
            console.log(index);
    
            console.log(datas[index])
    
            datas[index].first =inputName;
            datas[index].gender = inputPositon;
    
    
            // datas[index].location.country = countryy;
    
            setDatas([...datas])
    
            setEditing(null)
    
    
        
    
    
        }
    
    
    
        useEffect(()=>{
    
           async function getData(){
                try {
                    const data =await fetch("http://localhost:3000/v1/user/name");
    
                    const result = await data.json();
    
                    console.log(result.allUser);
                    setDatas(result.allUser)
    
    
                    
                } catch (error) {
                    console.log("There is error in server please try after some time")
                }
            }
    
            getData()
    
    
        },[])
    
        useEffect(()=>{
    
            setData(datas)
    
        },[datas])
    
    
        useEffect(()=>{
     
            setStartEnd({
                start:4*(currentPage-1),
                end: 4* currentPage
            })
    
    
        },[currentPage])


       
    

          return <section className='w-full  ' style={{padding:"15px 0px"}} >
          <div className='w-[90%] mx-auto ' >
   
              <div className='flex items-center gap-6' style={{marginBottom:"15px"}}>
                  <button className={`text-black  border border-blue-500 ${istrue ===true && "bg-blue-500 text-white font-bold"} text-xs md:text-sm cursor-pointer rounded-md`} 
                  onClick={()=>SetIsTrue(true)}
                  style={{padding:"7px 10px"}}>
                      Search
                  </button>
                  <button className={`text-black  border ${istrue ===false && "bg-blue-500 text-white font-bold"} text-xs md:text-sm  cursor-pointer  rounded-md`} 
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
                  className='border-[1px] border-gray-500 w-[80%] lg:w-[40%] outline-none rounded-sm'
                  style={{padding:"6px 5px"}}
                  />
              </div> :
                  <form onSubmit={addEmploye}  name='addEmployeeform'>
                      <div className='grid grid-cols-3 gap-3 relative '>
                        
                      <input
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                        className='block outline-none border-[1px] w-[100%] border-gray-700 rounded-[10px] '
                      placeholder='Name'
                      style={{padding:"4px 10px"}}/>
                       <input
                      value={last}
                      onChange={(e)=>setLast(e.target.value)}
                        className='block outline-none border-[1px] w-[100%] border-gray-700 rounded-[10px] '
                      placeholder='last name'
                      style={{padding:"4px 10px"}}/>
                     
                       <input
                      value={gender}
                      onChange={(e)=>setGender(e.target.value)}
                        className='block outline-none border-[1px] w-[100%] border-gray-700 rounded-[10px] '
                      placeholder='gender'
                      style={{padding:"4px 10px"}}/>
                       <input
                      value={age}
                      onChange={(e)=>setAge(e.target.value)}
                        className='block outline-none border-[1px] w-[100%] border-gray-700 rounded-[10px] '
                      placeholder='age'
                      style={{padding:"4px 10px"}}/>
                      <input
                       value={positon}
                       onChange={(e)=>setpositon(e.target.value)}
                      className='block outline-none border-[1px] w-[100%] border-gray-700 rounded-[10px] '
                      placeholder='Position'
                      style={{padding:"4px 10px"}}/>
                   
                         <button 
                         type='submit'
                         className=' w-full border-[1px] rounded-2xl   border-orange-400 hover:bg-orange-500 hover:text-white hover:scale-105 transition-all-[1s] cursor-pointer '>
                          Submit
                      </button>
                      </div>
                  </form>
               }
  
  
               {
                 editing !=null ? <form onSubmit={handleUpdate}  name='addEmployeeform' style={{margin:"20px 0px"}}>
                  <div className='flex gap-3 relative '>
                  <input
                  value={inputName}
                  onChange={(e)=>setInputName(e.target.value)}
                   name="name" className='block outline-none border-[1px] w-[100%] border-gray-700 rounded-[10px] '
                  placeholder='Name'
                  style={{padding:"4px 10px"}}/>
                  <input name="name"
                   value={inputPositon}
                   onChange={(e)=>setinputPosition(e.target.value)}
                  className='block outline-none border-[1px] w-[100%] border-gray-700 rounded-[10px] '
                  placeholder='gender'
                  style={{padding:"4px 10px"}}/>
  
                  <input name="name"
                   value={countryy}
                   onChange={(e)=>setCountryy(e.target.value)}
                  className='block outline-none border-[1px] w-[100%] border-gray-700 rounded-[10px] '
                  placeholder='country'
                  style={{padding:"4px 10px"}}/>
               
                     <button 
                     type='submit'
                     className=' w-[60%] hover:text-white border-[1px] border-orange-500 rounded-2xl text-black hover:bg-orange-500 hover:scale-105 transition-all-[1s] cursor-pointer '>
                      update
                  </button>
                  </div>
              </form>:""
               }
  
                  {datas.length > 0 &&
                      <div className='overflow-x-scroll lg:overflow-hidden ' style={{margin:"20px 0px "}}>
                          <table className='w-full min-w-[700px] text-center table-fixed  lg:w-full  '>
                              <thead className=' border-collapse  border-none' style={{padding:"10px 5px"}}>
                                  <tr className='border-collapse border-none  rounded-t-2xl'>
                                      <th className='text-center border-collapse  w-[60%] md:w-[100%] border-b-[1px] border-gray-300  bg-gray-500 first:rounded-tl-2xl merriweather text-xs md:text-sm font-semibold text-gray-300' 
                                      style={{padding:"10px 5px"}}>S-NO.</th>
                                      <th className='text-left border-collapse w-[60%] md:w-[100%] border-b-[1px] border-gray-300  bg-gray-500 merriweather text-sm md:text-sm font-semibold text-gray-300' 
                                      style={{padding:"10px 5px"}}>Name</th>
                                       <th className='text-left border- border-b-[1px] w-[60%] md:w-[100%] border-gray-300  bg-gray-500  merriweather text-sm md:text-sm font-semibold text-gray-300'
                                      style={{padding:"10px 5px"}}>Gender</th>
                                      <th className='text-left border- border-b-[1px] w-[60%] md:w-[100%] border-gray-300  bg-gray-500  merriweather text-sm md:text-sm font-semibold text-gray-300'
                                      style={{padding:"10px 5px"}}>age</th>
  
                                      <th className='last:rounded-tr-2xl w-[60%] md:w-[100%]  md:text-xm text-sm text-center bg-gray-500  border-b-[1px] border-gray-300 '>
                                          Action</th>
                                  </tr>
                              </thead>
                              <tbody>
  
                                  {
                                      data.slice(startEnd["start"],startEnd["end"]).map((ele,index)=>{
                                          return(  <tr  key={index} className='border-collapse border-b rounded-t-2xl'>
                                            <th className='text-center border-collapse  border-gray-900  merriweather text-sm font-light text-gray-600' 
                                            style={{padding:"10px 5px"}}>
                                                {/* {ele.sno+1} */}
                                                {
                                                    ele._id.substr(0,5)
                                                }
                                                </th>
                                            <th className='text-left border-collapse  border-gray-900 merriweather text-sm font-light text-gray-600'
                                            style={{padding:"10px 5px"}}>
                                                {/* {ele?.name} */}
                                                <input 
                                                readOnly={ele._id ===editing ? false:true}
                                                value={ele.first} className='w-full outline-none'/>
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
                                                value={ele?.age} className='w-full outline-none'/>
                                                
                                                </th>
                                            <th className=' w-[100%] md:block border-gray-900 text-gray-600 text-center text-sm '>
                                                <div className=' h-full flex md:flex-row justify-center flex-col gap-2' style={{padding:"9px 2px"}}>
                                                    {
                                                       ele?._id === editing ?  
                                                       <button className=' w-full border border-blue-500 text-black hover:bg-blue-500 hover:text-white  text-[8px] lg:text-[10px]   rounded-2xl cursor-pointer'
                                                         onClick={(e)=>setEditing(null)}
                                                         style={{padding:"4px 13px"}}>
                                                             Cancle</button>:
                                                             <button className=' text-black w-full border border-orange-500 text-[8px] lg:text-[10px]  hover:bg-orange-500  hover:text-white rounded-2xl cursor-pointer'
                                                            onClick={(e)=>handleEditing(ele?._id)}
                                                            style={{padding:"4px 13px"}}>
                                                                Edit</button>
                                                    }
        
                                              {
                                                ele?._id !=editing  &&  <button className=' border border-red-500 text-xs w-full text-black text-[8px]  lg:text-[10px]  hover:bg-red-500 hover:text-white rounded-2xl cursor-pointer'
                                                onClick={(e)=>handleDelete(ele?._id)}
                                                style={{padding:"4px 13px"}}>
                                                    Delete</button>
        
                                              }
        
                                               
                                                {
                                                    editing === ele?._id && (
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
                                      })
                                  }                            
                              </tbody>
                          </table>                        
                       {   data.length > 4 && <div className='bg-gray-600 h-[40px] w-fit flex justify-center items-center gap-3 rounded-md ' style={{padding:"2px 6px",margin:"10px auto "}} >
                           {
                             currentPage >1 &&<>  <button
                               onClick={()=>handeleChange(1)}
                               className='bg-gray-400 rounded-md flex-1 cursor-pointer hover:bg-gray-500' style={{padding:"8px 10px"}}>
                               <FaAngleDoubleLeft/>
                               </button>
                                <button 
                                onClick={(e)=>handeleChange(currentPage-1)}
                               className='bg-gray-400 rounded-md flex-1 cursor-pointer hover:bg-gray-500' style={{padding:"3px 10px"}}>
                                 prev
                               </button>
                               </>                                                         
                           }                                                                          
                          {
                             Math.ceil(data.length/4)>currentPage && <>                            
                             <button
                            onClick={(e)=>handeleChange(currentPage+1)}
                            className='bg-gray-400 rounded-md flex-1 cursor-pointer hover:bg-gray-500' style={{padding:"3px 10px"}}>
                              next
                            </button> <button
                                onClick={(e)=>handeleChange(Math.ceil(data.length/4))}
                                className='bg-gray-400 rounded-md flex-1 cursor-pointer hover:bg-gray-500 ' style={{padding:"8px 10px"}}>
                                  <FaAngleDoubleRight/>                              
                                </button>
                                </>
                          }
                          </div>
                          }
                      </div>
  }
          </div>     
          
                           
              </section>
}

export default Ourbackend