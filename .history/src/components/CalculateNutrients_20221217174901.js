import React from 'react'
import SearchFood from './SearchFood'

export default function CalculateNutrients({ mealItems, countMealItems, onAdd, onRemove }) {

  const totalProtein = mealItems.reduce((acc, item) => acc + item.qty * item.protein, 0);
  const totalServing = mealItems.reduce((a, item) => a + item.qty * item.serving, 0);
  const totalCalories = mealItems.reduce((a, item) => a + item.qty * item.calories, 0);
  const totalSugar = mealItems.reduce((a, item) => a + item.qty * item.sugar, 0);

  // const {totalNutrients} = props;
  return (
    <div className="mealItems">
      {/* <SearchFood /> */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h2>Total Items &nbsp;</h2>
        <h2>
          {countMealItems ? (
            <p>{countMealItems}</p>
          ) : (
            ''
          )}
        </h2>
      </div>
      <p><small>Target: 2440 Cal, Dec 7, 2022</small></p>
      <br></br>

      {
        mealItems.length === 0 ? <div>No meals added yet </div> :
          <div>
            <div className="totals-row"> {/* Title */}
              <div className="totals-btns"><button className="food-remove"></button>
                <button className="food-add"></button></div>
              <div className="totals-col-3"><small></small>Name </div>
              <div className="totals-col-1" style={{ textAlign: 'right' }}><small>Prot</small></div>
              <div className="totals-col-1" style={{ textAlign: 'right' }}><small>Cal</small></div>
              <div className="totals-col-1" style={{ textAlign: 'right' }}><small>Serv</small></div>
            </div>
            <hr />
            {mealItems.map((item) =>
              <div key={item.id} className="totals-row">
                <div className="totals-btns" >
                  <button onClick={() => onRemove(item)} className="food-remove">-</button>
                  <button onClick={() => onAdd(item)} className="food-add">+</button>
                </div>
                <div className="totals-col-3" style={{ textAlign: 'left' }}><small>x{item.qty}</small> {item.name}</div>
                <div className="totals-col-1" style={{ textAlign: 'right' }}>{item.protein * item.qty}g</div>
                <div className="totals-col-1" style={{ textAlign: 'right' }}>{item.serving * item.qty}</div>
                <div className="totals-col-1" style={{ textAlign: 'right' }}>{item.calories * item.qty}g</div>
              </div>
            )}

            <hr style={{ marginBottom: '6px' }} />
            {/* Total */}
            <div className="total-food-nutrients" style={{ marginBottom: '0px' }}>

              <div className="total-food-nutrients totals-col-2" style={{ background: '#1d2127' }}><p style={{ background: '#1d2127' }}><b>Total</b></p></div>
              <p>Calories <b>{totalCalories}</b></p>
              <p>Protein <b>{totalProtein}g</b></p>
              <p>Sugar <b>{totalSugar}g</b></p>
            </div>

            <div className="total-food-nutrients">
              <div className="total-food-nutrients totals-col-2" style={{ background: '#1d2127' }}><p style={{ background: '#1d2127' }}><b>Target</b></p></div>
              <p>Calories <b>{totalCalories}</b></p>
              <p>Protein <b>{totalProtein}g</b></p>
              <p>Sugar <b>{totalSugar}g</b></p>
            </div>

            <div className="total-food-nutrients">
              <div className="total-food-nutrients totals-col-2" style={{ background: '#1d2127' }}><p style={{ background: '#1d2127' }}><b>Remaining</b></p></div>
              <p>Calories <b>{totalCalories}</b></p>
              <p>Protein <b>{totalProtein}g</b></p>
              <p>Sugar <b>{totalSugar}g</b></p>
            </div>

            <br></br>

            {/* Extra box info */}
            <span>Extra daily meals total info</span>
            <div className="total-food-nutrients">
              <p><small>Serving</small> <b>{totalServing}g</b></p>
              <p><small>Protein</small> <b>{totalProtein}g</b></p>
              <p><small>Carbs</small> <b>{totalProtein}g</b></p>
              <p><small>Fat</small> <b>{totalProtein}g</b></p>
              <p><small>Sugar</small> <b>{totalProtein}g</b></p>
            </div>
          </div>
      }
    </div>
  )
}
