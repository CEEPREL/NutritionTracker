import React from 'react'

const Food = ({ id, name, size, protein, image }) => {
    return (
        <div className="food-card">
            <div className="food-name">
                <h4 ><strong>{name}</strong></h4>

            </div>
            
            <div>
            <img className="small" src={image} alt={name}></img>
            </div>
            <div className="food-nutrients">
                <p>Serving: {size}</p>
                <p>Protein: {protein}</p>
            </div>
            <button>Add</button>

        </div>
    )
}

Food.defaultProps = {
    name: "Enter Food",
    serving: "0g",
    protein: "0g"
}

export default Food
