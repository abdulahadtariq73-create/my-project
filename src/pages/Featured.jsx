import React from 'react';
import Mainlayout from '../component/Mainlayout';
import feature1 from '../images/featuredbrand/1.jpg';
import feature2 from '../images/featuredbrand/2.jpg';
import feature3 from '../images/featuredbrand/3.jpg';
import feature4 from '../images/featuredbrand/4.jpg';
import feature5 from '../images/featuredbrand/5.png';
import feature6 from '../images/featuredbrand/6.png';
import feature7 from '../images/featuredbrand/7.jpg';
import feature8 from '../images/featuredbrand/8.jpg';
import feature9 from '../images/featuredbrand/9.jpg';

const brands = [
  { name: 'ASUS', description: 'Gaming & productivity', image: feature1 },
  { name: 'Fujifilm', description: 'Photography essentials', image: feature2 },
  { name: 'SteelSeries', description: 'Audio & gaming gear', image: feature3 },
  { name: 'Bang & Olufsen', description: 'Luxury sound design', image: feature4 },
  { name: 'Ugreen', description: 'Smart accessories', image: feature5 },
  { name: 'Canon', description: 'Professional imaging', image: feature6 },
  { name: 'Intel', description: 'Performance hardware', image: feature7 },
  { name: 'Nikon', description: 'Precision optics', image: feature8 },
  { name: 'Sony', description: 'Audio & imaging', image: feature9 },
];

const Featured = () => {
  return (
    <Mainlayout>
      <div className="section-shell py-12">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Featured brands</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Trusted technology leaders</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {brands.map((brand) => (
            <div key={brand.name} className="deal-card overflow-hidden p-4">
              <img src={brand.image} alt={brand.name} className="h-56 w-full rounded-2xl object-cover" />
              <div className="mt-4">
                <h2 className="text-xl font-black text-slate-900">{brand.name}</h2>
                <p className="mt-2 text-sm text-slate-600">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Mainlayout>
  );
};

export default Featured;
