import React from 'react'

const Food = ({ name, servisizeng, protein }) => {
    return (
        <div className="food-card">
            <h3>{name}</h3>
            <br></br>
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
