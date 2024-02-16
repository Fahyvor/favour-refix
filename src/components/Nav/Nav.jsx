import React from 'react'
import ElreyLogo  from '../../assets/elreyLogo.png'

const Nav = () => {
  return (
    <div className='w-full flex px-11 my-5 bg-white md:px-4'>
     <div className='nav_left_logo flex gap-4 m-3 items-center justify-center w-[35%]'>
      <img src={ElreyLogo} alt='Elrey' className='w-[15%]'/>
      <h2 className='text-2xl tracking-wider'>Elrey</h2>
     </div>

     <div className='nav_right_links flex gap-11 m-3 w-[65%] items-center'>
      <a href='/' className=' text-gray-950 hover:text-blue-700'>Home</a>
      <a href='/' className=' text-gray-950 hover:text-blue-700'>About</a>
      <a href='/' className=' text-gray-950 hover:text-blue-700'>Service</a>
      <a href='/' className=' text-gray-950'>Blog</a>
      <a href='/' className=' text-gray-950'>Portfolio</a>
      <a href='/' className='text-white bg-amber-500 rounded-l-2xl rounded-b-2xl p-2
      px-5 items-center justify-center'>Contact</a>
     </div>
    </div>
  )
}

export default Nav