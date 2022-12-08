import React from 'react'

const Food = ({ id, name, size, protein, image }) => {
    return (
        <div className="food-card">
            
            <h5><strong>{name}</strong></h5>
            <br></br>
            {/* <img className="small" src={image} alt={name}></img> */}
            <div className=".flex-column">
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
