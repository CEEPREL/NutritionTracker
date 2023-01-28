import { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import AddFoodModal from './AddFoodModal';
import Food from './Food';
import Spinner from './assets/Spinner';

export default function FoodList({ food_data, mealItems, onAdd, onRemove, handleAddFoodItem, handleDeleteFoodItem }) {
    const { foods } = useContext(FoodContext)
    
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
                
                {foods.map((food) =>
                    <Food
                        key={food.id}
                        food={food}
                        item={mealItems.find((x) => x.id === food.id)}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        handleDeleteFoodItem={handleDeleteFoodItem}
                    />
                )}
            </div>
        </>
    )
}
