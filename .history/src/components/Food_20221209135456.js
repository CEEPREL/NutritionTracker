import React from 'react'

export default function Food({ id, name, size, protein, image, onAdd }) {
    return (
        <div className="food-card">
            <div className="food-name">
                <h4 ><strong>{name}</strong></h4>
            </div>
            
            <img className="small" src={image} alt={name}></img>
            
            <div className="food-nutrients">
                <p>Serving: {size}</p>
                <p>Protein: {protein}</p>
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
