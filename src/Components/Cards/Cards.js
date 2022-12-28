import React, { useEffect, useState } from 'react'
import "./Cards.css"
import  axios  from 'axios';
import {Link} from "react-router-dom"

const Cards = ({theme}) => {
  const [products, setProducts] = useState([]);

  async function getProducts(){
    try{
      const res = await axios.get('https://fakestoreapi.com/products')
      console.log(res.data);
      setProducts(res.data)
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
        products?.map((i)=>(
          <Link key={i.id} className='Card-place-holder' to={`/detail/${i.id}`} style={{backgroundColor: theme? 'white': null}}>
            <div className='Card-Image-holder'>
              <img src={i.image} className='Card-Image'/>
            </div>
            <div className='Card-Details'>
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