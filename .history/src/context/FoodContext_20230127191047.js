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

    const handleAddFoodItem = (name, serving, protein, calories, sugar) => { //get a meal and add to mealItems
        console.log("in func")
        const food = {
          id: nanoid(),
          name: name,
          serving: serving,
          protein: protein,
          calories: calories,
          sugar: sugar,
          category: "lunch"
        }
        const newFoods = [...foods, food]
        setFoods(newFoods); //'
        localStorage.setItem('foods', JSON.stringify(newFoods));
        console.log(newFoods)
      };
      
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