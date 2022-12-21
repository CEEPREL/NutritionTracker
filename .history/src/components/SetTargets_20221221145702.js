import React, { useState } from 'react'

export default function SetTargets() {
    const [targetProtein, setTargetProtein] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        // handleAddFoodItem(name, serving, protein, calories, sugar)
        // setName("")
        // setServing("")
        // setProtein("")
        // setCalories("")
        // setSugar("")
    }

    return (

        <details style={{ display: 'flex', flexDirection: 'column', border: "1px solid #aaa", borderRadius: "4px", padding: "0.5em", marginTop: "8px" }}>
            <div style={{ display: 'flex', gap: "10px", marginTop: '10px', justifyContent: "left", alignItems: 'flex-end' }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3>Protein</h3>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setTargetProtein(e.target.value)}/>
                   


                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3>Calories</h3>
                    <input type="text" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3>Sugar</h3>
                    <input type="text" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                </div>
            </div>
            <br></br>
            <h4>Target Protein: {targetProtein > 0 ? targetProtein : "Set a target"}</h4>

            <button style={{ backgroundColor: "#1f6e77", color: 'white', fontSize: "1rem", padding: "0.5rem", fontWeight: "bold", marginTop: "0.5rem" }}>
                Set targets
            </button>
        </details>
    )
}
