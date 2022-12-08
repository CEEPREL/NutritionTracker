import React from 'react'

function Food(props) {
    const name = props.name;
    const serving = props.serving;
    const serving = props.serving;
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <h5>{props.serving}</h5>
            <p>{props.protein}</p>
        </div>
    )
}

export default Food
