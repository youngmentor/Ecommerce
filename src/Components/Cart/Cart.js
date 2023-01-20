
import React, {useContext, useReducer} from 'react'
import "./Cart.css";
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import {clearCart} from "../../Features/Features.js";
import {ThemeContext} from "../API/Context"
import { AiFillDelete } from "react-icons/ai";

const reducer =()=>{
  return []
}
const Cart = () => {
  const {state}= useContext(ThemeContext)
  const {totalAmount}=useContext(ThemeContext)
  const cart = useSelector((state) => state.commerce.cart);
  console.log(useReducer(reducer, []));
  
  const dispatch = useDispatch()
 const payment = ()=>{
  console.log("clicked")
  const refVal = "my-ref" + Math.random () * 1000;
    window.korapay.initialize({
      key: "pk_test_MFDuWfiVWvpnJ35q6UCrTFnjyMnmdPBJJcSZHSKd",
      refrence: `${refVal}`,
      amount: {totalAmount},
      currency: "NGN",
      customer: {
        name: "John Doe",
        email: "john@doe.com",
      },
      notification_url: "https://example.com/webhook"
    });
   }

  return (
    <div className="Cart-Holder" >
      <div className="Cart-Box"  style={{ backgroundColor: state ? "white" : null }}>
      <div className="Cart-Title">
        <h4>Shopping Cart</h4>
        <h3>Total:  ₦{totalAmount}</h3>
        <p onClick={()=> {dispatch(clearCart())}}><AiFillDelete/></p>
      </div>
      <div className="Cart-Items">
      {
        cart?.map((props)=>(
          <CartItem key={props.id} image={props.image} title={props.title} price={props.price} item={props} QTY={props.QTY} />
        ))
      } 
      </div>
      <div className="Cart-Check">
      <button  onClick={payment}>Check Out</button>
      </div>
      </div>
    </div>
  )
    }
export default Cart