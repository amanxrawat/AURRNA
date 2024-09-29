import React from 'react'

const ProductCard = ({ image, title, price, discount }) => {
  return (
    <div className=' w-60 flex flex-col border border-gray-200 gap-1'>
      <div className='h-72 p-2 items-center mx-auto rounded-md'>
        <img src={image} className='h-72 rounded-md' />
      </div>
      <div className='p-2 m-1'>
        <p className='absolute translate-y-[-60px] bg-white text-dark w-20 border-purple border text-center'>{discount}% off</p>
        <h2 className='font-Corm text-xl'>{title}</h2>
        <span>₹{price * 10} only/-</span>
      </div>
    </div>
  )
}

export default ProductCard
