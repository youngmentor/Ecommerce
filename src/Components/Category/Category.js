import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from "react-router-dom"
import './Category.css'
import Loading from '../Loading/Loading';
import { ThemeContext } from '../API/Context';


const Category = ({color}) => {
  const {state}= useContext(ThemeContext)
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
          load? <Loading />  : catigory?.map((item) => (
            <Link key={item.id} className='Category-Place-holder' to={`/detail/${item.id}`} style={{ backgroundColor: state ? 'white' : null }}>
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