import { ThemeContext } from '../API/Context'
import React, {useContext} from 'react'
import Infinity from '../Loading/Infinity.gif'
import "./Loading.css"
const Loading = ({color}) => {
  const {state}=useContext(ThemeContext)
  return (
    <div className='loader'>
        <img src={Infinity}/>
        <h1 style={{color: state? 'white': undefined}} >Loading...</h1>
    </div>
  )
}

export default Loading