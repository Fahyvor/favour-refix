import React from 'react'
import Fahyvor from '../../assets/ME.jpg'
import { FaCirclePlay } from "react-icons/fa6";


const Body = () => {
  return (
    <div className='px-24 mt-6 flex gap-5 justify-between md:px-10 max-sm:flex-col w-full'>
     <div className='body_left mt-10 pl-9'>
      <h6 className='font-semibold text-2xl my-5 tracking-wider max-sm:w-full'>I'm Favour Okafor</h6>
      <h2 className='text-2xl font-bold tracking-wider'>Web, Mobile, Blockchain</h2>
      <h2 className='text-6xl font-bold mt-1 tracking-wider'>Developer</h2>

      <div className='hire_me flex gap-10 mt-10 items-center'>
       <div className='hire_me_button bg-amber-400 text-white py-1 px-5 rounded-full text-center cursor-pointer'>
        <p className='font-medium tracking-wider'>Hire Me</p>
       </div>
       <FaCirclePlay size={30} />
      </div>
     </div>

     <div className='body_right pr-8'>
      <div className='overflow-hidden rounded-full h-[25rem]
      w-[25rem] flex justify-center'>
       <img src={Fahyvor} alt='Me' className='' />
      </div>
     </div>
    </div>
  )
}

export default Body