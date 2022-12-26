import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import "./Details.css";
// import Menu from '../../Menu';
import { useParams } from "react-router-dom"
const Category = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([]);
    const [state, setState] = useState(false)

    const showDrop=()=>{
      setState(true)
    };
    const hideDrop=()=>{
      setState(false)
    };
  
    async function getProducts() {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products`)
        console.log(res.data);
        setProducts(res.data)
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
 hello wolrd
    </>
  )
}
export default Category