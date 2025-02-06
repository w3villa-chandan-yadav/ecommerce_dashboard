import React, { useEffect, useState } from 'react';
import { IoMdStopwatch } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import {Chart as ChartJs} from "chart.js/auto";
import {Bar,Doughnut,Line ,} from "react-chartjs-2"
import { MdNavigateNext } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from 'react-router-dom';






const data=[
  {heading:"Create a style guide",
    subHeading:"Style guide for the business",
    timt:"Updated in 5 Hours ago",
    hoverTile:["Styling","Bussines","More"]
  },
  {heading:"Project Dashboard",
    subHeading:"Create a dashboard design",
    timt:"Updated in 5 Hours ago",
    hoverTile:["Create New","Older one"]
  },
 
  {heading:"Create wireframe",
    subHeading:"Wireframe from the agency",
    timt:"Updated in 5 Hours ago",
    hoverTile:["Wireframes","Created","New"]
  },
  {heading:"Conduct user research",
    subHeading:"Conduct user research",
    timt:"Updated in 5 Hours ago",
    hoverTile:["Know MOre"]
  }
]
const data2=[
  {heading:"Create a style guide",
    subHeading:"Style guide for the business",
    timt:"Updated in 5 Hours ago"
  },
  {heading:"Project Dashboard",
    subHeading:"Create a dashboard design",
    timt:"Updated in 5 Hours ago"
  },]
  
  const datass = [{gain:[400,800,1200,500,300,700,400,700,300,350,550],
    loos:[453,664,745,653,523,354,464,574,735,253,775]
  },
  {gain:[70,30,52,60,60,20,80,35,35,150,50],
    loos:[35,69,38,65,78,89,95,32,64,89,44,25]
  },
  {gain:[243,250,100,260,320,370,200,340,240,420,150],
    loos:[534,653,765,675,743,655,776,757,345,634,723]
  },
  {gain:[40,80,60,70,20,20,40,20,10,50,50],
    loos:[35,69,38,65,78,89,95,32,64,89,44,25]
  }]
