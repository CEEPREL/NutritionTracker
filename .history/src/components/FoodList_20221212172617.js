import { FaPlus } from 'react-icons/fa';
import AddFood from './AddFood';
import Food from './Food';
import SearchFood from './SearchFood';

export default function FoodList({ food_data, mealItems, onAdd, onRemove, handleAddFoodItem }) {
    return (
        <>
            <SearchFood />
            <br></br>
            <div>
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>

            </div>
            <br></br>
            <div className="foodList">
                {food_data.map((food) =>
                    <Food
                        key={food.id}
                        food={food}
                        item={mealItems.find((x) => x.id === food.id)}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        

                    />
                )}
                <div className="new-card">
                    <AddFood/>
                    <h3>Add food </h3><br></br>
                    <h1><FaPlus /></h1>
                </div>
            </div>
        </>
    )
}

{/* 
                <Food name="Salad" serving="300g" protein="4g" />
                <Food name="Chicken" serving="500g" protein="21g" />
                <Food name="Peanut Butter" serving="30g" protein="6g" />
                <Food name="Peanut Butter" serving="30g" protein="6g" />
                <Food name="Peanut Butter" serving="30g" protein="6g" />
                <Food /> 
                */}