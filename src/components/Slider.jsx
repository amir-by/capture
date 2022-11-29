import React from 'react'
import {SliderData} from './SliderData'

const Slider = () => {
  console.log(SliderData);
  return (
    <div className='max-w-[1240px] mx-auto h-screen'>
        <h1 className='text-center font-bold text-3xl'>Gallery</h1>

        <div className='grid grid-cols-3 '>
          <div className="max-w-[600px]    ">
            {SliderData.map(({image},i)=>{
              return <img src={image} alt="" key={i} 
              className=" rounded-3xl my-4 grid grid-rows-2"/>
            })}
          </div>
        </div>

    </div>
  )
}

export default Slider
