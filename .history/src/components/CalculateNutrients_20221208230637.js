import React from 'react'
import SearchFood from './SearchFood'

function CalculateNutrients({ totalNutrients }) {
  // const {totalNutrients} = props;
  return (
    <div className="calculateNutrients">
      <SearchFood/>
      <br></br>
      <h2>Total Nutrients</h2>
      <h5>Target: 2440 Cal, Dec 7, 2022</h5>
      <br></br>
      <p>Calories: 2440</p>
      <p>Protein: 120</p>
      <p>Fat: 120</p>
    </div>
  )
}

export default CalculateNutrients