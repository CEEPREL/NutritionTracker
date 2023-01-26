import React, { createContext, useState } from 'react'
import { useEffect } from 'react'

const FoodContext = createContext()

export const FoodProvider = ({ children }) => {
    const [foods, setFoods] = useState([])
}

useEffect(() => {
    fetchFoods();
}, [third])
