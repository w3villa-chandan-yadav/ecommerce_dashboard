import React from 'react'

const Login = () => {

  return (
    <div className='w-[90%]  h-[90%] mx-auto grid place-items-center'>
        <div className='bg-gray-300 rounded-3xl gap-8 flex flex-col items-center justify-center' style={{padding:"20px"}}>
            <h2 className='merriweather text-xl font-bold'>Information</h2>
            <div className=' flex gap-4'>
                <input className='border-[1px] otuline-none border-gray-500 rounded-xl'
                style={{padding:"7px 5px"}}
                placeholder='Enter first name' />
                <input className='border-[1px] border-gray-500 outline-none rounded-xl'
                 style={{padding:"7px 5px"}}
                placeholder='Enter last name' />
            </div>
            <div className=' flex gap-4'>
            <input
            placeholder='Enter Email'
            className='border-[1px] outline-none border-gray-500 rounded-xl'
            style={{padding:"7px 5px"}}

                />
                 <input
                 placeholder='Enter Phone no.'
                 className='border-[1px] outline-none  border-gray-500 rounded-xl'
                 style={{padding:"7px 5px"}}

                />
            </div>
            

            <div className=' flex gap-4'>
            <input
            placeholder='Enter Password'
            className='border-[1px]  border-gray-500 outline-none rounded-xl'
            style={{padding:"7px 5px"}}

                />
                 <input
                 placeholder='confirm Password '
                 className='border-[1px]  border-gray-500 outline-none rounded-xl'
                 style={{padding:"7px 5px"}}

                />
            </div>

            <button
            onClick={()=>{
                alert("Data submited")
            }}
            className='bg-gray-400 hover:bg-gray-600 cursor-pointer w-full rounded-2xl' style={{padding:"10px 0px"}}>
                submit
            </button>

        </div>
    </div>
  )
}

export default Login