import React, { useEffect, useState } from 'react'
import Body from './Components/Body/Body'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {


  return (
    <div className='App'>
       <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Body/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default App