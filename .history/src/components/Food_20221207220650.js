import React from 'react'

function Food(props) {
    return (
        <div className="card">
            <h3>{props.name}</h2>
            <h5>Serving: {props.serving}</h5>
            <p>Protein: {props.protein}</p>
        </div>
    )
}

export default Food
