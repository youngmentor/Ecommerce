import React, { useEffect, useState } from 'react'
import './Header.css'
import axios from 'axios';
import Logo from './Logo.png'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Theme from '../Theme';
const Header = ({color, change}) => {
  const navigate = useNavigate()
  const [state, setState] = useState(false)
  const [item, setItem] =useState([])


  const dropdown = (
    <div className='drop-list'>
    {item?.map((i)=>(
      <Link className='List' key={[i]} to={`/categories/${i}`}><p key={[i]} className='List-item' >{i}</p></Link> 
    ))}
    </div>
  )
  async function getItem(){
    const res = await axios.get(`https://fakestoreapi.com/products/categories`)
    setItem(res.data)
  }
  
  useEffect(()=>{
    getItem()
  }, [])


  return (
    <div className='Header'>
      <div className='Header-logo'>
        <img src={Logo} alt="logo" onClick={() => navigate('/')} />
      </div>
      <nav className='Header-links'>
        <div className='link1' onClick={() => navigate('/')} ><h4>Home</h4></div>
        <div className='Drop'
        onMouseEnter={()=>{setState(!state)}}  
        onMouseLeave={()=>{setState(!state)}}
        ><h4>Category</h4>
          {state && <div className='invisible'> </div>}
        {state && dropdown}
        </div>
      
        <Link className='cart' to={"/Cart"}> <AiOutlineShoppingCart /> <h4>cart</h4></Link>
      </nav>
      <div className='Header-toggle'>
        <Theme theme={color} toggler={change} />
      </div>
    </div>
  )
}

export default Header