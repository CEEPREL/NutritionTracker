import React from 'react'
import { FaPlus } from 'react-icons/fa';
import FoodList from './FoodList';
function Main() {
    return (
        <div className="main-content">
            <div className="row">
                <div className="col-left">
                    <div className="wrapper-card">
                        <FoodList />
                    </div>
                </div>

                <div className="col-right">
                    <div className="wrapper-card">
                        <h2>Total Nutrients</h2>
                        <h5>Target: 2440 Cal, Dec 7, 2022</h5>
                        <br></br>
                        <p>Calories: 2440</p>
                        <p>Protein: 120</p>
                        <p>Fat: 120</p>

                    </div>


                </div>
            </div>


        </div>
    )
}

export default Main