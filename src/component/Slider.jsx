import React from 'react'
import slider1 from "../images/sliderimages/slider1.jpg"
import slider2 from "../images/sliderimages/slider2.jpg"
import slider3 from "../images/sliderimages/slider3.jpg"
import slider4 from "../images/sliderimages/slider4.jpg"
import slider5 from "../images/sliderimages/slider5.jpg"
import slider6 from "../images/sliderimages/slider6.jpg"
import slider7 from "../images/sliderimages/slider7.jpg"
import slider8 from "../images/sliderimages/slider8.jpg"
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slider = () => {
  return (
    <div>
      <Carousel autoplay arrows id='slider'>
    <div>
      <img src={slider1} alt="" />
    </div>
    <div>
    <img src={slider2} alt="" />
    </div>
     <div>
    <img src={slider3} alt="" />
    </div>
     <div>
    <img src={slider4} alt="" />
    </div>
      <div>
      <img src={slider5} alt="" />
    </div>
    <div>
    <img src={slider6} alt="" />
    </div>
     <div>
    <img src={slider7} alt="" />
    </div>
     <div>
    <img src={slider8} alt="" />
    </div>
  </Carousel>
    </div>
  )
}

export default Slider
