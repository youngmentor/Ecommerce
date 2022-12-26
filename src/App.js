import React from 'react'
import Body from './Components/Body/Body'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Detail from './Components/Details/Details'
import Cart from './Components/Cart/Cart'
const App = () => {
 
  return (
    <div className='App'>
       <Router>
        <Header  />
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default App