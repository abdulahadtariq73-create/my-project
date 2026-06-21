 import Mainlayout from "../component/Mainlayout";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Spin } from "antd";
import { FaStar } from "react-icons/fa";
import { BiLeftArrow } from "react-icons/bi";
import { useContext } from "react";
import Authcontext from "../context/Authcontext";
const Productdetails = () => {

const { addCart } = useContext(Authcontext);

  const navigator = useNavigate()
 const back = () =>{
     navigator(-1)
 }


 const [cart,setCart] = useState([])

   const addcart = (product) => {
  let updatecart = [...cart,product] ;
  setCart(updatecart)
  }

      const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

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
      <div className="text-center mt-10">
        <Spin size="large" />
      </div>
    );
  }
  return (

   <Mainlayout cart={cart}>

   <div className="min-h-screen bg-gradient-to-r from-black to-gray-700 p-10">
      <div className="max-w-5xl mx-auto bg-gradient-to-l from-black to-green-700 rounded-xl shadow-lg p-8">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Image */}
          <div>
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full rounded-lg"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl font-bold text-white">
              {product?.name}
            </h1>

            <p className="text-red-600 text-2xl mt-4">
              PKR {product?.price}
            </p>

           

           
            <div className="flex gap-1 mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={
                    star <= Number(product?.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
           <div className="flex gap-4 items-center mt-8">
                      <button onClick={()=>addCart(product)} className=" bg-gradient-to-r from bg-yellow-500 to-green-800 text-white px-6 py-3 rounded-lg">
              Add To Cart
            </button>
                    <div className="flex items-center gap-2 bg-gradient-to-l from-yellow-500 to-green-800  px-6 py-3 rounded-lg text-white">
                        <BiLeftArrow className=""/>
                        <button onClick={back} className="font-bold">Back</button>
                    </div>
           
           </div>
           
          </div>

        </div>
      </div>
    </div>
   </Mainlayout>


   
  )
}

export default Productdetails
