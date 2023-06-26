import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import "./Details.css";
import { useParams } from "react-router-dom"
import Loading from '../Loading/Loading';
import { ThemeContext } from '../API/Context';
import { useDispatch } from 'react-redux';
import { addToCart, total } from '../../Features/Features'
import Swal from 'sweetalert2';
// import { useSelector } from 'react-redux';  +
const Details = () => {
  // const amount = useSelector((state) => state.commerce.amount);
  const dispatch = useDispatch()
  const { state } = useContext(ThemeContext)
  const { id } = useParams()
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false)

  async function getProducts() {
    try {
      setLoad(true)
      // const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      // const res = await axios.get(`https://free-food-menus-api-production.up.railway.app/burgers/${id}`)
      console.log(res.data);
      setProducts(res.data)
      // dispatch(addToCart(res.data))
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
    <>
    <div className="Details-Holder"  >
      {
        load ? <Loading /> : <div className='Details-Card-Holder'  style={{ backgroundColor: state ? "white" : null }} >
          <div className="Details-Image-Holder">
            <img src={products.img} alt="productImage" className="Detail-Image" />
          </div>      
        <div className="Details-details" style={{ color: state ? 'black' : null }} >
            <div className='Detail-desc'>
              <h3>title: {products.name}</h3>
              <p>Category: {products.country}</p>
              <p>Description: {products.dsc}</p>
              <br />
            </div>
            <div className='Detail-bottom'>
              <div className='price'>
                <h4>Price: ₦ {products.price}</h4>
                <h5>Rating: 3.5</h5>
              </div>
              <div className="Cart-Button">
                <button onClick={() => {dispatch(addToCart(products)); 
                  dispatch(total())
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'item added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  }}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
    </>
  )
}

export default Details