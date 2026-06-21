import React from 'react'
 import Mainlayout from '../component/Mainlayout'
import Slider from "../component/Slider"

import Jeniunproduct from '../component/Jeniunproduct'
import Dealsproduct from '../component/Dealsproduct'
import Allproduct from '../component/Allproduct'
import Bodyproducts from '../component/Bodyproducts'
import Featuredbrand from '../component/Featuredbrand'
const Home = () => {
  return (
    <Mainlayout>
         <Slider/>
        <Jeniunproduct/>
        <Dealsproduct/>
        <Allproduct/>
        <Bodyproducts/>
        <Featuredbrand/>
        
    </Mainlayout>
  )
}

export default Home
