import React from 'react'
import { FaPlus } from 'react-icons/fa';
import CalculateNutrients from './CalculateNutrients';
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
                        <CalculateNutrients />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Main