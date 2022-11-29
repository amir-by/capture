import React from 'react'

const Hero = () => {
  return (
    <div className='mb-[10px] flex justify-center items-center h-screen custom-img bg-cover bg-fixed bg-center'>
      {/* overlay */}
      <div className="bg-slate-900/70 absolute w-full h-full z-[2] " /> 
      <div className='z-[2] text-white'>
        <p className='text-5xl font-bold'>Heading</p>
        <p className='text-xl py-5'>Message</p>
        <button className='text-sm border px-8 py-2 rounded-lg'>Book Now</button>
      </div>
    </div>
  )
}

export default Hero
