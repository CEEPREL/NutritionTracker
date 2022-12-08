import React from 'react'

function Food({name, serving, protein}) {
    return (
        <div className="food-card">
            <h3>{name}</h3>
            <br></br>
            <p>Serving: {props.serving}</p>
            <p>Protein: {props.protein}</p>
        </div>
    )
}

export default Food
