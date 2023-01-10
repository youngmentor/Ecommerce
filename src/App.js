import React, {useContext} from 'react'
import Body from './Components/Body/Body'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Detail from './Components/Details/Details'
import Cart from './Components/Cart/Cart'
import Category from './Components/Category/Category'
import Footer from './Components/footer/Footer'
import { ThemeContext } from './Components/API/Context'
const App = () => {
  const {state} = useContext(ThemeContext);
  
  return (
    <div className='App' style={{backgroundColor: state? 'black': null}}>
    <Router>
     <Header />
     <Routes>
       <Route path='/' element={<Body />}/>
       <Route path='/detail/:id' element={<Detail />}/>
       <Route path='/cart' element={<Cart />}/>
       <Route path='/categories/:cs' element={<Category />}/>
     </Routes>
     <Footer/>
    </Router>
 </div>
  )
}
export default App