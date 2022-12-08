import React from 'react'
import { FaPlus } from 'react-icons/fa';
import Food from './Food';
import SearchFood from './SearchFood';

function FoodList(props) {
    const [Foods, setFoods] = [
        {
            avatarUrl: "http://via.placeholder.com/100",
            name: "Chicken Breast",
            size: "200g",
            protein: "25g"
        },
        {
            avatarUrl: "http://via.placeholder.com/100",
            name: "Chicken Breast",
            size: "200g",
            protein: "25g"
        }, {
            avatarUrl: "http://via.placeholder.com/100",
            name: "Chicken Breast",
            size: "200g",
            protein: "25g"
        }, {
            avatarUrl: "http://via.placeholder.com/100",
            name: "Chicken Breast",
            size: "200g",
            protein: "25g"
        }, {
            avatarUrl: "http://via.placeholder.com/100",
            name: "Chicken Breast",
            size: "200g",
            protein: "25g"
        }
    ];
    

    return (
        <div>

            <SearchFood />
            <br></br>
            <div className="foodList">
               <Food name="Salad" serving="300g" protein="4g"/>
               <Food name="Salad" serving="300g" protein="4g"/>
               <Food name="Salad" serving="300g" protein="4g"/>

                

                <div className="new-card">
                    <h3>Add food </h3><br></br>
                    <h1><FaPlus /></h1>

                </div>
            </div>
        </div>

    )
}

export default FoodList