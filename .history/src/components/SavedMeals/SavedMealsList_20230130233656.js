import React from 'react'
import SavedMealCard from './SavedMealItem'

export default function SavedMealsList({ countMealItems, mealItems }) {
  return (
    <div>
      <SavedMealCard countMealItems = {countMealItems}/>
    </div>
  )
}
