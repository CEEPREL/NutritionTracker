import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import Food from './Food';
import SearchFood from './SearchFood';


const FoodList = () => {
    const [foods, setFoods] = useState([
        {
            name: "Chicken Breast",
            size: "200g",
            protein: "25g"
        },
        {
            name: "Chicken Breast",
            size: "200g",
            protein: "25g"
        }, {
            name: "Chicken Breast",
            size: "200g",
            protein: "25g"
        }, {
            name: "Chicken Breast",
            size: "200g",
            protein: "25g"
        }, {
            name: "Chicken Breast",
            size: "200g",
            protein: "25g"
        }
     ]);
     const arr = [setFoods(foods)];
    return (


        <div>
            <SearchFood />
            <br></br>
            <div className="foodList">
                {/* {foods.map((food) =>
                    <Food
                        name={food.name}
                        size={food.size}
                        protein={food.protein}
                    />
                )} */}
                {ad.map((food) =>
                    <Food/>
                )}

                {/* <Food name="Salad" serving="300g" protein="4g" />
                <Food name="Chicken" serving="500g" protein="21g" />
                <Food name="Peanut Butter" serving="30g" protein="6g" />
                <Food name="Peanut Butter" serving="30g" protein="6g" />
                <Food name="Peanut Butter" serving="30g" protein="6g" />
                <Food /> */}
                <div className="new-card">
                    <h3>Add food </h3><br></br>
                    <h1><FaPlus /></h1>

                </div>
            </div>
        </div>

    )
}

export default FoodList