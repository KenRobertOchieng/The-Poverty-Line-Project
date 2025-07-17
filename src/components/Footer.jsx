import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='w-full bg-blue-950 h-[80px] m-auto py-5'>
      <div className='grid lg:grid-cols-2 lg:text-3xl'>
        <div className='pl-3'><h1>©2020 Epixolab.All rights resrved.</h1></div>
        <div className='grid grid-cols-4'>
          <div><a href=""></a><h1 className='text-white'><a href="">Portfolio</a></h1></div>
          <div><h1 className='text-white'><a href="">Pricing</a></h1></div>
          <div><h1 className='text-white'><a href="">How it Works</a></h1></div>
          <div><h1 className='text-white'><a href="">Networking</a></h1></div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Footer