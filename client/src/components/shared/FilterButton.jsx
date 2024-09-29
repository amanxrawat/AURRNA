import React from 'react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge';

const FilterButton = ({ text, className = null }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className={twMerge('p-1 border w-fit', isActive && "font-bold", isActive && className)}>
      <button
        className='px-2'
        onClick={() => { setIsActive(!isActive) }}
      >
        {text}
      </button>
    </div >
  )
}

export default FilterButton
