import React from 'react'
import Fahyvor from '../../assets/ME.jpg'
import { FaCirclePlay } from "react-icons/fa6";


const Body = () => {
  return (
    <div className='px-24 lg:mt-24 md:mt-24 flex gap-5 justify-between md:px-10 max-sm:flex-col w-full max-sm:px-6 max-sm:pt-20'>
     <div className='body_left mt-28 pl-12 '>
      <h6 className='font-semibold text-2xl my-5 tracking-wider max-sm:w-full'>I'm Favour Okafor</h6>
      <h2 className='text-2xl font-bold tracking-wider'>Web, Mobile, Blockchain</h2>
      <h2 className='text-6xl font-bold mt-1 tracking-wider'>Developer</h2>

      <div className='hire_me flex gap-10 mt-10 max-sm:mt-6 items-center'>
       <div className='hire_me_button bg-amber-500 text-white py-1 px-5 rounded-full text-center cursor-pointer'>
        <p className='font-medium tracking-wider'>Hire Me</p>
       </div>
       <FaCirclePlay size={30} />
      </div>
     </div>

     <div className='body_right pr-8 max-sm:pr-0 max-sm:w-full max-sm:flex max-sm:justify-center max-sm:mt-1 p-5 max-sm:p-2'>
     <div className='bg-blue-100 bg-opacity-10 p-8 rounded-full flex justify-center items-center'>
      <div className='bg-blue-200 bg-opacity-10 p-6 rounded-full flex justify-center items-center'>
          <div className='bg-blue-300 bg-opacity-10 p-6 rounded-full flex justify-center items-center'>
            <div className=' bg-blue-400 bg-opacity-10 p-4 rounded-full flex justify-center items-center'>
              <div className='overflow-hidden rounded-full h-[25rem] items-center
              w-[25rem] flex justify-center max-sm:h-[15rem] max-sm:w-[15rem]'>
              <img src={Fahyvor} alt='Me' className='' />
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Body