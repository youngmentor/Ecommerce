import React, { useEffect, useState,useContext} from 'react'
import './Header.css'
import axios from 'axios';
import Logo from './Logo.png'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate, NavLink } from 'react-router-dom';
import Theme from '../Theme';
import { ThemeContext } from '../API/Context';

const Header = () => {
  const {color} =useContext(ThemeContext)
  const navigate = useNavigate()
  const [state, setState] = useState(false)
  const [item, setItem] =useState([])
  const colorObject={
    textDecoration: 'none',
    color: 'inherit',
  }
  const activeColorObject={
    textDecoration: 'none',
    color: 'tomato',
  }

  const dropdown = (
    <div className='drop-list'>
    {item?.map((i)=>(
      <NavLink className='List' key={[i]} to={`/categories/${i}`} style={({isActive})=> isActive? activeColorObject:colorObject }  ><p key={[i]} className='List-item' >{i}</p></NavLink> 
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
    <div className='Header' style={{backgroundColor: color? 'black' : undefined}} >
      <div className='Header-logo'>
        <img src={Logo} alt="logo" onClick={() => navigate('/')} />
      </div>
      <nav className='Header-links'style={{color: color? "white": undefined }}>
       <NavLink to="/" style={({isActive})=> isActive? activeColorObject:colorObject } > <div className='link1'><h4>Home</h4></div></NavLink>

       <NavLink to='/categories' style={({isActive})=> isActive? activeColorObject:colorObject } >
       <div className='Drop' onMouseEnter={()=>{setState(!state)}}  onMouseLeave={()=>{setState(!state)}}><h4>Category</h4>
          {state && <div className='invisible'> </div>}
        {state && dropdown}
        </div>
       </NavLink>
        <NavLink className='link2' to="/Cart" style={({isActive})=> isActive? activeColorObject: colorObject }  ><div className='head-cart'><AiOutlineShoppingCart /> <h4>cart</h4></div> </NavLink>
      </nav>
      <div className='Header-toggle'>
        <Theme/>
      </div>
    </div>
  )
}

export default Header