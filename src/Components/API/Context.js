import {  createContext, useReducer, useEffect, useState } from 'react';
// import {useSelector} from 'react-redux'
export const ThemeContext = createContext();

export const ThemeProvider=({children})=>{
  const totalAmount = useSelector((state) => state.commerce.total);  
  const [state, setState] = useState(JSON.parse(localStorage.getItem("state")));


  const Toggle=()=>{
    setState(!state);
  }

  useEffect(()=>{
    localStorage.setItem("state", state)
  },[state])


  return(
    <ThemeContext.Provider value={{state, Toggle,totalAmount}}>
        {children}
    </ThemeContext.Provider>
  )
}
