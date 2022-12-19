import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import AddFood from './AddFood';
import AddFoodModal from './AddFoodModal';
import Food from './Food';
import SearchFood from './SearchFood';

export default function FoodList({ food_data, mealItems, onAdd, onRemove, handleAddFoodItem, handleDeleteFoodItem }) {

    return (
        <>

            <br></br>
            <div>
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>
            </div>
            <br></br>
            <div className="foodList">
                <div className="new-card">
                    <AddFoodModal handleAddFoodItem={handleAddFoodItem}/>
                </div>
                {food_data.map((food) =>
                    <Food
                        key={food.id}
                        food={food}
                        item={mealItems.find((x) => x.id === food.id)}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        handleDeleteFoodItem={handleDeleteFoodItem}
                    />
                )}
                <div className="new-card">
                    <AddFood
                        handleAddFoodItem={handleAddFoodItem} />
                </div>
            </div>
        </>
    )
}
