import React from 'react'

export default function SetTargets() {
    return (
        <divstyle={{display: 'flex', flexDirection: 'column',}}>
        <details style={{  border: "1px solid #aaa", borderRadius: "4px", padding: "0.5em", marginTop: "8px" }}>
            <div style={{ display: 'flex', gap: "10px", marginTop: '10px', flexGrow: "1", justifyContent:"center", alignItems: 'flex-end' }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Protein</label>
                    <input type="text" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Calories</label>
                    <input type="text" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Sugar</label>
                    <input type="text" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label></label>
                    <button style={{}}>Set targets</button>
                </div>
                <button style={{}}>Set targets</button>
            </div>
        </details></>
    )
}
