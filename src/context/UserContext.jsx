import React, { createContext, useState } from 'react'
import { food_items } from '../food.js'

export const dataContext = createContext()

const UserContext = ({children}) => {

    let [input, setInput] = useState("")
    let [showCart, setShowCart] = useState(false)
    let [category, setCategory] = useState(food_items)  

    let data = {
        input,
        setInput,
        category,
        setCategory,
        showCart,
        setShowCart
    }

  return (
    <dataContext.Provider value={data}>
        {children}
    </dataContext.Provider>
  )
}

export default UserContext