import React from 'react'
// import Load from '../Loading/Load.gif'
import Infinity from '../Loading/Infinity.gif'
import "./Loading.css"
const Loading = ({color}) => {
  return (
    <div className='loader'>
        <img src={Infinity}/>
        <h1 style={{color: color? 'white': undefined}} >Loading....</h1>
    </div>
  )
}

export default Loading