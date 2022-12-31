import React, {useReducer,useEffect} from 'react'
import Body from './Components/Body/Body'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Detail from './Components/Details/Details'
import Cart from './Components/Cart/Cart'
import Category from './Components/Category/Category'


function reducer(state, action){
  switch (action.type){
    case 'Add':
      return !state
  }
}
const App = () => {
  
  const [state, dispatch] = useReducer(reducer,JSON.parse(localStorage.getItem('state')))
  function Add (){
    dispatch({type: 'Add'})
  }
  useEffect (()=>{
    localStorage.setItem('state', state);
  }, [state])
  return (
    <div className='App' style={{backgroundColor: state? 'gray': null}}>
       <Router>
        <Header color={state} change={Add} />
        <Routes>
          <Route path='/' element={<Body color={state} change={Add}/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/categories/:cs' element={<Category color={state} />}/>
        </Routes>
       </Router>
    </div>
  )
}
export default App