import Mainlayout from '../component/Mainlayout';


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spin } from "antd";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cellphones = () => {
      const [products,setProducts] = useState([])
  const [ loading ,setLoading] = useState(false)
  const getAllproducts = async () =>{

    setLoading(true)
    try{
      const response = await axios.get("https://6a2b211eb687a7d5cbc4e1f3.mockapi.io/product") ;

        const cellphone = response.data.filter((item) =>
        item.type === "cellphone");
        setProducts(cellphone)
    } catch (error){
          console.log(error)
    } finally{
                setLoading(false)
    }
    
  }

  const deleteitem = async (id)=>{
     try{
      await axios.delete( `https://6a2b211eb687a7d5cbc4e1f3.mockapi.io/product/${id}`)
      getAllproducts()

     } catch (error){
      console.log(error)
     }
  }
  

  useEffect(()=>{
    getAllproducts()
  },[])

const iphone = products.filter(
  (item) => item.subcategory === "iphone")

  const samsung = products.filter(
    (item) => item.subcategory === "samsung")


       const ipaid = products.filter(
    (item) => item.subcategory === "ipaid")

    
    const renderProducts = (data) =>
    data.map((product) => (
      <div
        key={product.id}
        className="border border-gray-400 p-4 bg-gradient-to-l from-black to-green-700 rounded-lg group-[]: relative"
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
          className="w-full h-48 object-cover mt-3 image"
        />

        <p className="text-center text-red-500 font-semibold mt-2">
          PKR {product.price}
        </p>

       

       
      </div>
    ));
  return (
    <Mainlayout>
            <div>
     <div className="mt-5 px-5 bg-gradient-to-l from-black to-gray-500">
          
          <div className="">
            <h1 className="text-4xl text-white">
              cell-Phone-Products
            </h1>
    
           
          </div>
    
         
    { loading ? ( <div className="text-center mt-5">
              <Spin />
            </div>) : (
                        <div>
                       <h2 className="text-3xl text-white mt-10 mb-5">
            I-Phones
          </h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {renderProducts(iphone)}
          </div>
    
    
          {/* Speakers */}
          <h2 className="text-3xl text-white mt-10 mb-5">
            Sam-Sung
          </h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {renderProducts(samsung)}
          </div>
    
          {/* Headphones */}
          <h2 className="text-3xl text-white mt-10 mb-5">
            I-Paid
          </h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {renderProducts(ipaid)}
          </div>
           </div> 
            )}
    
          
    
      
            
        
           
    
        </div>    </div>
    </Mainlayout>

   
  )
}

export default Cellphones
