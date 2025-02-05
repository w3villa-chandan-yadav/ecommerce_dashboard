import React, { useEffect, useState } from 'react'
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import TableRow from './TableRow';

let datass =[
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


 let timer = null;



const AddEmploy = () => {

    const [datas,setDatas] = useState([])
    const [istrue,SetIsTrue] = useState(true);
    const [name,setName] = useState("");
    const [positon,setpositon] =useState("");
    const [editing,setEditing] =useState(null);
    const [search ,setsearch] =useState("");
    const [currentPage,setCurrnetPage] = useState(1);
    const [startEnd,setStartEnd] = useState({
        start:4*(currentPage-1),
        end: 4* currentPage
    })
    const [data,setData] = useState(datas);

    // console.log(data)

    const [inputName, setInputName] = useState("");

    const [inputPositon,setinputPosition] = useState("");

    const [countryy,setCountryy] = useState("")










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
        const index = datas.findIndex((ele)=>ele?.login?.md5 === editing)

        console.log(index);

        console.log(datas[index])

        datas[index].name.first =inputName;
        datas[index].gender = inputPositon;


        datas[index].location.country = countryy;

        setDatas([...datas])

        setEditing(null)


    


    }



    useEffect(()=>{

       async function getData(){
            try {
                const data =await fetch("https://randomuser.me/api/?results=20");

                const result = await data.json();

                // console.log(result.results);
                setDatas(result.results)


                
            } catch (error) {
                alert("There is error in server please try after some time")
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

    // console.log(startEnd["end"],startEnd["start"])
    // console.log("the data is")
    // console.log(data)

    // console.log(editing)



    
  return (
    <section className='w-full       ' style={{padding:"15px 0px"}} >
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
                       className=' w-[60%] border-[1px] rounded-2xl   border-orange-400 hover:bg-orange-500 hover:text-white hover:scale-105 transition-all-[1s] cursor-pointer '>
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
                                    style={{padding:"10px 5px"}}>Country</th>

                                    <th className='last:rounded-tr-2xl w-[60%] md:w-[100%]  md:text-xm text-sm text-center bg-gray-500  border-b-[1px] border-gray-300 '>
                                        Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data.slice(startEnd["start"],startEnd["end"]).map((ele,index)=>{
                                        return(
                                            <TableRow  key={index}   ele={ele}  editing={editing} setEditing={setEditing}  handleEditing={handleEditing} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
                            
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
  )
}

export default AddEmploy