import React from 'react'

export default function SavedMealCard({ countMealItems, totalProtein, totalCal, totalSugar }) {
  return (
    <div>
      <div>
       <h2>Saved Diary card</h2>
        <p>{countMealItems}</p>
      </div>
    </div>
  )
}
