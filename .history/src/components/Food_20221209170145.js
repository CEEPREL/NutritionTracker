import React from 'react'

export default function Food({ item,food, onAdd, onRemove }) {
    return (
        <div className="food-card">
            <div className="food-name">
                <h4 ><strong>{food.name}</strong></h4>
            </div>
            
            <img className="small" src={food.image} alt={food.name}></img>
            
            <div className="food-nutrients">
                <p>Serving: {food.size}g</p>
                <p>Protein: {food.protein}g</p>
            </div>
            <button onClick={() => onAdd(food)} className="add-btn">Add</button>

        </div>
    )
}

Food.defaultProps = {
    name: "Enter Food",
    serving: "0g",
    protein: "0g"
}
