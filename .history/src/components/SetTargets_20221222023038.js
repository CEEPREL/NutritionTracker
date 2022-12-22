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
            <div style={{ display: 'flex' }} >
                <div id="col1" style={{ flexBasis: '50%', display: 'inlineBlock' }}>

                    <br></br>
                    Set personal nutrient targets
                    <div style={{ display: 'flex', gap: "30px", marginTop: '10px', justifyContent: "center", }}>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <p>Protein</p>
                            <input style={{ width: "4rem" }}
                                type="text"
                                id="targetProtein"
                                value={targetProtein}
                                onChange={(e) => setTargetProtein(e.target.value)}
                            />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <p>Calories</h3>
                            <input style={{ width: "4rem" }} type="text" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <h3>Sugar</h3>
                            <input style={{ width: "4rem" }} type="text" />
                        </div>
                    </div>
                </div>

                <div id="col2" style={{ flexBasis: '50%', display: 'inlineBlock' }}>
                    <br></br>
                    Set personal nutrient targets
                    <div style={{ display: 'flex', gap: "30px", marginTop: '10px', justifyContent: "center", }}>
                    
                    <h3>Protein</h3>
                            <input style={{ width: "4rem" }}
                                type="text"
                                id="targetProtein"
                                value={targetProtein}
                                onChange={(e) => setTargetProtein(e.target.value)}
                            />
                    </div>
                </div>
            </div>







            <button type="submit" onClick={handleSubmit}
                style={{ backgroundColor: "#1f6e77", color: 'white', fontSize: "1rem", padding: "0.3rem", fontWeight: "bold", marginTop: "0.5rem", cursor: "pointer" }}>
                Set targets
            </button>
            <br></br>
            <h4>Protein: {targetProtein > 0 ? targetProtein : "Target Protein: Set a target"}</h4>
        </details>
    )
}