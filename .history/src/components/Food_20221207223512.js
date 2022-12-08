import React from 'react'

function Food(props) {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p>Serving: {props.serving}</p>
            <p>Protein: {props.protein}</p>
        </div>
    )
}

export default Food
