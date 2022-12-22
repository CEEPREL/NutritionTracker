import React, { useEffect, useState } from 'react'

export default function SetTargets() {
    const [targetProtein, setTargetProtein] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        // handleAddFoodItem(name, serving, protein, calories, sugar)

        localStorage.setItem('targetProtein', JSON.stringify(targetProtein));
        setTargetProtein(localStorage.getItem('targetProtein') ? JSON.parse(localStorage.getItem('targetProtein'))
            : ("")
        );

        // setName("")
        // setServing("")
        // setProtein("")
        // setCalories("")
        // setSugar("")
    }
    useEffect(() => {
        setTargetProtein(localStorage.getItem('targetProtein') ? JSON.parse(localStorage.getItem('targetProtein'))
            : ("")
        );
    }, []);
    return (
        <details style={{ display: 'flex', flexDirection: 'column', border: "1px solid #aaa", borderRadius: "4px", padding: "0.5em", marginTop: "8px" }}>
            <div style={{ display: 'flex', gap: "10px", marginTop: '10px', justifyContent: "center", alignItems: 'flex-end' }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3>Protein</h3>
                    <input style={{ width: "3rem"}}
                        type="text"
                        id="targetProtein"
                        value={targetProtein}
                        onChange={(e) => setTargetProtein(e.target.value)}
                    />
                    <div>asd</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3>Calories</h3>
                    <input style={{ width: "2rem"}} type="text" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3>Sugar</h3>
                    <input type="text" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                </div>
            </div>
            <br></br>
            <h4>{targetProtein > 0 ? targetProtein : "Target Protein: Set a target"}</h4>

            <button type="submit" onClick={handleSubmit}
                style={{ backgroundColor: "#1f6e77", color: 'white', fontSize: "1rem", padding: "0.5rem", fontWeight: "bold", marginTop: "0.5rem", cursor: "pointer" }}>
                Set targets
            </button>

        </details>
    )
}