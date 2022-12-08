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
Tool.defaultProps = {
    name: "Designer",
    tool: "Adobe XD"
  }
export default Food
