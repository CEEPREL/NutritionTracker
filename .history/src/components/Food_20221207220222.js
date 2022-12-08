import React from 'react'

function Food(props) {
    const name = props.name;
    const serving = props.serving;
    const protein = props.protein;

    return (
        <div className="card">
            <h2>name}</h2>
            <h5>{serving}</h5>
            <p>{props.protein}</p>
        </div>
    )
}

export default Food
