import React from 'react'
import { createContext,useState } from 'react'

export const CartManager = createContext()

const Context = ({children}) => {
  const [cart,setCart] =useState([])

  return (
    <CartManager.Provider value={{cart,setCart}}>
      {children}
    </CartManager.Provider>
  )
}

export default Context
