import React from 'react'

const Food = ({ id, name, size, protein, image }) => {
    return (
        <div className="food-card">
            
            <h4><strong>{name}</strong></h4>
            <br></br>
            <img className="small" src={image} alt={name}></img>
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
