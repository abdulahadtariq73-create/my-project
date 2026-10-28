import React from 'react';
import { Link } from 'react-router-dom';
import audio from '../images/allproductimages/Audio_4.png';
import cameras from '../images/allproductimages/Cameras-_-Camcoderss_6.png';
import cellphone from '../images/allproductimages/Cell-phones_1.png';
import computer from '../images/allproductimages/computers-_-accessories.png';
import drones from '../images/allproductimages/Drones_-toys_2.png';
import health from '../images/allproductimages/Health_-fitness_-beauty_1.png';
import home from '../images/allproductimages/Home-_-Office_2.png';
import tv from '../images/allproductimages/TV-_-Video_2.png';
import video from '../images/allproductimages/Video-games_4.png';

const categories = [
  { name: 'Audio', image: audio, path: '/audio' },
  { name: 'Camera, Camcorder & Photo', image: cameras, path: '/camera' },
  { name: 'Cell Phones & Accessories', image: cellphone, path: '/cellphone' },
  { name: 'Drones & Toys', image: drones, path: '/deals' },
  { name: 'Computers & Accessories', image: computer, path: '/featured' },
  { name: 'Health, Fitness & Beauty', image: health, path: '/featured' },
  { name: 'Home & Office', image: home, path: '/featured' },
  { name: 'TV & Video', image: tv, path: '/deals' },
  { name: 'Gaming', image: video, path: '/featured' },
];

const Allproduct = () => {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">Shop by category</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Top categories</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">
        {categories.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="group rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-md"
          >
            <div className="flex h-28 items-center justify-center rounded-2xl bg-white p-2">
              <img src={item.image} alt={item.name} className="h-20 object-contain" />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-700 group-hover:text-sky-700">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Allproduct;
