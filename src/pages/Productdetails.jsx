import Mainlayout from "../component/Mainlayout";

import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Spin } from "antd";
import { FaStar } from "react-icons/fa";
import { BiLeftArrow } from "react-icons/bi";
import Authcontext from "../context/Authcontext";

const Productdetails = () => {
  const { addCart } = useContext(Authcontext);
  const navigator = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const back = () => navigator(-1);

  const getProduct = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://6a2b211eb687a7d5cbc4e1f3.mockapi.io/product/${id}`
      );

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) {
    return (
      <Mainlayout>
        <div className="mt-10 text-center">
          <Spin size="large" />
        </div>
      </Mainlayout>
    );
  }

  return (
    <Mainlayout>
      <div className="min-h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 p-5 md:p-10">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white/5 p-6 shadow-2xl backdrop-blur-sm md:p-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-lg">
              <img
                src={product?.image}
                alt={product?.name}
                className="h-[420px] w-full rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-col justify-center text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Featured product</p>
              <h1 className="mt-3 text-4xl font-black text-white">{product?.name}</h1>

              <p className="mt-4 text-3xl font-bold text-red-400">PKR {product?.price}</p>

              <div className="mt-5 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={
                      star <= Number(product?.rating)
                        ? "text-yellow-400"
                        : "text-slate-500"
                    }
                  />
                ))}
              </div>

              <p className="mt-5 max-w-md text-sm text-slate-200">
                Premium quality, reliable performance, and a design built for modern lifestyles.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => product && addCart(product)}
                  className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-yellow-300"
                >
                  Add To Cart
                </button>

                <button
                  onClick={back}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                >
                  <BiLeftArrow />
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

export default Productdetails;
