import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import feature1 from "../images/featuredbrand/1.jpg"
import feature2 from "../images/featuredbrand/2.jpg"
import feature3 from "../images/featuredbrand/3.jpg"
import feature4 from "../images/featuredbrand/4.jpg"
import feature5 from "../images/featuredbrand/5.png"
import feature6 from "../images/featuredbrand/6.png"
import feature7 from "../images/featuredbrand/7.jpg"
import feature8 from "../images/featuredbrand/8.jpg"
import feature9 from "../images/featuredbrand/9.jpg"
const Featuredbrand = () => {
  return (
    <div className='bg-white mt-4 border border-gray-300  py-4'>
        <div className='container mx-auto'>
                    <h1 className='text-3xl text-gray-900'>Featured Brands</h1>
                                 <div>
                                     <Swiper
      modules={[Navigation]}
      navigation
      loop = {true}
      slidesPerView={4}
       slidesPerGroup={1}
      spaceBetween={15}
         breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 4,
          },
        }}

    >
        {/* 1st */}
      <SwiperSlide>
        <div className="">
<img src={feature1} alt="" />
     <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[13px]'>
                ASUS
 </p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
 </div>
      </SwiperSlide>

       {/* 2st */}
      <SwiperSlide>
        <div className="">
<img src={feature2} alt="" />
     <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[13px]'>
                fujifilm
 </p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
 </div>
      </SwiperSlide>
        {/* 3st */}
      <SwiperSlide>
        <div className="">
<img src={feature3} alt="" />
     <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[13px]'>
                SteelSeries
 </p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
 </div>
      </SwiperSlide>

        {/* 4st */}
      <SwiperSlide>
        <div className="">
<img src={feature4} alt="" />
     <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[13px]'>
                Bang & Olufsen
 </p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
 </div>
      </SwiperSlide>

        {/* 5st */}
      <SwiperSlide>
        <div className="">
<img src={feature5} alt="" />
     <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[13px]'>
                Ugreen
 </p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
 </div>
      </SwiperSlide>
  {/* 6st */}
      <SwiperSlide>
        <div className="">
<img src={feature6} alt="" />
     <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[13px]'>
                Canon
 </p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
 </div>
      </SwiperSlide>

        {/* 7st */}
      <SwiperSlide>
        <div className="">
<img src={feature2} alt="" />
     <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[13px]'>
                Intel
 </p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
 </div>
      </SwiperSlide>

        {/* 8st */}
      <SwiperSlide>
        <div className="">
<img src={feature8} alt="" />
     <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[13px]'>
                Nikon
 </p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
 </div>
      </SwiperSlide>

        {/* 9st */}
      <SwiperSlide>
        <div className="">
<img src={feature9} alt="" />
     <div className='mt-2 border border-gray-300 p-4 border-t-0 flex items-center justify-between'>
                <p className='text-gray-800 text-[13px]'>
                sony
 </p>
                    <button className='border border-gray-400 p-2 text-blue-700 hover:text-blue-900 transition-all'>Shop Now</button>
               </div>
 </div>
      </SwiperSlide>
    </Swiper>
                                 </div>
        </div>
       
       
    </div>
  )
}

export default Featuredbrand
