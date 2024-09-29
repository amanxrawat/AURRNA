import React from 'react'
import ProductCard from "./../shared/ProductCard"

import { jeweleryProducts } from "./../../constants/sampleData"

const Trending = () => {
  return (
    <div className="py-8 border-y">
      <div className='flex flex-col'>
        <h1 className='text-5xl text-center font-Corm p-8'>Trending Now</h1>
        <div className='flex flex-row  items-center text-center p-2'>
          <div className='flex flex-row gap-4 mx-auto lg:justify-center justify-around flex-wrap'>
            {
              jeweleryProducts.map((item, index) => (
                <ProductCard {...item} key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