const Change = () => {
const [months,setMonths] =useState(0);
const [indexs,setIndexs] =useState(datass[0])
 function getDatasetAtEvent(){
     const newArray = datass.filter((_,id)=>{
      return id ===months
     })
  //  console.log(newArray[0])
   newArray[0]
     setIndexs(newArray[0])
 }
 useEffect(() => {
  getDatasetAtEvent();
}, [months]); 
const handleClick =(e)=>{
 alert("Developement is in progress")
}
// console.log(window.innerWidth)

  return (
    <div className=' w-[97%] h-[99%] max-w-[1300px]   mx-auto custom-paddinginner'>
    <div className='w-full h-full relative'>
      <div className='text-gray-700 merriweather-bold '>
        <h3>Dashboards {"->"} Overwive</h3>
      </div>
        <div className='w-full  grid  grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 custom-margin  gap-[10px] '>
              {
                data.map((item,index)=>{
                  return(
          <div key={index} className='bg-whitee w-full flex flex-col justify-between   rounded-2xl custom-padding' style={{paddingBottom:"17px"}}>
            <div className='flex justify-between items-center'>
            <h3 className='merriweather-bold font-[500] text-sm lg:text-base text-gray-700'>{item.heading}</h3><span className='relative group hover:bg-gray-300 rounded-full h-[20px] cursor-pointer w-[20px] grid place-items-center'><IoMdMore /> 
             <div className=' absolute bg-gray-300 right-0 top-[38%] rounded-2xl text-center  w-[140px] flex-col  z-30  hidden group-hover:flex ' style={{padding:"10px 4px"}}>
              {
                item.hoverTile.map((ele,indexx)=>{
                  return <Link
                  key={indexx}
                  onClick={handleClick}
                   className='hover:bg-gray-500 bg-gray-200 rounded-2xl' style={{padding:"10px 5px",margin:"5px 0px"}}>
                    {ele}
                    </Link>
                })
              }
             </div>
            </span>                                    
              </div>
            <h4 className='merriweather-bold  font-[300]  text-[11px] text-gray-500 padding-y'>{item.subHeading}</h4>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2 merriweather-bold  font-[400] text-[10px] lg:text-xs text-gray-800 '>
                  <IoMdStopwatch/> {item.timt}
              </div>           
           <div className=''>
              <div className='relative w-8 h-8 rounded-full  '>
                  <img src={"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"} 
                   className='w-full h-full  object-cover rounded-full'/>
                  <img src={"https://www.shutterstock.com/shutterstock/photos/2151833739/display_1500/stock-photo-portrait-of-a-young-latin-woman-with-pleasant-smile-and-crossed-arms-isolated-on-grey-wall-with-2151833739.jpg"} 
                   className='absolute -left-[18px] top-2 w-full h-full  object-cover rounded-full'/>
              </div>
              </div>
            </div>
          </div>)
                })
              }                                           
          {/* <div className='bg-red-400 row-span-2 col-span-2 grid-row w-full h-[170px]'>
            this is the div2
          </div> */}        
        </div>
        <div className='w-full   grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[10px]'>
          <div className='bg-whitee merriweather-regular text-sm  text-gray-700 font-semibold w-full h-[290px] rounded-3xl custom-padding'>
           Monthly Target
           <div className='w-full flex justify-center h-[230px] '>
              <Doughnut
                  data={{
                    labels:["Profit","loss","Maintane"],  
                    // label:"hidden",
                    datasets:[{
                      label:"Revenue",
                      data:[400,800,1200],
                      borderRadius:5
                    },                  
                  ]
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                      // x: {
                      //   ticks: {
                      //     display: false, 
                      //   }
                      // }
                    },
                    plugins: {
                      legend: {
                        display: true,  // Hides the legend
                        position:"bottom"
                        
                      },
                      tooltip: {
                        enabled: false,  // Hides tooltips
                        // style:{
                          
                        // }
                      }
                    }
                  }}
              />
           </div>
          </div>            
          <div className='bg-whitee lg:col-span-2 overflow-hidden w-full h-[290px] rounded-3xl merriweather-regular text-sm font-semibold custom-padding ' style={{paddingBottom:"10px"}} >
         <div className='flex justify-between items-center ' style={{margin:"3px 0px"}}>
          <p className='text-gray-700'> Monthly Target</p>
          <div className='flex gap-3'>
            {
              ["12 Months","30 Days","7 Days","24 Hours"].map((item,index)=>{
                return(
                  <button key={index}
                  onClick={(e)=>setMonths(index)}
                  className={`button-paddingg ${index===months && "bg-orange-500 "} merriweather-bold font-medium text-[10px] lg:text-xs cursor-pointer  rounded-md`}>{item}</button>
                )
              })
            }
          </div>
         </div>
           <div className='w-full flex justify-center h-[210px] lg:h-[230px] '>            
             <Bar            
             className='flex-1'
             data={              
              {
              labels:["Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],
              datasets:[
          
            {
                label:"Revenue",
                data:indexs.gain,
                // barThickness:12,
                backgroundColor: function (context) {
                  const chart = context.chart;
                  const ctx = chart.ctx;
                  const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
                  gradient.addColorStop(0, 'orange');
                  gradient.addColorStop(1, 'red');
                  return gradient;
                },
                borderRadius:5,
                barThickness:`${(() => {                                
                  const newWidth = window.innerWidth;                
                  if (newWidth < 790 && newWidth > 600) {
                    return 6
                  } else if(newWidth < 400) {
                    // console.log("inside bar thickness")
                    return 7
                  }else{
                    return 12
                  }
                })()}`,
              },{
                label:"lose",
                // barThickness:12,
                barThickness:`${(() => {                                
                  const newWidth = window.innerWidth;                
                  if (newWidth < 790 && newWidth > 600) {
                    return 6
                  } else if(newWidth < 400) {
                    // console.log("inside bar thickness")
                    return 7
                  }else{
                    return 12
                  }
                  })()}`,              
                data:indexs.loos,
                borderRadius:5,
                backgroundColor:["gray"]
              },                      
            ]
             }}
             options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  ticks: {
                    display: true,  
                  }
                }
              },
              plugins: {
                legend: {
                  display: false,  
                },
                tooltip: {
                  enabled: true,  
                }               
              }
            }}
             />
           </div> 
           </div>           
          <div className='bg-whitee w-full  merriweather-regular text-sm font-semibold rounded-3xl custom-padding'>
            <div className='flex justify-between items-center ' style={{marginBottom:"20px"}}>           
               <h3 className='text-gray-700'>Project Summary</h3>
               <IoMdMore className='font-bold  text-xl rounded-full cursor-pointer hover:bg-gray-300'/> 
            </div>
              <div className='flex justify-center items-center gap-5 flex-col border-[2px] border-gray-300 rounded-2xl box-mar-pad'>
              <div className='flex justify-between items-center gap-1 w-full'>
              <div className='flex justify-start items-center gap-1'>
                    <div className='w-10 h-10 rounded-full grid place-items-center bg-orange-200'>
                            <BsFillPersonPlusFill className='text-orange-300 text-[17px]'/>
                    </div>
                    <div>
                      <h3 className='font-medium lg:text-base text-xs text-gray-700'>Tddo App  </h3>
                      <h4 className=' text-[10px] lg:text-xs font-light text-gray-700'>19 Members</h4>
                   </div>
                  </div>
                   <div>
                     <MdNavigateNext className='text-2xl text-gray-400 font-light rounded-full cursor-pointer hover:bg-gray-300'/> 
                   </div>
                </div>                 
                <div className='flex justify-between items-center gap-1  w-full'>
              <div className='flex justify-start items-center gap-1 '>
                    <div className='w-10 h-10 grid place-items-center  rounded-full text-blue-500  bg-blue-200'>
                    <PiUsersThreeBold className='text-[17px]' />
                    </div>
                    <div>
                      <h3 className='font-medium lg:text-base text-xs text-gray-700'>Homies SASS Aplicaiton  </h3>
                      <h4 className=' text-[10px] lg:text-xs font-light text-gray-700'>24 Members</h4>
                   </div>
                  </div>
                   <div>
                     <MdNavigateNext className='text-2xl text-gray-400 font-light rounded-full cursor-pointer hover:bg-gray-300'/> 
                   </div>
                </div>
              </div>
              <div className='flex justify-center items-center gap-5 flex-col border-[2px] border-gray-300 rounded-2xl box-mar-pad'>
              <div className='flex justify-between items-center gap-1 w-full'>
              <div className='flex justify-start items-center gap-1'>
                    <div className='w-10 h-10 rounded-full grid place-items-center bg-orange-200'>
                    <BsFillPersonPlusFill className='text-orange-300 text-[17px]'/>
                    </div>
                    <div>
                    <h3 className='font-medium lg:text-base text-xs text-gray-700'>In Progress </h3>
                    <h4 className=' text-[10px] lg:text-xs font-light text-gray-700'>22 Projects</h4>
                   </div>
                  </div>
                   <div>
                     <MdNavigateNext className='text-2xl text-gray-400 font-light rounded-full cursor-pointer hover:bg-gray-300'/> 
                   </div>
                </div>                 
                <div className='flex justify-between items-center gap-1  w-full'>
              <div className='flex justify-start items-center gap-1 '>
                    <div className='w-10 h-10 grid place-items-center  rounded-full text-blue-500  bg-blue-200'>
                    <PiUsersThreeBold className='text-[17px]' />
                    </div>
                    <div>
                      <h3 className='font-mediumlg:text-base text-xs text-gray-700'>Completed  </h3>
                      <h4 className=' text-[10px] lg:text-xs font-light text-gray-700'>10 Projects</h4>
                   </div>
                  </div>
                   <div>
                     <MdNavigateNext className='text-2xl rounded-full cursor-pointer hover:bg-gray-300 text-gray-400 font-light'/> 
                   </div>
                </div>
              </div>
          </div>         
          <div className='w-full bg-whitee h-[300px]  md:h-full merriweather-regular text-sm font-semibold rounded-3xl custom-padding'>
            <div className='flex justify-between items-center ' style={{marginBottom:"13px"}}>           
               <h3 className='text-gray-700'>Project Summary</h3>
               <IoMdMore className='font-bold  text-xl rounded-full cursor-pointer hover:bg-gray-300'/> 
            </div>
            <div className='w-full  h-[75%]'>
            <Doughnut
  data={{
    datasets: [{
      label: "Data",
      data: [70, 30],  
      borderRadius: 10,
      cutout: '65%',
      borderColor: "transparent",
      backgroundColor: (context) => {
        const index = context.dataIndex;
        const chart = context.chart;
        const ctx = chart.ctx;
        // Apply gradient only to the first slice
        if (index === 0) {
          const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, 'purple'); 
          gradient.addColorStop(1, 'blue');    
          return gradient;
        }
        return "gray";
      },
    },
    {
      label: "Data",
      data: [80, 20], 
      borderRadius: 10,
      cutout: '58%',
      borderColor: "transparent",
      backgroundColor: (context) => {
        const index = context.dataIndex;
        const chart = context.chart;
        const ctx = chart.ctx;
        // Apply gradient only to the first slice
        if (index === 0) {
          const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, 'blue');  // Start color of gradient
          gradient.addColorStop(1, 'pink');     // End color of gradient
          return gradient;
        }
        // Apply static color to the second slice
        return "gray";
      },
    },{
      label: "Data",
      data: [60, 40],  // First slice has 70, second slice has 30
      borderRadius: 10,
      cutout: '54%',      
      borderColor: "transparent",
      backgroundColor: (context) => {
        const index = context.dataIndex;
        const chart = context.chart;
        const ctx = chart.ctx;
        // Apply gradient only to the first slice
        if (index === 0) {
          const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, 'orange');  // Start color of gradient
          gradient.addColorStop(1, 'red');     // End color of gradient
          return gradient;
        }
        // Apply static color to the second slice
        return "gray";
      },
    }
  ]
  }}
  options={{
    responsive: true,
    maintainAspectRatio: false,
    // cutout: '60%',
    plugins: {
      legend: {
        display: true,  // Hides the legend
        position:"bottom",
        // backgroundColor:"red"  
      },
      tooltip: {
        enabled: true,  // Hides tooltips
      },
      elements: {
        arc: {
          // Adjust spacing by changing borderWidth
          // borderWidth: 4,  // Add spacing between slices
        }
      },
    }
  }}
