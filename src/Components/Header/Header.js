import React, { useState } from 'react'
import './Header.css'
import Logo from './Logo.png'
import { AiOutlineShoppingCart } from "react-icons/ai";
import {MdOutlineLightMode} from 'react-icons/md';
import {MdOutlineNightlight} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const Header = (Click) => {
    const [theme, setTheme] = useState (false)
    const navigate= useNavigate()
  return (
    <div className='Header'>
        <div className='Header-logo'>
            <img src={Logo}  alt="logo" onClick={()=> navigate('/')} />
        </div>
        <div className='Header-links'>
            <div className='link1'><h4>Home</h4></div>
            <div className='link2'><h4>Category</h4></div>
            <div className='cart'> <AiOutlineShoppingCart/> <h4>Cart</h4></div>
            
        </div>
        <div className='Header-toggle' onClick={
          ()=> {Click("black")}}>
          {theme? <MdOutlineLightMode onClick={()=>{setTheme(!theme)}} 
          className='tog' /> :
          <MdOutlineNightlight onClick={()=>{setTheme(!theme)} } 
          className='tog' color='white' /> }
         
            </div>
    </div>
  )
}

export default Header