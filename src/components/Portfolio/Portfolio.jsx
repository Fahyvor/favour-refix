import React from 'react'
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.png'
import portfolio4 from '../../assets/portfolio4.png'
import portfolio5 from '../../assets/portfolio5.png'
import portfolio6 from '../../assets/portfolio6.png'
import portfolio7 from '../../assets/portfolio7.png'

const Portfolio = () => {
  return (
    <div className='w-full px-24 mt-8'>
     <h3 className='text-center font-semibold'>I Have A Great Portfolio To Check</h3>
     <p></p>

     <div className='portfolio_images_links mt-8 grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-4'>
      <div className='portfolio_1'>
        <div className='portfolio_1_image'>
          <img src={portfolio1} alt='' />
        </div>

        <div className='portfolio_1_details'>

        </div>
      </div>

      <div className='portfolio_2'>
        <div className='portfolio_2_image'>
          <img src={portfolio2} alt='' />
        </div>

        <div className='portfolio_2_details'>

        </div>
      </div>

      <div className='portfolio_3'>
        <div className='portfolio_3_image'>
          <img src={portfolio3} alt='' />
        </div>

        <div className='portfolio_3_image'>

        </div>
      </div>

      <div className='portfolio_4'>
        <div className='portfolio_4_image'>
          <img src={portfolio4} alt='' />
        </div>

        <div className='portfolio_4_details'>

        </div>
      </div> 

      <div className='portfolio_5'>
        <div className='portfolio_5_image'>
          <img src={portfolio5} alt='' />
        </div>

        <div className='portfolio_5_details'>

        </div>
      </div>

      <div className='portfolio_6'>
        <div className='portfolio_6_image'>
          <img src={portfolio6} alt='' />
        </div>

        <div className='portfolio_6_details'>

        </div>
      </div>

      <div className='portfolio_7'>
        <div className='portfolio_7_image'>
          <img src={portfolio7} alt='' />
        </div>

        <div className='portfolio_7_details'>

        </div>
      </div>
     </div>

     <div className='portfolio_order bg-amber-600 w-[20%] mt-8 rounded-full text-white text-center font-semibold
     tracking-wider py-1 mx-auto'>
      <p>Start your project</p>
     </div>
    </div>
  )
}

export default Portfolio