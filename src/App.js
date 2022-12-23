import React, { useEffect, useState } from 'react'
import Body from './Components/Body/Body'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Detail from './Components/Details/Details'
const App = () => {
  const [background, setBackground] = useState('grey')

  const Click=()=>{
    setBackground(background)
  }
  useEffect(()=>{
      document.body.style.backgroundColor = background
  }, [background])
  return (
    <div className='App' style={{background: background}}>
       <Router>
        <Header  handleClick={Click} />
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default App