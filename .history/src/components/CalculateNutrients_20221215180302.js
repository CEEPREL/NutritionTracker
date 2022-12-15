import React from 'react'
import SearchFood from './SearchFood'

export default function CalculateNutrients({ mealItems, countMealItems, onAdd, onRemove }) {

  const totalProtein = mealItems.reduce((acc, item) => acc + item.qty * item.protein, 0);
  const totalServing = mealItems.reduce((a, item) => a + item.qty * item.size, 0);

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

      <div>
        {mealItems.length === 0 && <div>No meals added yet <br></br></div>}

        <div className="totals-row">
        <div className=""><small></small> </div>
        <div className="totals-col-1"><small></small> </div>
          <div className="totals-col-3">Food Name</div>
          <div className="totals-col-1" style={{ textAlign: 'center' }}><small>Protein</small></div>
          <div className="totals-col-1" style={{ textAlign: 'center' }}><small>Calories</small></div>
          <div className="totals-col-1" style={{ textAlign: 'center' }}><small>Serving</small></div>

          <br></br>

        </div>
        <hr />
        {mealItems.map((item) =>
          <div key={item.id} className="totals-row">
            <div className="totals-btns totals-col-1" >
              <button onClick={() => onRemove(item)} className="food-remove">-</button>
              <button onClick={() => onAdd(item)} className="food-add">+</button>
            </div>
            <div className="totals-col-3" style={{ textAlign: 'left' }}><small>x{item.qty}</small> {item.name}</div>
            <div className="totals-col-1" style={{ textAlign: 'center' }}>{item.protein * item.qty}</div>
            <div className="totals-col-1" style={{ textAlign: 'center' }}>{item.size}</div>
            <div className="totals-col-1" style={{ textAlign: 'center' }}>{item.size}</div>

          </div>
        )}
        {mealItems.length !== 0 && (
          <>
            <hr />
            {/* Total */}
            
              <div className="totals-row">
                <div className="totals-col-3">Total</div>
                <div className="totals-col-1" style={{ textAlign: 'left' }}></div>

                <div className="">
                  <div className="food-nutrients-cal totals-col-1 " style={{ marginTop: 0 }}>
                    <p><small>Protein</small> <b>{totalProtein}g</b></p>
                  </div>
                </div>
                <div className="">
                  <div className="food-nutrients-cal totals-col-1" style={{ marginTop: 0 }}>
                    <p><small>Serving</small> <b>{totalServing}g</b></p>
                  </div>
                </div>
                <div className="" style={{ textAlign: 'center' }}>
                  <div className="food-nutrients-cal totals-col-1" style={{ marginTop: 0 }}>
                    <p><small>Calories</small> <b>{totalServing}g</b></p>
                  </div>
                </div>
                <br></br>

              </div>

              {/* Target */}
              <div className="totals-row">
                <div className="totals-col-3">Target</div>
                <div className="totals-col-1" style={{ textAlign: 'left' }}></div>

                <div className="">
                  <div className="food-nutrients-cal totals-col-1" style={{ marginTop: 0 }}>
                    <p><small>Protein</small> <b>122g</b></p>
                  </div>
                </div>
                <div className="">
                  <div className="food-nutrients-cal totals-col-1" style={{ marginTop: 0 }}>
                    <p><small>Serving</small> <b>{totalServing}g</b></p>
                  </div>
                </div>
                <div className="" style={{ textAlign: 'center' }}>
                  <div className="food-nutrients-cal totals-col-1" style={{ marginTop: 0 }}>
                    <p><small>Calories</small> <b>{totalServing}g</b></p>
                  </div>
                </div>


                {/* <div className="totals-col-1" style={{ textAlign: 'left' }}> </div>
              <div className="totals-col-1" style={{ textAlign: 'right' }}></div> */}

                <br></br>
              </div>

              <hr />

              {/* Remaining */}

              <div className="totals-row">
                <div className="totals-col-3"><small>Remaining</small></div>
                <div className="totals-col-1" style={{ textAlign: 'left' }}></div>

                <div className="food-nutrients-cal totals-col-1" style={{ marginTop: 0 }}>
                  <p><small>Protein</small> <b>{totalProtein}g</b></p>
                </div>
                <div className="">
                  <div className="food-nutrients-cal totals-col-1" style={{ marginTop: 0 }}>
                    <p><small>Serving</small> <b>{totalServing}g</b></p>
                  </div>
                </div>
                <div className="" style={{ textAlign: 'center' }}>
                  <div className="food-nutrients-cal totals-col-1" style={{ marginTop: 0 }}>
                    <p><small>Calories</small> <b>{totalServing}g</b></p>
                  </div>
                </div>
                <br></br>
              </div>
            </div>

            <div className="food-nutrients">
              <p>Total</p>
              <p><small>Serving</small> <b>{totalServing}g</b></p>
              <p><small>Protein</small> <b>{totalProtein}g</b></p>
              <p><small>Protein</small> <b>{totalProtein}g</b></p>
              <p><small>Protein</small> <b>{totalProtein}g</b></p>
              <p><small>Protein</small> <b>{totalProtein}g</b></p>
            </div>
            <div className="food-nutrients">
              <p>Remaining</p>
              <p><small>Serving</small> <b>{totalServing}g</b></p>
              <p><small>Protein</small> <b>{totalProtein}g</b></p>
              <p><small>Protein</small> <b>{totalProtein}g</b></p>
              <p><small>Serving</small>77</p>
              <p><small>Protein</small>87</p>
            </div>
          </>
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
    </div>
  )
}
