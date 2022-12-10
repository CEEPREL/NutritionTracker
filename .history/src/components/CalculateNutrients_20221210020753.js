import React from 'react'
import SearchFood from './SearchFood'

export default function CalculateNutrients({ mealItems, onAdd, onRemove }) {

  const totalProtein = mealItems.reduce((acc, item) => acc + item.qty * item.protein, 0);
  const totalCalories = mealItems.reduce((a, item) => a + item.qty * item.serving, 0);

  // const {totalNutrients} = props;
  return (
    <div className="mealItems">
      {/* <SearchFood /> */}

      <h2>Total Nutrients</h2>
      <h5>Target: 2440 Cal, Dec 7, 2022</h5>
      <br></br>

      <div>
        {mealItems.length === 0 && <div>No meals added yet</div>}
        {mealItems.map((item) =>
          <div key={item.id} className="totals-row">

            <div className="totals-col-2">{item.name} } X {item.protein} </div>
            <div className="totals-col-1">{item.protein}</div>
            <div className="totals-col-1">{item.serving}</div>
            
            <div className="totals-col-1" style={{textAlign: 'right'}}>
              {item.qty} X {item.protein}
            </div>
            <div className="totals-btns">
              <button onClick={() => onRemove(item)} className="food-remove">-</button>
              <button onClick={() => onAdd(item)} className="food-remove">+</button>
            </div>
          </div>
        )}
      </div>
      
      <br></br>
      <div className="nutrient-totals">
        <p>Calories: 2440</p>
        <p>Protein: 120</p>
        <p>Fat: 120</p>

        {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Name</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>Chicken</td>
            <td>Chicken</td>
            <td>Chicken</td>
          </tr>
          <tr>
            <td>Chicken</td>
            <td>Chicken</td>
            <td>Chicken</td>
          </tr>

            <button className="food-remove">-</button>
            <button className="food-remove">+</button>

        </tbody>
      </table> */}
      </div>
    </div>
  )
}
