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
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Protein</th>
                  <th>Serving</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chicken</td>
                  <td>text1.2</td>
                  <td>text1.3</td>
                </tr>
                <tr>
                  <td>text2.1</td>
                  <td>text2.2</td>
                  <td>text2.3</td>
                </tr>
                <tr>
                  <td>text3.1</td>
                  <td>text3.2</td>
                  <td>text3.3</td>
                </tr>
                <tr>
                </tr>
              </tbody>
            </table>
            <div className="col1">{item.name}</div>
            <div className="col1">{item.protein}</div>
            <div className="col1">{item.serving}</div>

            <button onClick={() => onRemove(item)} className="food-remove">-</button>
            <button onClick={() => onAdd(item)} className="food-remove">+</button>

          </div>
        )}
      </div>

      <br></br>
      <div className="nutrient-totals">
        <p>Calories: 2440</p>
        <p>Protein: 120</p>
        <p>Fat: 120</p>
      </div>
    </div>
  )
}