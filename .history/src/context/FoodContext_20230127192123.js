import { nanoid } from 'nanoid'
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

    const handleAddFoodItem = async (name, serving, protein, calories, sugar) => { //get a meal and add to mealItems
        const food = {
            id: nanoid(),
            name: name,
            serving: serving,
            protein: protein,
            calories: calories,
            sugar: sugar,
            category: "lunch"
          }

        const response = await fetch('https://silent-scratched-knife.glitch.me/food_data_json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(food),
        })

        const data = await response.json()

        setFoods([...foods])
        
        // localStorage.setItem('foods', JSON.stringify(food));
        // console.log(food)
      };

    return <FoodContext.Provider
        value={{
            foods,
            isLoading,
            setFoods,
            searchText,
            setSearchText,
            handleAddFoodItem,
            
        }}>
        {children}
    </FoodContext.Provider>

}

export default FoodContext