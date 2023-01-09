import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Details.css";
import { Link, useParams } from "react-router-dom"
import Loading from '../Loading/Loading';
const Details = ({color}) => {
  const { id } = useParams()
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false)

  async function getProducts() {
    try {
      setLoad(true)
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      console.log(res.data);
      setProducts(res.data)
      setLoad(false)
    } catch (error) {
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

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className="Details-Holder" style={{backgroundColor: color? 'white': null}} >
     {
      load? <Loading/>:  <div className="Details-Card">
      <div className="Details-Image-Holder">
        <img src={products.image} alt="productImage" className="Detail-Image" />
      </div>
      <div className="Details-details">
        <div className='Detail-desc'>
          <h3>title: {products.title}</h3>
          <p>Category: {products.category}</p>
          <p>Description: {products.description}</p>
          <br />
        </div>
        <div className='Detail-bottom'>
          <div className='price'>
            <h4>Price: ₦ {products.price}</h4>
            <h5>Rating: 3.5</h5>
            </div>
          <Link className="Cart-Button" to={'/cart'}>
            <button>Add to cart</button>
          </Link>
        </div>
      </div>
      </div>
     }
    </div>
  )
}

export default Details