  import Mainlayout from '../component/Mainlayout';

  
  
  import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Spin } from "antd";


const Cameras = () => {
  const [products,setProduct] = useState([])
  const [loading,setLoding] = useState (false)

const getAllProduct = async () => {
  setLoding(true)
  try {
       const response = await axios.get("https://6a2b211eb687a7d5cbc4e1f3.mockapi.io/product");
       const cameraProduct = response.data.filter ((item)=>
        item.type === "camera"
       );
       setProduct(cameraProduct)
  } catch (error){
        console.log(error)
  } finally {
    setLoding(false)
  }
};

const deleteItem = async (id)=>{
  setLoding(true)
  try {
    await axios.delete(`https://6a2b211eb687a7d5cbc4e1f3.mockapi.io/product/${id}`)
    getAllProduct()
  } catch (error){
    console.log(error)
  } finally {
    setLoding(false)
  }
};
useEffect(()=>{
  getAllProduct()
},[])


const cameras = products.filter((item) => 
  item.subcategory === "cameras")

const camcorders = products.filter(
  (item)=> item.subcategory === "camcorders");

  const renderProducts = (data) =>
      data.map((product) => (
        <div
          key={product.id}
          className="border border-gray-400 p-4 bg-gradient-to-l from-black to-green-700 rounded-lg relative group"
        >
          <h1 className="text-center text-2xl text-white">
            {product.name}
          </h1>
          <div className=" text-white  bg-blue-400 flex justify-center items-center absolute left-1/2 top-1/2 transition-all duration-300 rounded-[4px] px-4 opacity-0 group-hover:opacity-100  ">
             <Link to={`/products/${product.id}`}>View</Link>
          </div>
             
          <img
            src={product.image}
            alt={product.name}
            className="w-full  object-cover mt-3 "
          />
  
          <p className="text-center text-red-500 font-semibold mt-2">
            PKR {product.price}
          </p>
  
         
  
          
        </div>
      ));
  

  return (

          <Mainlayout>


                   <div className="mt-5 px-5  bg-gradient-to-l from-black to-gray-500">
      <div className="">
        <h1 className="text-4xl text-white">
          Camera Products
        </h1>

        {/* Dynamic Create Route */}
       
      </div>

      { loading ? (
        <div className="text-center mt-5">
          <Spin/>
        </div>) : (
          <div>
                           <h2 className="text-3xl text-white mt-10 mb-5">
Camera      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {renderProducts(cameras)}
      </div>


      {/* Speakers */}
      <h2 className="text-3xl text-white mt-10 mb-5">
        CamCorders
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {renderProducts(camcorders)}
      </div>
          </div>
        
     
 ) }  

    
   
    </div>
            </Mainlayout>
  )
      
}

export default Cameras
