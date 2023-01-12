
import React, {useContext} from 'react'
import "./Cart.css";
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import {clearCart} from "../../Features/Features.js";
import {ThemeContext} from "../API/Context"


const Cart = () => {
  const {totalAmount}=useContext(ThemeContext)
  const cart = useSelector((state) => state.commerce.cart);
  
  const dispatch = useDispatch()


  return (
    <div className="Cart-Holder">
      <div className="Cart-Box">
      <div className="Cart-Title">
        <h4>Shopping Cart</h4>
        <h3>Total:  ₦{totalAmount}</h3>
        <p onClick={()=> {dispatch(clearCart())}}>Remove all</p>
      </div>
      <div className="Cart-Items">
      {
        cart?.map((props)=>(
          <CartItem key={props.id} image={props.image} title={props.title} price={props.price} item={props} QTY={props.QTY} />
        ))
      } 
      </div>
      <div className="Cart-Check">
      <button >Check Out</button>
      </div>
      </div>
    </div>
  )
}

export default Cart