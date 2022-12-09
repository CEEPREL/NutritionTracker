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
      <div className="nutrient-totals">
        <p>Calories: 2440</p>
        <p>Protein: 120</p>
        <p>Fat: 120</p>
      </div>
      <tr class="total">

        <td class="first">Totals</td>


            <td>0</td>

            <td>
              <span class="macro-value">0</span>
              <span class="macro-percentage">
                -
              </span>
            </td>

            <td>
              <span class="macro-value">0</span>
              <span class="macro-percentage">
                -
              </span>
            </td>

            <td>
              <span class="macro-value">0</span>
              <span class="macro-percentage">
                -
              </span>
            </td>

            <td>0</td>

            <td>0</td>

        <td class="empty"></td>

      </tr>
    </div>
  )
}

export default CalculateNutrients