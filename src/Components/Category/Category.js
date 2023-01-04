import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import './Category.css'
import Loading from '../Cards/Loading';


const Category = ({color}) => {
  const { cs } = useParams()
  const [catigory, setCategory] = useState()
  const  [load, setLoad] = useState(false)

  async function getCategories() {
    setLoad(true)
    const res = await axios.get(`https://fakestoreapi.com/products/category/${cs}`)
    setCategory(res.data)
    setLoad(false)
  }

  useEffect(() => {
    getCategories()
  }, [cs])
  return (
    <div className='Category-Holder'>
      <div className='Category-Item-Holder'>
        {
          load? <Loading/>  : catigory?.map((item) => (
            <Link key={item.id} className='Category-Place-holder' to={`/detail/${item.id}`} style={{ backgroundColor: color ? 'white' : null }}>
              <div className='Category-Image-holder'>
                <img src={item.image} className='Category-Image' />
              </div>
              <div className='Category-Details'>
                <p>{item.title}</p>
                <h4> Price: ₦ {item.price}</h4>
                <h4>Ratings: 4.9</h4>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
export default Category