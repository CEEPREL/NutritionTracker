import React from 'react'
import SavedMealCard from './SavedMealItem'

export default function SavedMealsList({ countMealItems, mealItems }) {
  return (
    <div>
    <div className="foodList"></div>
      <SavedMealCard
        countMealItems={countMealItems}
        mealItems={mealItems}
      />
    </div>
  )
}
