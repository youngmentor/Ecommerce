import React, { useState } from 'react'
import './Header.css'
import Logo from './Logo.png'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Theme from '../Theme';
const Header = () => {
  // const [burger, setBurger] = useState(false)
  const navigate = useNavigate()

  const [state, setState] = useState(false)

  const showDrop = () => {
    setState(true)
  };
  // const hideDrop = () => {
  //   setState(false)
  // };
  const showList = () => {
    setState(true)
  };
  const hideList = () => {
    setState(false)
  }

  return (
    <div className='Header'>
      <div className='Header-logo'>
        <img src={Logo} alt="logo" onClick={() => navigate('/')} />
      </div>
      <nav className='Header-links'>
        <div className='link1' onClick={() => navigate('/')} ><h4>Home</h4></div>
        <div className='link2' onMouseEnter={showDrop}  ><h4>Category</h4></div>
        <div className='dropDown'>
          {state ? (<div className='Drop' onMouseEnter={showList} onMouseLeave={hideList} >
            <p className='List' to='/electronics'> Electronics</p>
            <p className='List1' to='/clothing'> Clothing</p>
            <p className='List2' to='/jewelry'> Jewelry</p>
          </div>) : null}
        </div>
        <Link className='cart' to={"/Cart"}> <AiOutlineShoppingCart /> <h4>cart</h4></Link>
      </nav>
      <div className='Header-toggle'>
        <Theme />
      </div>
    </div>
  )
}

export default Header