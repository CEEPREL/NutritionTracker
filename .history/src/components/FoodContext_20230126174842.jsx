import React, { createContext } from 'react'

const FoodContext = createContext()

export const FoodProvider =( {children}) {
  return (
    <div>FoodContext</div>
  )
}
