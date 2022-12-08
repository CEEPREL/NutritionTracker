import React from 'react'

function Food(props) {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <span>Serving: {props.serving}</span>
            <p>Protein: {props.protein}</p>
        </div>
    )
}

export default Food
