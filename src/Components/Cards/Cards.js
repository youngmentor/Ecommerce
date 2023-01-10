import React, { useContext, useEffect, useState } from 'react'
import "./Cards.css"
import  axios  from 'axios';
import {Link} from "react-router-dom"
import Loading from '../Loading/Loading';
import { ThemeContext } from '../API/Context';
const Cards = ({color}) => {
  const {state}= useContext(ThemeContext)
  const [products, setProducts] = useState([]);
  const  [load, setLoad] = useState(true)
  async function getProducts(){
    try{
      setLoad(true)
      const res = await axios.get('https://fakestoreapi.com/products')
      console.log(res.data);
      setProducts(res.data)
      setLoad(false)
    }catch(error){
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div className="Card-Holder">
      <div className="Card-Item-Holder">
      {
     load ? <Loading color={color} />:products?.map((i)=>(
      <Link key={i.id} className='Card-place-holder' to={`/detail/${i.id}`} style={{backgroundColor: state? 'white': null}}>
        <div className='Card-Image-holder'>
          <img src={i.image} className='Card-Image'/>
        </div>
        <div className='Card-sDetail'>
          <p>{i.title}</p>
          <h4>Price:  ₦ {i.price}</h4>
          <h4>Ratings: 4.9</h4>
        </div>
      </Link>
    ))
      }
      </div>
    </div>
  )
}

export default Cards