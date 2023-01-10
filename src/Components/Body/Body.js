import React, {useEffect, useState,useContext} from 'react'
// import axios from "axios"
import Cards from '../Cards/Cards';
import Slider from "react-slick";
import "./Body.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clothes from './Clothing.jpg'
import Electric from './Electronics.jpg'
import Jewelry from './Jewelry.jpg'
import Loading from '../Loading/Loading';
import { ThemeContext } from '../API/Context';


const Body = () => {
const {state}= useContext(ThemeContext)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  const [load, setLoad] = useState(true)

  useEffect(()=>{
    setLoad(false)
  },)
  return (
    <div className="Body-holder">
     {
      load? <Loading/> :   <div className='slider-holder'>
         <div className="slider" style={{color: state? 'white' :undefined}} >
      <Slider {...settings}>
        <div className="slider-div">
          <h2>Get Clothes</h2>
          <img src={clothes} alt="clothes" className="slider-image" />
        </div>
        <div className="slider-div">
          <h2>Get Jewelries</h2>
          <img src={Jewelry} alt="jewelry" className="slider-image" />
        </div>
        <div className="slider-div">
          <h2>Get Electronics</h2>
          <img src={Electric} alt="electronics" className="slider-image" />
        </div>
      </Slider>
    </div>
    <Cards/>
      </div>
     }
    </div>
  )
}

export default Body