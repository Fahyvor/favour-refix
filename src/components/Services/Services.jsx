import React from 'react'

const Services = () => {
  return (
    <div className='px-8 w-full pb-7'>
     <h3 className='mt-10 text-center text-xl font-semibold tracking-wider'>Provide you with the best of Developement Services </h3>
     <p className='text-center'>What I Offer</p>

     <div className='service_cards grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-3 mt-12'>
      <div className='service_card flex flex-col items-center'>
       <div className='service_card_image'>

       </div>

       <h3 className='font-semibold tracking-wider'>Website Development</h3>
       <p className='text-center w-5/6'>E-commerce Sites, Personal Websites, School Websites, Company Websites, Blogs, Portfolio Websites, SEO</p>
      </div>

      <div className='service_card flex flex-col items-center'>
       <div className='service_card_image'>

       </div>

       <h3 className='font-semibold tracking-wider'>Mobile Development</h3>
       <p className='text-center w-5/6'>Hybrid Applications, Web Applications</p>
      </div>

      <div className='service_card flex flex-col items-center'>
       <div className='service_card_image'>

       </div>

       <h3 className='font-semibold tracking-wider'>Blockchain Development</h3>
       <p className='text-center w-5/6'>ERC20 Token, BEP20 Token, ERC721 Token, Smart Contract Audit, Token ICO</p>
      </div>
     </div>
    </div>
  )
}

export default Services