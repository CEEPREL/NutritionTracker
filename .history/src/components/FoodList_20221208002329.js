import React from 'react'
import { FaPlus } from 'react-icons/fa';
import Food from './Food';
import SearchFood from './SearchFood';


const FoodList = ({ foods }) => {
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

                <Food name="Salad" serving="300g" protein="4g" />
                <Food name="Chicken" serving="500g" protein="21g" />
                <Food name="Peanut Butter" serving="30g" protein="6g" />
                <Food name="Peanut Butter" serving="30g" protein="6g" />
                <Food name="Peanut Butter" serving="30g" protein="6g" />
                <Food />
                <div className="new-card">
                    <h3>Add food </h3><br></br>
                    <h1><FaPlus /></h1>

                </div>
            </div>
        </div>

    )
}

export default FoodList