import { createContext, useState } from 'react'
import { useEffect } from 'react'

const FoodContext = createContext()

export const FoodProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [foods, setFoods] = useState([])
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchFoods()
    }, [])

    const fetchFoods = async () => {
        const response = await fetch('https://silent-scratched-knife.glitch.me/food_data_json')
        const data = await response.json()
        setFoods(data)
        setIsLoading(false)
    }

    return <FoodContext.Provider
        value={{
            foods,
            isLoading,
            setFoods,
            searchText,
            setSearchText,
            
        }}>
        {children}
    </FoodContext.Provider>

}

export default FoodContext