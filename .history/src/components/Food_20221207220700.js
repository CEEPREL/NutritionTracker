import React from 'react'

function Food(props) {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <h5>Serving: {props.serving}</h5>
            <h5>Protein: {props.protein}</p>
        </div>
    )
}

export default Food
