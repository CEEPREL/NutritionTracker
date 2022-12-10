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
      <p><small>Target: 2440 Cal, Dec 7, 2022</small></p>
      <br></br>

      <div>
        {mealItems.length === 0 && <div>No meals added yet</div>}

        <div className="totals-row">
          <div className="totals-col-2">Name</div>
          <div className="totals-col-1">Protein</div>
          <div className="totals-col-1">Serving</div>
          <div className="totals-col-1" style={{ textAlign: 'center' }}> <p>Qty</p></div>
          <div className="totals-col-1" style={{ textAlign: 'right' }}>Amount</div>
          <br></br>

        </div>
        <hr />
        {mealItems.map((item) =>
          <div key={item.id} className="totals-row">
            <div className="totals-col-2">{item.name}</div>
            <div className="totals-col-1">{item.protein}</div>
            <div className="totals-col-1">{item.size}</div>
            <div className="totals-btns">
              <button onClick={() => onRemove(item)} className="food-remove">-</button>
              <button onClick={() => onAdd(item)} className="food-remove">+</button>
            </div>
            <div className="totals-col-1" style={{ textAlign: 'right' }}>
              {item.qty} X {item.protein}
            </div>

          </div>
        )}
        {mealItems.length !== 0 && (
          <>
            <hr />
        )}

        {/* {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </> */}
      
      
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
