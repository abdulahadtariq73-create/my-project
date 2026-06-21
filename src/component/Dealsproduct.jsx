import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import deal from "../data/deal/deal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Dealsproduct = () => {
  const [hover, setHover] = useState(null);

  return (
    <div className="py-6 px-5 bg-white mt-3 border border-gray-300">
      <h1 className="text-3xl text-gray-900 mb-5">
        Deals
      </h1>

      <Swiper
        modules={[Navigation]}
        navigation
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
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 7,
          },
        }}
      >
        {deal.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="border border-gray-300 p-2 bg-white"
              onMouseEnter={() => setHover(product.id)}
              onMouseLeave={() => setHover(null)}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-white bg-red-700 px-2 py-1 text-xs">
                  {product.h3}
                </h3>

                <CiHeart
                  size={22}
                  className="text-blue-600 cursor-pointer"
                />
              </div>

              <img
                className="mt-3 w-full transition-all duration-500"
                src={
                  hover === product.id
                    ? product.image2
                    : product.image1
                }
                alt=""
              />
               </div>

              <p className="text-[13px] mt-2 text-gray-900 font-bold ">
                {product.Paragraph}
              </p>

              <div className="flex items-center mt-2 gap-3">
                <p className="text-gray-500 line-through text-[13px]">
                  {product.pkr1}
                </p>

                <p className="text-red-700 text-[13px] font-semibold">
                  {product.pkr2}
                </p>
              </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Dealsproduct;