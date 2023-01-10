import './Cart.css'
import React, {useContext} from 'react'
import { ThemeContext } from '../API/Context';
import { BsCart3 } from "react-icons/bs";
const Cart = () => {
const {state} =useContext(ThemeContext)
    return (
        <div className='Cart_wrap' >
            <div className='Cart_holder' style={{backgroundColor: state? "white": undefined }} >
                <div className='cart'>
                    <BsCart3 style={{ fontSize: 100,color:'#F48B36'}} />
                </div>
                <h1>Your cart is empty!</h1>
                <p>Browse our categories and discover our best deals!</p>
                <button to="/" >START SHOPPING</button>
            </div>
        </div>

    )
}

export default Cart