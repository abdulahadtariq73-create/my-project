import Mainlayout from '../component/Mainlayout';
import axios from 'axios';
import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import dealData from '../data/deal/deal';

const fallbackAudioProducts = [
  { id: 'audio-1', name: 'Wireless Speaker', price: 34999, rating: 5, image: dealData[5].image1, subcategory: 'speaker' },
  { id: 'audio-2', name: 'Home Audio Pro', price: 28999, rating: 4, image: dealData[9].image1, subcategory: 'Homeaudio' },
  { id: 'audio-3', name: 'Noise Cancelling Headphone', price: 31999, rating: 5, image: dealData[8].image1, subcategory: 'headphone' },
  { id: 'audio-4', name: 'Bluetooth Speaker', price: 19999, rating: 4, image: dealData[6].image1, subcategory: 'speaker' },
  { id: 'audio-5', name: 'Studio Headset', price: 25999, rating: 5, image: dealData[7].image1, subcategory: 'headphone' },
  { id: 'audio-6', name: 'Smart Soundbar', price: 42999, rating: 5, image: dealData[1].image1, subcategory: 'Homeaudio' },
];

const Audioproduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getallproduct = async () => {
    setLoading(true);

    try {
      const response = await axios.get('https://6a2b211eb687a7d5cbc4e1f3.mockapi.io/product');
      const audioproduct = response.data.filter((item) => {
        const typeText = String(item.type || '').toLowerCase();
        return typeText.includes('audio') || typeText.includes('speaker') || typeText.includes('headphone');
      });

      setProducts(audioproduct.length ? audioproduct : fallbackAudioProducts);
    } catch (error) {
      setProducts(fallbackAudioProducts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getallproduct();
  }, []);

  const speakers = products.filter((item) => String(item.subcategory || '').toLowerCase().includes('speaker'));
  const Homeaudio = products.filter((item) => String(item.subcategory || '').toLowerCase().includes('homeaudio') || String(item.subcategory || '').toLowerCase().includes('home'));
  const headphone = products.filter((item) => String(item.subcategory || '').toLowerCase().includes('headphone'));

  const renderProducts = (data) =>
    data.map((product) => (
      <div key={product.id} className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="rounded-2xl bg-slate-50 p-3">
          <img src={product.image} alt={product.name} className="h-44 w-full rounded-xl object-cover" />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <h3 className="text-base font-bold text-slate-900">{product.name}</h3>
          <Link to={`/products/${product.id}`} className="rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white hover:bg-sky-700">
            View
          </Link>
        </div>

        <p className="mt-3 text-xl font-black text-red-500">PKR {product.price}</p>
        <div className="mt-3 flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar key={star} className={star <= Number(product.rating) ? 'text-yellow-400' : 'text-slate-300'} />
          ))}
        </div>
      </div>
    ));

  return (
    <Mainlayout>
      <div className="section-shell py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Audio collection</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Audio Products</h1>
        </div>

        {loading ? (
          <div className="mt-10 text-center">
            <Spin size="large" />
          </div>
        ) : (
          <div className="space-y-10">
            <section>
              <h2 className="mb-5 text-2xl font-bold text-slate-900">Home Audio</h2>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{renderProducts(Homeaudio)}</div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-slate-900">Speakers</h2>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{renderProducts(speakers)}</div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-slate-900">Headphones</h2>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{renderProducts(headphone)}</div>
            </section>
          </div>
        )}
      </div>
    </Mainlayout>
  );
};

export default Audioproduct;
