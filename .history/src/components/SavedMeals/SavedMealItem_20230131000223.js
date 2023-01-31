import React from 'react'

export default function SavedMealCard({ countMealItems, mealItems, totalProtein, totalCal, totalSugar }) {
  return (
    <div>
      <div style={{ padding: '2rem', display: 'flex' }}>
      
        <h2>Saved Diary Card</h2>
        <p>Foods eaten: {countMealItems} </p>
        <div>
          <div className="totals-row"> {/* Title names for table like look */}
            <div className="totals-col-3"><small></small>Name </div>
            <div className="totals-col-1" style={{ textAlign: 'right' }}><small>Prot</small></div>
            <div className="totals-col-1" style={{ textAlign: 'right' }}><small>Cal</small></div>
            <div className="totals-col-1" style={{ textAlign: 'right' }}><small>Serv</small></div>
          </div>
          <hr />
        </div>

        {mealItems.map((item) =>
          <div key={item.id} className="totals-row">

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
