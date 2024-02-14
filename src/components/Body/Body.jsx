import React from 'react'
import Fahyvor from '../../assets/ME.jpg'


const Body = () => {
  return (
    <div className='px-20 flex gap-5 justify-between'>
     <div className='body_left'>
      <h6>I'm Favour Okafor</h6>
      <h2>Web, Mobile and Blockchain</h2>
      <h2>Developer</h2>

      <div className='hire_me'>
       <div className='hire_me_button'>
        <p>Hire Me</p>
       </div>

       
      </div>
     </div>

     <div className='body_right'>
      <div className='overflow-hidden rounded-full h-[30rem]
      w-[30rem]'>
       <img src={Fahyvor} alt='Me' className='' />
      </div>
     </div>
    </div>
  )
}

export default Body