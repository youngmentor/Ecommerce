import './Cart.css'
import { useEffect, useState } from 'react'
import { BsCart3 } from "react-icons/bs";
const Cart = () => {

    return (
        <div className='Cart_wrap'>
            <div className='Cart_holder'>
                <div className='cart'>
                    <BsCart3 style={{ fontSize: 100,color:'#F48B36'}} />
                </div>
                <h1>Your cart is empty!</h1>
                <p>Browse our categories and discover our best deals!</p>
                <button>START SHOPPING</button>
            </div>
        </div>

    )
}

export default Cart