/>
            </div>
          </div>


          <div className='bg-whitee w-full  merriweather-regular text-sm font-semibold rounded-3xl custom-padding'>
            <div className='flex justify-between items-center ' style={{marginBottom:"20px"}}>           
               <h3 className='text-gray-700'>Daily Tasks</h3>
                <button style={{padding:"5px 16px"}} className='bg-gray-400 hover:bg-gray-600 cursor-pointer   rounded-3xl text-gray-300'> Today</button>
            </div>
            {
                data2.map((item,index)=>{
                  return(
          <div key={index} className='bg-whitee w-full h-[130px] lg:text-base md:text-sm text-xs rounded-2xl  border-[2px] border-gray-300' style={{padding:"15px 7px",margin:"10px 0px"}}>
            <div className='flex justify-between items-center'>
            <h3 className='merriweather-bold font-[500] text-gray-700'>{item.heading}</h3> 
            
              </div>
            <h4 className='merriweather-bold  font-[300] text-[11px] text-gray-500 padding-y'>{item.subHeading}</h4>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2 merriweather-bold  font-[400] text-[10px] lg:text-xs text-gray-800 '>
                  <IoMdStopwatch/> {item.timt}
              </div>
           
           <div>
              <div className='relative w-8 h-8 rounded-full  '>
                  <img src={"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"} className='w-full h-full  object-cover rounded-full'/>
                  <img src={"https://www.shutterstock.com/shutterstock/photos/2151833739/display_1500/stock-photo-portrait-of-a-young-latin-woman-with-pleasant-smile-and-crossed-arms-isolated-on-grey-wall-with-2151833739.jpg"} className='absolute -left-[18px] top-2 w-full h-full  object-cover rounded-full'/>

              </div>
              </div>


            </div>
          </div>)
                })
              }
          </div>

        
          {/* <div className='bg-red-400 row-span-2 col-span-2 grid-row w-full h-[170px]'>
            this is the div2
          </div> */}
          


        </div>

         </div>

         </div>


)
}

export default Change