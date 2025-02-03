import React, { useState } from 'react';
import { BsEmojiGrinFill } from "react-icons/bs";
import { BsEmojiExpressionlessFill } from "react-icons/bs";
import { BsEmojiFrownFill } from "react-icons/bs";
import { HiEmojiHappy } from "react-icons/hi";


const ExperienceForm = () => {
  const [activeEMoj,setActiveEmoj] = useState(null);
  const [text,setText] = useState("")
  return (
    <section className='w-full ' style={{padding:"15px 0px"}} >
        <div className='w-[90%] mx-auto bg-whitee rounded-2xl flex flex-col' style={{padding:"10px 20px"}} > 
                  <h2 className='text-center merriweather md:text-2xl lg:text-5xl font-bold'>Overall Experince</h2>
                  <p className=' merriweather md:text-xl text-sm lg:text-2xl font-light border-b-[1px] border-gray-400' 
                  style={{margin:"20px 0px",padding:"10px 0px"}}>What was your total experince to use this website.</p>
                  <div className='flex justify-between items-center max-h-[200px] h-full overflow-  '>
                    <div className='flex flex-1 flex-col items-center  gap-1 md:gap-4 h-full '>
                      <BsEmojiGrinFill
                      onClick={()=>setActiveEmoj(0)}
                      className={`text-xl ${activeEMoj === 0 && "text-orange-500"} md:text-3xl lg:text-8xl hover:text-gray-700 cursor-pointer`}/>
                    <p>happy </p>
                    </div>

                   
                    
                    <div 
                    className='flex flex-1 flex-col items-center  gap-1 md:gap-4 h-full'>
                      <BsEmojiExpressionlessFill 
                      onClick={()=>setActiveEmoj(1)}
                      className={`text-xl ${activeEMoj === 1 && "text-orange-500"} md:text-3xl lg:text-8xl hover:text-gray-700 cursor-pointer`}/>
                      sad
                    </div>

                    <div
                     className='flex flex-1 flex-col items-center  gap-1 md:gap-4 h-full '>
                      <BsEmojiFrownFill 
                     onClick={()=>setActiveEmoj(2)}
                     className={`text-xl ${activeEMoj === 2 && "text-orange-500"} md:text-3xl lg:text-8xl hover:text-gray-700 cursor-pointer`}/>
                        disgusting
                    </div>
                  </div>
               <div style={{margin:"10px 0px"}}>
                <h4>Reviews</h4>
                <textarea
                value={text}
                onChange ={(e)=>setText(e.target.value)}
                onKeyDown={(e)=>{
                         if(e.key === "Enter" && e.target.value.trim() != ""){
                          // console.log("enter enter")
                          if(activeEMoj >= 0){
                            alert("please select a emote")
                            return
                          }

                          alert('Review submited')
                          return ;
                         }
 
                        //  console.log(e.key)
                        //  console.log("event does't register")
                }}
                class=" h-full min-h-[100px] w-full resize-none rounded-md border bg-transparent text-sm outlin-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  focus:border-2 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 "
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
                            <tr className='border-collapse border-none  rounded-t-2xl'>
                                    <th className='text-left border-collapse border-b-[1px] border-gray-900    merriweather text-sm font-light text-gray-600' 
                                    style={{padding:"10px 5px"}}>Name</th>
                                    <th className='text-left border-collapse  border-b-[1px] border-gray-900   merriweather text-sm font-light text-gray-600'
                                    style={{padding:"10px 5px"}}>Name</th>
                                    <th className='text-center border- border-b-[1px] border-gray-900   merriweather text-sm font-light text-gray-600'
                                    style={{padding:"10px 5px"}}>
                                         Lorem ipsum dolor sit amet.
                                    </th>                             
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
    </section>

             )
}

export default ExperienceForm