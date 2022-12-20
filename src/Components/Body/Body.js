import React from 'react'
import { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import axios from 'axios'
import './Body.css'
const Body = () => {
    const [products, setProducts] = useState([])
    async function getProducts(){
      try{
       const res = await axios.get('https://fakestoreapi.com/products')
       console.log(res.data)
       setProducts(res.data)
      }catch(error){
         if (error.response){
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
         }else if (error.request){
          console.log (error.request);
         }else {
          console.log('Error', error.message)
         }
         console.log(error.config);
      }
    }
  
  
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
      <Cards/>
    </div>
  )
}

export default Body