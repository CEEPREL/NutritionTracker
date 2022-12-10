import React from 'react'

export default function Food({ item, food, onAdd, onRemove }) {
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
            <div>
                {item ? (
                    <div>
                        <button onClick={() => onRemove(item)} className="food-remove">
                            -
                        </button>

                        &nbsp;&nbsp;&nbsp;
                        <span>{item.qty}</span>
                        &nbsp;&nbsp;&nbsp;

                        <button onClick={() => onAdd(item)} className="food-add">
                            +
                        </button>
                    </div>
                ) : (
                    <div>
                    <button onClick={() => onAdd(food)} className="add-btn">Add meal</button>
                )}
            </div>
        </div >
    )
}

Food.defaultProps = {
    name: "Enter Food",
    serving: "0g",
    protein: "0g"
}
