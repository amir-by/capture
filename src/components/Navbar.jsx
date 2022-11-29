import React, { useEffect, useState } from 'react'
import {Link}  from 'react-router-dom'
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('magenta');

  useEffect(() => {
     const changeColor = () => {
      if(window.scrollY >90){
        setColor('#0044')
        setTextColor('white')
      }else{
        setColor('transparent')
        setTextColor('magenta')
      }
     }

     window.addEventListener('scroll', changeColor)
  }, []);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className={`fixed z-[10] w-full ease-in duration-300`} style={{backgroundColor:`${color}` }}  >
      <div className='text-white flex items-center justify-between p-4 max-w-[1240px] m-auto '>
         <h1 className='font-bold text-4xl'  style={{color:`${textColor}` }}>Brand.</h1> 

          <ul className='hidden sm:flex gap-8 '>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

        {/* Mobile button */}
        <div className={`sm:hidden z-[10] cursor-pointer `} style={{color:`${textColor}` }}  onClick={handleNav} >
          {nav? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
          
        </div>
     

        {/* Mobile menu */}
          <div className={nav ? `sm:hidden absolute top-0 left-0
           w-full h-screen flex justify-center items-center bg-black text-center
            duration-300 ease-in ` : `sm:hidden absolute top-0 left-[-100%]
            w-full h-screen flex justify-center items-center bg-black text-center
             duration-300 ease-in` }>
            <ul>
            <li className='p-4 text-4xl hover:text-gray-500' >Home</li>
            <li className='p-4 text-4xl hover:text-gray-500' >About</li>
            <li className='p-4 text-4xl hover:text-gray-500' >Contact</li>
            </ul>
          </div>

      </div>
    </div>
  )
}

export default Navbar
