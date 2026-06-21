import React from 'react'
import body1 from "../images/bodyimages/body1.png"
import body2 from "../images/bodyimages/body2.png"
import body3 from "../images/bodyimages/body3.png"
import body4 from "../images/bodyimages/body4.png"
import body5 from "../images/bodyimages/body5.png"
const Bodyproducts = () => {
  return (
    <div className='  mt-8 bg-white border border-gray-300 py-10'>
      <div className='mx-auto container'>
          <div className=' grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-5'>
               {/* 1stbodyproduct */}
            <div className='space-y-3'>
                {/* 1st */}
                  <div className='w-full'>
               <img src={body1} alt="" />
               <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[13px]'>True Wireless  Earbud  Headphones <br />
Wireless sound starts on Tejar</p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
              </div>
 {/* 2nd */}
                <div className='w-full'>
               <img src={body2} alt="" />
               <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[15px]'>Over-Ear & On-Ear Wireless Headphones <br />
Wireless sound, all day at Tejar</p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
              </div>
            </div>
             {/* 2ndbodyproduct */}
             <div>
                <div className='w-full'>
               <img src={body3} alt="" className='h-full'/>
               <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[15px]'>Floorstanding Speakers
 <br />
Big sound starts at Tejar.</p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
              </div>
             </div>

               {/* 3rdtbodyproduct */}
            <div className='space-y-3'>
                {/* 1st */}
                  <div className='w-full'>
               <img src={body4} alt="" />
               <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[13px]'>Portable Bluetooth Speakers
 <br />
Take the music anywhere with Tejar.</p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
              </div>
 {/* 2nd */}
                <div className='w-full'>
               <img src={body5} alt="" />
               <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[15px]'>Soundbars
<br />
Hear every detail with Tejar</p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
              </div>
            </div>
          </div>
      </div> 
    </div>
  )
}

export default Bodyproducts
