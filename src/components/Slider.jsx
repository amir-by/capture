import React from 'react'
import borabora from '../assets/borabora.jpg'
import borabora2 from '../assets/borabora2.jpg'
import keywest from '../assets/keywest.jpg'
import maldives from '../assets/maldives.jpg'
import maldives3 from '../assets/maldives3.jpg'

const Slider = () => {
   return (
       <div className='w-full mx-auto py-16 bg-black/60 px-8 '>
          <h1 className='text-center font-bold text-3xl pb-8'>Gallery</h1>

          <div className="grid md:grid-cols-3  lg:grid-cols-5 gap-4 cursor-pointer">
            <img className='col-span-2 md:row-span-2 md:col-span-3 rounded-lg  hover:scale-105 duration-300 h-full w-full object-cover' src={borabora} alt="/" />
            <img className='rounded-lg  hover:scale-105 duration-300 h-full w-full object-cover' src={borabora2} alt="/" />
            <img className='rounded-lg  hover:scale-105 duration-300 h-full w-full object-cover' src={keywest} alt="/" />
            <img className='rounded-lg  hover:scale-105 duration-300 h-full w-full object-cover' src={maldives} alt="/" />
            <img className='rounded-lg  hover:scale-105 duration-300 h-full w-full object-cover' src={maldives3} alt="/" />
          </div>
        
      
     </div>
  )
}

export default Slider
