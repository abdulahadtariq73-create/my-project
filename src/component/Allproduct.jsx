import React from 'react'
import { Link } from 'react-router-dom'
import audio from "../images/allproductimages/Audio_4.png"
import cameras from "../images/allproductimages/Cameras-_-Camcoderss_6.png"
import cellphone from "../images/allproductimages/Cell-phones_1.png"
import computer from "../images/allproductimages/computers-_-accessories.png"
import drones from "../images/allproductimages/Drones_-toys_2.png"
import health from "../images/allproductimages/Health_-fitness_-beauty_1.png"
import home from "../images/allproductimages/Home-_-Office_2.png"
import tv from "../images/allproductimages/TV-_-Video_2.png"
import video from "../images/allproductimages/Video-games_4.png"
const Allproduct = () => {
  return (
    <div className='bg-gray-200 px-5 flex py-5  items-center mt-5 md:mt-10 '>
      <div>
        <ul className=' grid grid-cols-2  sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4'>
            {/* 1st */}
            <li className='bg-white text-center rounded-2xl  py-5'>
                <Link to="/audioproducts" className=''>
                    <img src={audio} alt="" className='h-40'/>
                    <p className='text-blue-600'>Audio</p>
                </Link>
            </li>
            {/* 2nd */}
                       <li className='bg-white text-center rounded-2xl  py-5'>
                <Link to="/cameras" className=''>
                    <img src={cameras} alt="" className='h-40'/>
                    <p className='text-blue-600'>Camera,camcorder & photo</p>
                </Link>
            </li>
            {/* 3rd */}
              <li className='bg-white text-center rounded-2xl  py-5'>
                <Link to="/cellphone" className=''>
                    <img src={cellphone} alt="" className='h-40'/>
                    <p className='text-blue-600'>Cell Phones, Tablets & Accessories</p>
                </Link>
            </li>
             {/* 4th */}
              <li className='bg-white text-center rounded-2xl  py-5'>
                <Link className=''>
                    <img src={drones    } alt="" className='h-40'/>
                    <p className='text-blue-600'>Drones & Toys</p>
                </Link>
            </li>
             {/* 5th */}
              <li className='bg-white text-center rounded-2xl  py-5'>
                <Link className=''>
                    <img src={computer} alt="" className='h-40'/>
                    <p className='text-blue-600'>Computers & Accessories</p>
                </Link>
            </li>
             {/* 6th */}
              <li className='bg-white text-center rounded-2xl  py-5'>
                <Link className=''>
                    <img src={health} alt="" className='h-40'/>
                    <p className='text-blue-600'>Health, Fitness & Beauty</p>
                </Link>
            </li>

              {/* 7th */}
              <li className='bg-white text-center rounded-2xl  py-5'>
                <Link className=''>
                    <img src={home} alt="" className='h-40'/>
                    <p className='text-blue-600'>Home & Office</p>
                </Link>
            </li>
             {/* 8th */}
              <li className='bg-white text-center rounded-2xl  py-5'>
                <Link className=''>
                    <img src={tv} alt="" className='h-40'/>
                    <p className='text-blue-600'>TV & Video</p>
                </Link>
            </li>
              {/* 9th */}
              <li className='bg-white text-center rounded-2xl  py-5'>
                <Link className=''>
                    <img src={video} alt="" className='h-40'/>
                    <p className='text-blue-600'>Gaming</p>
                </Link>
            </li>




        </ul>
      </div>
    </div>
  )
}

export default Allproduct
