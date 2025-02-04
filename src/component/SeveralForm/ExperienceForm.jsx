import React, { useState } from 'react';
import { BsEmojiGrinFill } from "react-icons/bs";
import { BsEmojiExpressionlessFill } from "react-icons/bs";
import { BsEmojiFrownFill } from "react-icons/bs";


const reviewss =[
  {
    sno:0,
    rating:"4/5",
    review:"Nice service"
  },
  {
    sno:1,
    rating:"3/5",
    review:"Nice service"
  },
  {
    sno:2,
    rating:"2/5",
    review:"Nice service"
  },
  {
    sno:3,
    rating:"5/5",
    review:"Nice service"
  },
  {
    sno:4,
    rating:"3/5",
    review:"Nice service"
  }
]


const ExperienceForm = () => {

  const [revieww,setRewieww] = useState(reviewss)
  const [activeEMoj,setActiveEmoj] = useState(0);
  const [text,setText] = useState("")

  const handleSubmit =(e)=>{

    if(e.key === "Enter" && e.target.value.trim() != ""){
      // console.log("enter enter")
      if(!activeEMoj){

        alert("please select a emote")
        return
      }

      setRewieww([...reviewss,{
        sno:reviewss.at(-1).sno+1,
        rating:`${activeEMoj}/5`,
        review:text
      }])

      alert('Review submited Thanks')
      setText("")
      setActiveEmoj(0)
      return ;
     }

    //  console.log(e.key)
    //  console.log("event does't register")

    
  }


  return (
    <section className='w-full ' style={{padding:"15px 0px"}} >
        <div className='w-[90%] mx-auto bg-whitee rounded-2xl flex flex-col' style={{padding:"10px 20px"}} > 
                  <h2 className='text-center merriweather md:text-2xl lg:text-5xl font-bold'>Overall Experince</h2>
                  <p className=' merriweather md:text-xl text-sm lg:text-2xl font-light border-b-[1px] border-gray-400' 
                  style={{margin:"20px 0px",padding:"10px 0px"}}>What was your total experince to use this website.</p>
                  <div className='flex justify-between items-center max-h-[200px] h-full overflow-  '>

                   
                    <div
                     className='flex flex-1 flex-col items-center  gap-1 md:gap-4 h-full '>
                      <BsEmojiFrownFill 
                     onClick={()=>setActiveEmoj(2)}
                     className={`text-xl ${activeEMoj === 2 && "text-orange-500"} md:text-3xl lg:text-8xl hover:text-gray-700 cursor-pointer`}/>
                        disgusting
                    </div>

                    <div 
                    className='flex flex-1 flex-col items-center  gap-1 md:gap-4 h-full'>
                      <BsEmojiExpressionlessFill 
                      onClick={()=>setActiveEmoj(3)}
                      className={`text-xl ${activeEMoj === 3 && "text-orange-500"} md:text-3xl lg:text-8xl hover:text-gray-700 cursor-pointer`}/>
                      sad
                    </div>

                    <div className='flex flex-1 flex-col items-center  gap-1 md:gap-4 h-full '>
                      <BsEmojiGrinFill
                      onClick={()=>setActiveEmoj(4)}
                      className={`text-xl ${activeEMoj === 4 && "text-orange-500"} md:text-3xl lg:text-8xl hover:text-gray-700 cursor-pointer`}/>
                    <p>happy </p>
                    </div>

                    

                  </div>
               <div style={{margin:"20px 0px"}}>
                <h4 className='' style={{margin:"10px 0px 5px 0px"}}>Reviews</h4>
                <textarea
                value={text}
                onChange ={(e)=>setText(e.target.value)}
                onKeyDown={(e)=>handleSubmit(e)}
                className=" h-full min-h-[100px] w-full resize-none rounded-md border bg-transparent text-sm outlin-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  focus:border-2 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 "
                placeholder="Please submit reviews"></textarea>
               </div>
               <div style={{margin:"10px 0px"}}>                
               </div>
                <div className='' style={{margin:"20px 0px "}}>
                        <table className='w-full text-center table-fixed'>
                            <thead className=' border-collapse  border-none' style={{padding:"10px 5px"}}>
                                <tr className='border-collapse border-none  rounded-t-2xl'>
                                    <th className='text-left border-collapse border-b-[1px] border-gray-300  bg-gray-500 first:rounded-tl-2xl merriweather text-sm md:text-xl font-semibold text-gray-300' 
                                    style={{padding:"10px 5px"}}>Index</th>
                                    <th className='text-left border-collapse  border-b-[1px] border-gray-300  bg-gray-500 merriweather text-sm md:text-xl  font-semibold text-gray-300' 
                                    style={{padding:"10px 5px"}}>Points</th>
                                 
                                    <th className='last:rounded-tr-2xl bg-gray-500 text-center text-sm md:text-xl   border-b-[1px] border-gray-300 '>
                                        Review</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                              revieww.map((elemenwt)=>{
                                return(
                                  <tr  key={elemenwt.sno} className='border-collapse border-none '>
                                    <th className='text-center w-[40%] border-collapse border-b-[1px] border-gray-900    merriweather text-sm font-light text-gray-600' 
                                    style={{padding:"10px 5px"}}>{elemenwt.sno}</th>
                                    <th className='text-left border-collapse  border-b-[1px] border-gray-900   merriweather text-sm font-light text-gray-600'
                                    style={{padding:"10px 5px"}}>{elemenwt.rating}</th>
                                    <th className='text-center border- border-b-[1px] border-gray-900   merriweather text-sm font-light text-gray-600'
                                    style={{padding:"10px 5px"}}>
                                         {elemenwt.review}
                                    </th>                             
                                </tr>
                                )
                              })
                            }
                            </tbody>
                        </table>
                    </div>
            </div>
    </section>

             )
}

export default ExperienceForm