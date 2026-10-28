import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import deal from "../data/deal/deal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Dealsproduct = () => {
  const [hover, setHover] = useState(null);

  return (
    <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm md:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">Limited-time offers</p>
          <h2 className="text-3xl font-black text-slate-900">Deals you can’t miss</h2>
        </div>
        <Link to="/deals" className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-100 md:inline-flex">
          View all deals
        </Link>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={18}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {deal.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              onMouseEnter={() => setHover(product.id)}
              onMouseLeave={() => setHover(null)}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-red-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  {product.h3}
                </span>
                <CiHeart size={22} className="cursor-pointer text-slate-500 transition group-hover:text-red-500" />
              </div>

              <img
                className="mt-3 h-48 w-full rounded-xl object-cover transition-all duration-500"
                src={hover === product.id ? product.image2 : product.image1}
                alt={product.Paragraph}
              />

              <p className="mt-3 text-sm font-semibold text-slate-800">{product.Paragraph}</p>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm text-slate-400 line-through">{product.pkr1}</span>
                <span className="text-sm font-bold text-red-600">{product.pkr2}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Dealsproduct;