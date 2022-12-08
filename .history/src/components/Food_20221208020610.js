import React from 'react'

const Food = ({ name, size, protein }) => {
    return (
        <div className="food-card">
            <h3>{name}</h3>
            <br></br>
            <img className="small" src-{food.}
            <div>
                <p>Serving: {size}</p>
                <p>Protein: {protein}</p>
            </div>

        </div>
    )
}

Food.defaultProps = {
    name: "Enter Food",
    serving: "0g",
    protein: "0g"
}

export default Food
