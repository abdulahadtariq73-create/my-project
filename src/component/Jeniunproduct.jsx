import React from 'react'
import { FaRegThumbsUp } from 'react-icons/fa'
import { TbRosetteDiscount, TbTruckDelivery } from 'react-icons/tb'

const Jeniunproduct = () => {
  return (
    <div>
      <div className='bg-white border border-gray-400  '>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 md:space-x-1'>
            {/* ist */}
               <div className='flex items-center md:justify-center  gap-6 border-r border-gray-300 h-full py-2'>

<FaRegThumbsUp size={30}/>
<p className='text-gray-800'>100% Genuine Products</p>
               </div>
                 {/* 2st */}
               <div className='flex items-center md:justify-center  gap-6 border-r border-gray-300 h-full py-2'>

<TbRosetteDiscount size={30}/>
<p className='text-gray-800'>Discounts Offered Every Day</p>
               </div>
                 {/* 3st */}
               <div className='flex items-center md:justify-center gap-6 border-r border-gray-300 h-full py-2'>

<TbTruckDelivery size={30}/>
<p className='text-gray-800'>Free Shipping on Orders over PKR 4900
</p>
               </div>
        </div>
      </div>
    </div>
  )
}

export default Jeniunproduct
