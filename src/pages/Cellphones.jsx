import Mainlayout from '../component/Mainlayout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import dealData from '../data/deal/deal';

const fallbackCellphoneProducts = [
  { id: 'cell-1', name: 'iPhone 15 Pro', price: 219999, rating: 5, image: dealData[0].image1, subcategory: 'iphone' },
  { id: 'cell-2', name: 'Samsung S24', price: 179999, rating: 5, image: dealData[1].image1, subcategory: 'samsung' },
  { id: 'cell-3', name: 'Pixel Pro', price: 159999, rating: 4, image: dealData[2].image1, subcategory: 'iphone' },
  { id: 'cell-4', name: 'Galaxy A54', price: 119999, rating: 4, image: dealData[3].image1, subcategory: 'samsung' },
];

const Cellphones = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllproducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://6a2b211eb687a7d5cbc4e1f3.mockapi.io/product');
      const cellphone = response.data.filter((item) => {
        const typeText = String(item.type || '').toLowerCase();
        return typeText.includes('cell') || typeText.includes('phone');
      });
      setProducts(cellphone.length ? cellphone : fallbackCellphoneProducts);
    } catch (error) {
      setProducts(fallbackCellphoneProducts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllproducts();
  }, []);

  const iphone = products.filter((item) => String(item.subcategory || '').toLowerCase().includes('iphone'));
  const samsung = products.filter((item) => String(item.subcategory || '').toLowerCase().includes('samsung'));
  const ipad = products.filter((item) => String(item.subcategory || '').toLowerCase().includes('ipad'));

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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Mobile collection</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Cell Phone Products</h1>
        </div>

        {loading ? (
          <div className="mt-10 text-center">
            <Spin size="large" />
          </div>
        ) : (
          <div className="space-y-10">
            <section>
              <h2 className="mb-5 text-2xl font-bold text-slate-900">iPhones</h2>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{renderProducts(iphone)}</div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-slate-900">Samsung</h2>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{renderProducts(samsung)}</div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-slate-900">iPads</h2>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{renderProducts(ipad)}</div>
            </section>
          </div>
        )}
      </div>
    </Mainlayout>
  );
};

export default Cellphones;
