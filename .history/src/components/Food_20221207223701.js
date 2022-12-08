import React from 'react'

function Food(props) {
    return (
        <div className="food-card">
            <h3>{props.name}</h3>
            <hr></hr>
            <p>Serving: {props.serving}</p>
            <p>Protein: {props.protein}</p>
        </div>
    )
}

export default Food
