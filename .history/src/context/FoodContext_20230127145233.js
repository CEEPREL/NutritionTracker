import { createContext, useState } from 'react'
import { useEffect } from 'react'

const FoodContext = createContext()

export const FoodProvider = ({ children }) => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetchFoods()
    }, [])

    const fetchFoods = async () => {
        const response = await fetch('https://silent-scratched-knife.glitch.me/food_data_json')
        const data = await response.json()
        setFoods(data)
    }

    return <FoodContext.Provider
        value={{
            foods,
        }}>
        {children}
    </FoodContext.Provider>

}

export default FoodContext