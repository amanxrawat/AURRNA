import React from 'react'
import { FaHandHoldingHeart as CareIcon, FaShippingFast as ShippingIcon } from "react-icons/fa";
import { AiOutlineSafetyCertificate as ShieldIcon } from "react-icons/ai";

const FeatureBanner = () => {
  return (
    <div className='border-y p-4 flex-col gap-3 border-gray-200 flex bg-dark sm:flex-row justify-around'>

      <div className='mx-auto '>
        <div className='flex flex-col justify-center'>
          <CareIcon className='icon' />
          <p className='icon-text'>Each item is meticulously crafted and expertly designed for quality.</p>
        </div>
      </div>

      <div className='mx-auto '>
        <div className='flex flex-col justify-center'>
          <ShippingIcon className='icon' />
          <p className='icon-text'>Accessories are quickly shipped with great attention to detail.</p>
        </div>
      </div>

      <div className='mx-auto '>
        <div className='flex flex-col justify-center'>
          <ShieldIcon className='icon' />
          <p className='icon-text'>No chemicals used for processing of material</p>
        </div>
      </div>

    </div>
  )
}

export default FeatureBanner
