import React from 'react'

export default function Food({ food, onAdd }) {
    return (
        <div className="food-card">
            <div className="food-name">
                <h4 ><strong>{food.name}</strong></h4>
            </div>
            
            <img className="small" src={food.image} alt={food.name}></img>
            
            <div className="food-nutrients">
                <p>Serving: {food.size}</p>
                <p>Protein: {food.protein}</p>
            </div>
            <button onClick={onAdd}className="add-btn">Add</button>

        </div>
    )
}

Food.defaultProps = {
    name: "Enter Food",
    serving: "0g",
    protein: "0g"
}
