import axios from 'axios'
import React, { useEffect, useState, } from 'react'
 import { Spin } from "antd";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Dealproducts = () => {

     const [products,setProducts] = useState([])
  const [ loading ,setLoading] = useState(false)

  const getallproducts = async () =>{
       setLoading(true)
    try{
        const response = await axios.get("https://6a2b211eb687a7d5cbc4e1f3.mockapi.io/product") ;
        const dealproducts = response.data.filter((item) =>
        item.type === "dealproduct")
        setProducts(dealproducts)

    } catch(error){
        console.log(error)
    } finally{
        setLoading(false)
    } 
  }

  const deleteitem = async (id) =>{
    try {
        await axios.delete(`https://6a2b211eb687a7d5cbc4e1f3.mockapi.io/product/${id}`)
        getallproducts()
    } catch (error) {
        console.log(error)
    }
  }
  
  useEffect(() => {
    getallproducts()
  },[])


  const speaker = products.filter((item)=>
    item.subcategory === "dealspeaker"
)

 const phone = products.filter((item)=>
    item.subcategory === "dealphone"
)
 const camera = products.filter((item)=>
    item.subcategory === "dealcamera"
)


// renderproducts


 const renderProducts = (data) =>
    data.map((product) => (
      <div
        key={product.id}
        className="border border-gray-400 p-4 bg-gradient-to-l from-black to-green-700 rounded-lg"
      >
        <h1 className="text-center text-2xl text-white">
          {product.name}
        </h1>
              
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mt-3 image"
        />

<div>
          <p className="text-center text-red-500 font-semibold mt-2">
          PKR {product.price}
        </p>

        <p className="text-center text-red-500 font-semibold mt-2">
          PKR {product["deal-price"]}
        </p>

</div>
        

        <div className="flex justify-center gap-1 mt-2">
          {[1.5, 2.5, 3.5, 4.5, 5].map((star) => (
            <FaStar
              key={star}
              className={
                star <= Number(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-400"
              }
            />
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => deleteitem(product.id)}
            className="bg-red-600 px-4 py-1 rounded text-white"
          >
            Delete
          </button>

          <Link
            to={`/dashboard/audio/edit/${product.id}`}
            className="bg-blue-600 px-4 py-1 rounded text-white"
          >
            Edit
          </Link>
        </div>
      </div>
    ));


  return (
    <div>
 <div className="mt-5 px-5">
      
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-white">
          Deals-Products
        </h1>

        <Link
          to="/dashboard/dealproduct/create"
          className="bg-amber-400 text-white px-4 py-2 rounded-md"
        >
          Create Product
        </Link>
      </div>

     
{ loading ? ( <div className="text-center mt-5">
          <Spin />
        </div>) : (
                    <div>
                   <h2 className="text-3xl text-white mt-10 mb-5">
        Phones
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {renderProducts(phone)}
      </div>


      {/* Speakers */}
      <h2 className="text-3xl text-white mt-10 mb-5">
        Cameras
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {renderProducts(camera)}
      </div>

      {/* Headphones */}
      <h2 className="text-3xl text-white mt-10 mb-5">
        Speaker
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {renderProducts(speaker)}
      </div>
       </div> 
        )}

      

  
        
    
       

    </div>    </div>
  )
}

export default Dealproducts
