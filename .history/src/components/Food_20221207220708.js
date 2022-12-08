import React from 'react'

function Food(props) {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <h4>Serving: {props.serving}</h4>
            <h5>Protein: {props.protein}</h5>
        </div>
    )
}

export default Food
