import { FaPlus } from 'react-icons/fa';
import Food from './Food';
import SearchFood from './SearchFood';

funvtion FoodList = ({ food_data, onAdd }) => {
    return (
        <div>
            <SearchFood />
            <br></br>

            <div className="foodList">
                {food_data.map((food) =>
                    <Food
                        key={food.id}
                        name={food.name}
                        size={food.size}
                        protein={food.protein}
                        image={food.image}
                        onAdd = {food.onAdd}
                    />
                )}

                {/* 
                <Food name="Salad" serving="300g" protein="4g" />
                <Food name="Chicken" serving="500g" protein="21g" />
                <Food name="Peanut Butter" serving="30g" protein="6g" />
                <Food name="Peanut Butter" serving="30g" protein="6g" />
                <Food name="Peanut Butter" serving="30g" protein="6g" />
                <Food /> 
                */}
                <div className="new-card">
                    <h3>Add food </h3><br></br>
                    <h1><FaPlus /></h1>

                </div>
            </div>
        </div>

    )
}

