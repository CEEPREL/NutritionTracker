import React from 'react'

export default function SavedMealCard({ countMealItems, totalProtein, totalCal, totalSugar }) {
  return (
    <div>
      <div>
       <h2>Saved Diary Card</h2>
        <p>foods eaten:{countMealItems}</p>
      </div>
    </div>
  )
}