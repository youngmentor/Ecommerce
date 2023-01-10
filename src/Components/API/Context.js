import {  createContext, useReducer, useEffect } from 'react';

function reducer(state, action){
    switch (action.type){
      case 'Toggle':
        return !state
    }
  }
export const ThemeContext = createContext();
export const ThemeProvider=({children})=>{
     
  const [state, dispatch] = useReducer(reducer,JSON.parse(localStorage.getItem('state')))
  function Toggle (){
    dispatch({type: 'Toggle'})
  }
  useEffect (()=>{
    localStorage.setItem('state', state);
  }, [state])

  return(
    <ThemeContext.Provider value={{state, Toggle}} >
        {children}
    </ThemeContext.Provider>
  )
}