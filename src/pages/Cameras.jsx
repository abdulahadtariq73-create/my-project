import Mainlayout from '../component/Mainlayout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import dealData from '../data/deal/deal';

const fallbackCameraProducts = [
  { id: 'camera-1', name: 'Mirrorless Camera', price: 89999, rating: 5, image: dealData[6].image1, subcategory: 'cameras' },
  { id: 'camera-2', name: 'Action Camera', price: 45999, rating: 4, image: dealData[7].image1, subcategory: 'camcorders' },
  { id: 'camera-3', name: 'Professional DSLR', price: 129999, rating: 5, image: dealData[6].image2, subcategory: 'cameras' },
  { id: 'camera-4', name: '4K Vlogging Cam', price: 74999, rating: 4, image: dealData[7].image2, subcategory: 'camcorders' },
];

const Cameras = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoding] = useState(false);

  const getAllProduct = async () => {
    setLoding(true);
    try {
      const response = await axios.get('https://6a2b211eb687a7d5cbc4e1f3.mockapi.io/product');
      const cameraProduct = response.data.filter((item) => {
        const typeText = String(item.type || '').toLowerCase();
        return typeText.includes('camera') || typeText.includes('camcorder');
      });
      setProduct(cameraProduct.length ? cameraProduct : fallbackCameraProducts);
    } catch (error) {
      setProduct(fallbackCameraProducts);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const cameras = products.filter((item) => String(item.subcategory || '').toLowerCase().includes('camera'));
  const camcorders = products.filter((item) => String(item.subcategory || '').toLowerCase().includes('camcorder'));

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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Camera collection</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Camera Products</h1>
        </div>

        {loading ? (
          <div className="mt-10 text-center">
            <Spin size="large" />
          </div>
        ) : (
          <div className="space-y-10">
            <section>
              <h2 className="mb-5 text-2xl font-bold text-slate-900">Cameras</h2>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{renderProducts(cameras)}</div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-slate-900">Camcorders</h2>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{renderProducts(camcorders)}</div>
            </section>
          </div>
        )}
      </div>
    </Mainlayout>
  );
};

export default Cameras;
