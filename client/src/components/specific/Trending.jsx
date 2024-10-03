import React from 'react'
import ProductCard from "./../shared/ProductCard"
import { twMerge } from 'tailwind-merge'

import { jeweleryProducts } from "./../../constants/sampleData"

const Trending = ({ className, width }) => {
  return (
    <div className={twMerge("py-8 border-y", className)}>
      <div className='flex flex-col'>
        <h1 className='text-5xl text-center font-Corm p-8'>Trending Now</h1>
        <div className='flex flex-row items-center text-center p-2'>
          <div className='flex flex-row gap-4 mx-auto lg:justify-evenly justify-evenly flex-wrap'>
            {
              jeweleryProducts.map((item, index) => (
                <ProductCard {...item} key={index} className={width} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
