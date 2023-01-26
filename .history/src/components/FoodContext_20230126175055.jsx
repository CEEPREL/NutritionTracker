import React, { createContext, useState } from 'react'

const FoodContext = createContext()

export const FoodProvider = ({ children }) => {
    const [foods, setFood] = useState([])
}