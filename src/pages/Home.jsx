import React from 'react';
import Mainlayout from '../component/Mainlayout';
import Slider from '../component/Slider';
import Jeniunproduct from '../component/Jeniunproduct';
import Dealsproduct from '../component/Dealsproduct';
import Allproduct from '../component/Allproduct';
import Bodyproducts from '../component/Bodyproducts';
import Featuredbrand from '../component/Featuredbrand';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Mainlayout>
      <div className="bg-slate-100">
        <section className="mx-auto max-w-7xl px-4 py-6 lg:px-6 lg:py-10">
          <div className="grid items-center gap-6 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 p-6 text-white shadow-2xl lg:grid-cols-[1.3fr_0.7fr] lg:p-10">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                New season arrivals
              </p>
              <h1 className="max-w-xl text-4xl font-black leading-tight text-white md:text-5xl">
                Upgrade your life with smarter tech.
              </h1>
              <p className="mt-4 max-w-lg text-base text-slate-200 md:text-lg">
                Discover premium audio, cameras, mobile devices, and top deals curated for modern living.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/deals"
                  className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-200"
                >
                  Shop deals
                </Link>
                <Link
                  to="/featured"
                  className="rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore brands
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Fast shipping</p>
                <p className="mt-3 text-3xl font-black">24h</p>
                <p className="text-sm text-slate-200">Delivery on selected items</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Top brands</p>
                <p className="mt-3 text-3xl font-black">150+</p>
                <p className="text-sm text-slate-200">Trusted products</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Slider />
          <Jeniunproduct />
          <Dealsproduct />
          <Allproduct />
          <Bodyproducts />
          <Featuredbrand />
        </div>
      </div>
    </Mainlayout>
  );
};

export default Home;
