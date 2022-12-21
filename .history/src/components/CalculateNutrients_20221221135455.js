import React from 'react'
export default function CalculateNutrients({ mealItems, countMealItems, onAdd, onRemove }) {
  const totalProtein = mealItems.reduce((acc, item) => acc + item.qty * item.protein, 0);
  const totalServing = mealItems.reduce((a, item) => a + item.qty * item.serving, 0);
  const totalCalories = mealItems.reduce((a, item) => a + item.qty * item.calories, 0);
  const totalSugar = mealItems.reduce((a, item) => a + item.qty * item.sugar, 0);

  const targetProtein = 110;
  const targetServing = 0;
  const targetCalories = 2720;
  const targetSugar = 40;

  const remainingProtein = Math.round(targetProtein - totalProtein);
  const remainingServing = targetServing - totalServing;
  const remainingCalories =  Math.round(targetCalories - totalCalories();
  const remainingSugar = targetSugar - totalSugar;
  return (
    <div className="mealItems">
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <h2>Total Items &nbsp;</h2>
        <h2>
          {countMealItems ? (
            <p>{countMealItems}</p>
          ) : (
            ''
          )}
        </h2>
      </div>
      <p><small>Target: 2720 Cal</small></p>
      <br></br>

      {
        mealItems.length === 0 ?
          <div>
            {/* Target row with boxes for cal, prot, sugar */}
            <div className="total-food-nutrients">
              <div className="total-food-nutrients totals-col-2" style={{ background: '#1d2127', }}><p style={{ background: '#1d2127' }}><b>Target</b></p></div>
              <p>Protein <b>{targetProtein}g</b></p>
              <p>Calories <b>{targetCalories}</b></p>
              <p>Sugar <b>{targetSugar}g</b></p>
            </div>
          </div> :
          <div>
            <div className="totals-row"> {/* Title names for table like look */}
              <div className="totals-btns">
                <button className="food-remove"></button>
                <button className="food-add"></button>
              </div>
              <div className="totals-col-3"><small></small>Name </div>
              <div className="totals-col-1" style={{ textAlign: 'right' }}><small>Prot</small></div>
              <div className="totals-col-1" style={{ textAlign: 'right' }}><small>Cal</small></div>
              <div className="totals-col-1" style={{ textAlign: 'right' }}><small>Serv</small></div>
            </div>
            <hr />

            {/* Meal Item totals */}
            {mealItems.map((item) =>
              <div key={item.id} className="totals-row">
                <div className="totals-btns" >
                  <button onClick={() => onRemove(item)} className="food-remove">-</button>
                  <button onClick={() => onAdd(item)} className="food-add">+</button>
                </div>
                <div className="totals-col-3" style={{ textAlign: 'left'}}><small>x{item.qty}</small> {item.name}</div>
                <div className="totals-col-1" style={{ textAlign: 'right' }}>{item.protein * item.qty}g</div>
                <div className="totals-col-1" style={{ textAlign: 'right' }}>{item.calories * item.qty}g</div>
                <div className="totals-col-1" style={{ textAlign: 'right' }}>{item.serving * item.qty}</div>
              </div>
            )}

            <hr style={{ marginBottom: '6px' }} />

            {/* Total row with boxes for cal, prot, sugar */}
            <div className="total-food-nutrients" style={{ marginBottom: '22px', background: 'green' ? { totalCalories } > 1000 : '#1d2127' }}>

              <div className="total-food-nutrients totals-col-2" style={{ background: '#1d2127' }}><p style={{ background: '#1d2127' }}><b>Total</b></p></div>
              <p>Protein <b>{totalProtein}g</b></p>
              <p style={{ background: 'green' ? { totalCalories } > 1000 : '#1d2127' }}>Calories <b>{totalCalories}</b></p>
              <p>Sugar <b>{totalSugar}g</b></p>
            </div>

            {/* Target row with boxes for cal, prot, sugar */}
            <div className="total-food-nutrients">
              <div className="total-food-nutrients totals-col-2" style={{ background: '#1d2127' }}><p style={{ background: '#1d2127' }}><b>Target</b></p></div>
              <p>Protein <b>{targetProtein}g</b></p>
              <p>Calories <b>{targetCalories}</b></p>
              <p>Sugar <b>{targetSugar}g</b></p>
            </div>

            {/* Remaining row with boxes for cal, prot, sugar */}
            <div className="total-food-nutrients">
              <div className="total-food-nutrients totals-col-2" style={{ background: '#1d2127' }}><p style={{ background: '#1d2127' }}><b>Remaining</b></p></div>
              <p>Protein <b>{remainingProtein}g</b></p>
              <p>Calories <b>{remainingCalories}</b></p>
              <p>Sugar <b>{remainingSugar}g</b></p>
            </div>


            {/* Extra box info */}
            {/* <span>Extra daily meals total info</span> */}
            <div className="total-food-nutrients" style={{ marginTop: '22px' }}>
              <p><small>Serving</small> <b>{totalServing}g</b></p>
              <p><small>Protein</small> <b>{totalProtein}g</b></p>
              <p><small>Carbs</small> <b>{totalProtein}g</b></p>
              <p><small>Fat</small> <b>{totalProtein}g</b></p>
              <p><small>Sugar</small> <b>{totalSugar}g</b></p>
            </div>
          </div>
      }
    </div>
  )
}
