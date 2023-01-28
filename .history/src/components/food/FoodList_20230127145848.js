import AddFoodModal from './AddFoodModal';
import Food from './Food';

export default function FoodList({ food_data, mealItems, onAdd, onRemove, handleAddFoodItem, handleDeleteFoodItem }) {
    const { food } = use
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
            </div>
        </>
    )
}
