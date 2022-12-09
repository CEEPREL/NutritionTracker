import React from 'react'
import SearchFood from './SearchFood'

function CalculateNutrients({ totalNutrients }) {
  // const {totalNutrients} = props;
  return (
    <div className="calculateNutrients">
      <SearchFood />
      <br></br>
      <div>
        {totalNutrients.length === 0 && <div>No meals added yet</div>}
      </div>
      <br></br>
      <h2>Total Nutrients</h2>
      <h5>Target: 2440 Cal, Dec 7, 2022</h5>
      <br></br>
      <div>
      <p>Calories: 2440</p>
      <p>Protein: 120</p>
      <p>Fat: 120</p>
      </div>
      
    </div>
  )
}

export default CalculateNutrients