import { createContext, useState } from 'react'
import { useEffect } from 'react'

const FoodContext = createContext()

export const FoodProvider = ({ children }) => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetchFoods()
    }, [])
    
    const fetchFoods = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v')
        const data = await response.json()
        setFoods(data)
    }

    return <FoodContext.Provider
        value={{
            feedback,
            isLoading,
            feedbackEdit,
            addFeedback,
            editFeedback,
            updateFeedback,
            deleteFeedback,
            //piece of state that holds the item
        }}>
        {children}
    </FoodContext.Provider>

}

export default FoodContext