import React from 'react'

export default function SavedMealCard({ countMealItems, mealItems, totalProtein, totalCal, totalSugar }) {
  return (
    <div>
      <div>
        <h2>Saved Diary Card</h2>
        <p>Foods eaten: {countMealItems} </p>
        {mealItems.map((item) =>
          <div key={item.id} className="totals-row">
            <div className="totals-btns" >
              <button onClick={() => onRemove(item)} className="food-remove">-</button>
              <button onClick={() => onAdd(item)} className="food-add">+</button>
            </div>
            <div className="totals-col-3" style={{ textAlign: 'left' }}><small>x{item.qty}</small> {item.name}</div>
            <div className="totals-col-1" style={{ textAlign: 'right' }}>{Math.round(item.protein * item.qty)}g</div>
            <div className="totals-col-1" style={{ textAlign: 'right' }}>{Math.round(item.calories * item.qty)}g</div>
            <div className="totals-col-1" style={{ textAlign: 'right' }}>{Math.round(item.serving * item.qty)}</div>
          </div>
        )}
      </div>
    </div>
  )
}
