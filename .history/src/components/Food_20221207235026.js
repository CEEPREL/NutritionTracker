import React from 'react'

function Food({name, serving, protein}) {
    return (
        <div className="food-card">
            <h3>{name}</h3>
            <br></br>
            <p>Serving: {serving}</p>
            <p>Protein: {protein}</p>
        </div>
    )
}
Food.defaultProps = {
    name: "Enter Food Enter Food Enter Food",
    serving: "0g",
    protein: "0g"
  }

export default Food
