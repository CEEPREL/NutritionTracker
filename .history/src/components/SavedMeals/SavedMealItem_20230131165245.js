import React from 'react'

export default function SavedMealCard({ countMealItems, mealItems, totalProtein, totalCal, totalSugar }) {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid black' }}>
      
      
        <h2>Saved Diary Card</h2>
        <p>Foods eaten: {countMealItems} </p>
        <div>
          <div className="totals-row"> {/* Title names for table like look */}
            <div className="totals-col-3"><small></small>Name </div>
    
          </div>
          <hr />
        </div>

        {mealItems.map((item) =>
          <div key={item.id} className="totals-row">

            <div className="totals-col-3" style={{ textAlign: 'left' }}><small>x{item.qty}</small> {item.name}</div>
          </div>
        )}
      </div>
    </div>
  )
}
