import React from 'react'
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.png'
import portfolio4 from '../../assets/portfolio4.png'
import portfolio5 from '../../assets/portfolio5.png'
import portfolio6 from '../../assets/portfolio6.png'

const Portfolio = () => {
  return (
    <div className='w-full px-24 mt-8 max-sm:px-10' id='portfolio'>
     <h3 className='text-center font-semibold text-2xl tracking-wider'>I Have A Great Portfolio To Check</h3>
     <p></p>

     <div className='portfolio_images_links mt-8 grid lg:grid-cols-3 md:grid-cols-2 md:pl-7 max-sm:grid-cols-1 gap-6'>
      <div className='portfolio_1 p-3 bg-slate-100 rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg'>
        <div className='portfolio_1_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-slate-100
        hover:drop-shadow-lg'>
          <img src={portfolio1} alt='' className='object-cover rounded-xl'/>
        </div>

        <div className='portfolio_1_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor' className='bg-white px-3 drop-shadow-lg'>Github</a>
          <a href='https://homly-front-end.vercel.app/' className=''>Check Out The Site</a>
        </div>
      </div>

      <div className='portfolio_2 p-3 bg-slate-100 rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg'>
        <div className='portfolio_2_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-slate-100
        hover:drop-shadow-lg'>
          <img src={portfolio2} alt='' />
        </div>

        <div className='portfolio_2_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/PublicVersion' className='bg-white px-3 drop-shadow-lg'>Github</a>
          <a href='https://imponexpo-first-public-version.vercel.app/help' className=''>Check Out The Site</a>
        </div>
      </div>

      <div className='portfolio_3 p-3 bg-slate-100 rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg'>
        <div className='portfolio_3_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-slate-100
        hover:drop-shadow-lg'>
          <img src={portfolio3} alt='' />
        </div>

        <div className='portfolio_3_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor' className='bg-white px-3 drop-shadow-lg'>Github</a>
          <a href='https://www.doncodestech.com/' className=''>Check Out The Site</a>
        </div>
      </div>

      <div className='portfolio_4 p-3 bg-slate-100 rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg'>
        <div className='portfolio_4_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-slate-100
        hover:drop-shadow-lg'>
          <img src={portfolio4} alt='' />
        </div>

        <div className='portfolio_4_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/cmonlineradio/tree/master' className='bg-white px-3 drop-shadow-lg'>Github</a>
          <a href='https://cmonlineradio.com' className=''>Check Out The Site</a>
        </div>
      </div> 

      <div className='portfolio_5 p-3 bg-slate-100 rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg'>
        <div className='portfolio_5_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-slate-100
        hover:drop-shadow-lg'>
          <img src={portfolio5} alt='' />
        </div>

        <div className='portfolio_5_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/favour' className='bg-white px-3 drop-shadow-lg'>Github</a>
          <a href='https://favour-fqdb.vercel.app/' className=''>Check Out The Site</a>
        </div>
      </div>

      <div className='portfolio_6 p-3 bg-slate-100 rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg'>
        <div className='portfolio_6_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-slate-100
        hover:drop-shadow-lg'>
          <img src={portfolio6} alt='' />
        </div>

        <div className='portfolio_6_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/sharefood-ai' className='bg-white px-3 drop-shadow-lg'>Github</a>
          <a href='https://sharefood-ai.netlify.app/' className=''>Check Out The Site</a>
        </div>
      </div>
     </div>

     <div className='portfolio_order bg-pink-700 w-[20%] mt-8 rounded-full text-white text-center font-semibold
     tracking-wider py-1 mx-auto md:w-[35%] max-sm:w-1/2'>
      <p>Start your project</p>
     </div>
    </div>
  )
}

export default Portfolio