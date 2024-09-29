import React from 'react'

const CartListItem = ({ Name, Image }) => {
  return (
    <div className='w-full p-2'>
      <div className='flex flex-row gap-2  items-center bg-white rounded-sm p-2'>
        <img src={Image} className='h-10 w-10 border p-1' />
        <h2 className='text-black'>{Name}</h2>
      </div>
    </div>
  )
}

export default CartListItem
