import { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import Spinner from '../shared/Spinner';
import AddFoodModal from './AddFoodModal';
import Food from './Food';
import { AnimatePresence, motion } from 'framer-motion'


export default function FoodList({ food_data, mealItems, onAdd, onRemove, handleAddFoodItem, handleDeleteFoodItem }) {
    const { foods, isLoading } = useContext(FoodContext)

    if (!isLoading && (!foods || foods.length === 0)) {
        return <p>No foods added yet.</p>
    }

    return isLoading ? <Spinner /> : (
        <>
            <AnimatePresence>

                <br></br>
                <div>
                    <button>Breakfast</button>
                    <button>Lunch</button>
                    <button>Dinner</button>
                </div>
                <br></br>
                
                <div className="foodList">
                    <div className="new-card">
                        <AddFoodModal handleAddFoodItem={handleAddFoodItem} />
                    </div>
                    
                        {!isLoading && food.length > 0 ? foods.map((food) => (
                            <Food
                                key={food.id}
                                food={food}
                                item={mealItems.find((x) => x.id === food.id)}
                                onAdd={onAdd}
                                onRemove={onRemove}
                                handleDeleteFoodItem={handleDeleteFoodItem}
                            />
                        )) :
                        
                        }

                </div>
            </AnimatePresence>
        </>
    )
}
