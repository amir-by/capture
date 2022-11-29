import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto h-screen p-4 pt-20 text-center'>
      <h1 className="font-bold text-3xl py-4 ">Let's Work together</h1>
    <form className='max-w-[600px] m-auto  '>
        
        <div className="grid sm:grid-cols-2   gap-2">
          <input className='shadow-lg border p-3 rounded-md' type="text" placeholder='Name' />
          <input className='shadow-lg border p-3 rounded-md' type="email" placeholder='Email@gmail.com' />
        </div>

        <input className=' rounded-md w-full p-3 my-3' type="text" placeholder='Subject' />
        <textarea className='shadow-lg border p-3 w-full'  cols="30" rows="10" placeholder='Message'></textarea>
        <input type="submit" value="Submit" className='bg-red-900 w-full mt-2 p-3 hover:bg-red-700 duration-300 hover:scale-105  shadow-lg border rounded-md font-bold text-white cursor-pointer ' />


      
      
    </form>

    
    </div>
  )
}

export default Contact
