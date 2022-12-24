import React, { useEffect, useState } from 'react'

export default function SetTargets( {handleAddTargets, tp} ) {
    const [targetProtein, setTargetProtein] = useState(tp);
    const [targetCalories, setTargetCalories] = useState('');
    const [targetSugar, setTargetSugar] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        // handleAddFoodItem(name, serving, protein, calories, sugar)
        handleAddTargets(targetProtein, targetCalories)
        localStorage.setItem('targetProtein', JSON.stringify(targetProtein));
        localStorage.setItem('targetCalories', JSON.stringify(targetCalories));
        localStorage.setItem('targetSugar', JSON.stringify(targetSugar));

        setTargetProtein(localStorage.getItem('targetProtein') ? JSON.parse(localStorage.getItem('targetProtein'))
            : ("")
        );
        setTargetCalories(localStorage.getItem('targetCalories') ? JSON.parse(localStorage.getItem('targetCalories'))
            : ("")
        );
        setTargetSugar(localStorage.getItem('targetSugar') ? JSON.parse(localStorage.getItem('targetSugar'))
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
        setTargetCalories(localStorage.getItem('targetCalories') ? JSON.parse(localStorage.getItem('targetCalories'))
            : ("")
        );
        setTargetSugar(localStorage.getItem('targetSugar') ? JSON.parse(localStorage.getItem('targetSugar'))
            : ("")
        );
    }, []);

    return (
        <details style={{ display: 'flex', flexDirection: 'column', border: "1px solid #aaa", borderRadius: "4px", padding: "0.5em", marginTop: "8px" }}>
            <div style={{ display: 'flex' }} >
                <div id="col1" style={{ flexBasis: '50%', display: 'inlineBlock' }}>

                    <br></br>
                    Set personal nutrient targets
                    <div style={{ display: 'flex', gap: "10px", marginTop: '10px', justifyContent: "left", }}>

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
                            <p>Calories</p>
                            <input style={{ width: "4rem" }} type="text"
                                type="text"
                                id="targetCalories"
                                value={targetCalories}
                                onChange={(e) => setTargetCalories(e.target.value)}
                            />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <p>Sugar</p>
                            <input style={{ width: "4rem" }} type="text"
                                type="text"
                                id="targetSugar"
                                value={targetSugar}
                                onChange={(e) => setTargetSugar(e.target.value)}
                            />
                        </div>

                    </div>
                    <button type="submit" onClick={handleSubmit}
                        style={{ backgroundColor: "#1f6e77", color: 'white', fontSize: "1rem", padding: "0.3rem", fontWeight: "bold", marginTop: "0.5rem", cursor: "pointer" }}>
                        Set targets
                    </button>

                </div>

                <div id="col2" style={{ flexBasis: '50%', display: 'inlineBlock', marginLeft: '1rem', marginRight: '1rem'}}>
                    <br></br>
                    <p>Personal notes for calculating targets / gain muscle + weight</p>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: "15px", marginTop: '10px', justifyContent: "left" }}>
                        <details>
                        <summary>Protein</summary>

                        1.2g protein per body weight kg</details>
                        <details><summary style={{color: ''}}>Calories</summary>
                        To build muscle and gain weight, intake 2500 Calories</details>
                        <details><summary>Protein</summary>
                        40g max sugar grams per day</details>
                    </div>
                </div>
            </div>
            <br></br>
        </details>

    )
}