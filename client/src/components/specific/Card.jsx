import React from 'react'

const Card = ({ Name, Image, Gender, Material, Category, Price }) => {
  return (
    <div className=' w-60 flex flex-col border border-gray-200 gap-1'>
      <div className='h-72 p-2 items-center mx-auto rounded-md'>
        <img src={Image} className='h-72 rounded-md' />
      </div>
      <div className='p-2 m-1'>
        <p
          className='absolute translate-y-[-60px] bg-white text-dark w-20 border-purple border text-center'>{10}% off</p>
        <h2 className='font-Corm text-xl'>{Name}</h2>
        <h2 className='font-Corm text-xl'>{Gender}</h2>
        <h2 className='font-Corm text-xl'>{Material}</h2>
        <h2 className='font-Corm text-xl'>{Category}</h2>

        <span>₹{Price * 10} only/-</span>
      </div>
    </div>
  )
}

export default Card
