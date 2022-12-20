import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

function AddFood({ handleAddFoodItem }) {
  const [name, setName] = useState("")
  const [serving, setServing] = useState("")
  const [protein, setProtein] = useState("")
  const [calories, setCalories] = useState("")
  const [sugar, setSugar] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddFoodItem(name, serving, protein, calories, sugar)
    setName("")
    setServing("")
    setProtein("")
    setCalories("")
    setSugar("")
  }

  return (
    <div style={{ textAlign: 'center' }}>
      
      </form>
      <h3>Add food </h3>
      <br></br>
      <h1><FaPlus /></h1>
    </div>
  )
}

export default AddFood