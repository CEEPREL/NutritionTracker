import { useEffect, useState } from "react"
import React from 'react'
import Modal from 'react-modal';
import Food from "./components/Food";

export default function FetchFoodApi() {
    const API_KEY = 'XlbmfvBoP5wat3i76hIV0RZzstoaPCp9M52WGasf'
    const [apiData, setApiData] = useState(null);
    const [typedFood, setTypedFood] = useState('');
    const [fetchedFood, setFetchedFood] = useState('');
    const [fetchError, setFetchError] = useState('')
    
    function fetchFoodData() {

    }

    const fetchData = () => {
        if (typedFood === ' ') { return } 
        fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${typedFood}&pageSize=5`)
            .then((response) => {
                if (!response.ok) return('Did not receive expected food data')
                return response.json()
            })
            .then((data) => {
                setFetchedFood(data.foods);
                console.log(data)
                setFetchError(null);
            })
            .catch((err) => {
                console.log(err.message);
                setFetchError(err.message);
            });
    };

    return (
        <div>
            <h2>Search for specific food nutrients</h2>
            <br></br>
            <input
                placeholder="Type food to load..."
                onChange={(event) => {
                    setTypedFood(event.target.value)
                }}
                required>
            </input>
            <button onClick={fetchData}>Fetch food</button>
            <br></br>
            {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}

            {fetchedFood ?
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {fetchedFood.map((result, index) => {
                        return (
                            <div style={{ display: "flex", flexWrap: "wrap", flex: '1' }}>
                                {/* <Food
                                    key={result.id}
                                    food={result}
                                /> */}
                                <div style={{
                                    display: "flex", flexDirection: "column", flexWrap: "wrap",
                                    minWidth: '14rem', maxWidth: '14rem'
                                }}>
                                    <br></br>
                                    !typedFood ?
                                    <p>{result.description}&nbsp;&nbsp;&nbsp;</p>
                                    <p>Size&nbsp;{result.packageWeight}g&nbsp;&nbsp;&nbsp;</p>
                                    <p>Protein&nbsp;{result.foodNutrients[0].value}g&nbsp;&nbsp;&nbsp;</p>
                                    <p>Carbs&nbsp;{result.foodNutrients[2].value}g&nbsp;&nbsp;&nbsp;</p>
                                    <p>Sugars&nbsp;{result.foodNutrients[4].value}g&nbsp;&nbsp;&nbsp;</p>
                                    <br></br>
                                </div>
                            </div>
                        )
                    })}
                </div>
                : <p><br></br>Fetch items to display</p>
            }
        </div>
    )
}
// https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=XlbmfvBoP5wat3i76hIV0RZzstoaPCp9M52WGasf
