import { configureStore } from '@reduxjs/toolkit'
// import Ecommerce from '../Features/Features'
export const store = configureStore({
  reducer: {
    commerce : Ecommerce
  },
})