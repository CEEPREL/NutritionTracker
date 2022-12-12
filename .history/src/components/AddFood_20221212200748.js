import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

function AddFood({ handleAddFoodItem }) {
  const [name, setName] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddFoodItem(name)
    setName("")
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={handleAddFoodItem}>
        <label htmlFor="text">New Food Item</label
        
        />
        <button type="submit" onClick={handleAddFoodItem}>Add Food</button>
      </form>
      <h3>Add food </h3>
      <br></br>
      <h1><FaPlus /></h1>
    </div>
  )
}

export default AddFood