import React from 'react'
import SearchFood from './SearchFood'

function CalculateNutrients({ mealItems, onAdd }) {
  // const {totalNutrients} = props;
  return (
    <div className="mealItems">
      {/* <SearchFood /> */}
      <h2>Total Nutrients</h2>
      <h5>Target: 2440 Cal, Dec 7, 2022</h5>
      <br></br>

      <div>
        { mealsTotalNutrients.length === 0 && <div>No meals added yet</div> }
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

export default CalculateNutrients