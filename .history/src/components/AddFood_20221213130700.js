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
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">New Food</label>
        <input
          type="text"
          id="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Add Food</button>
      </form>
      <h3>Add food </h3>
      <br></br>
      <h1><FaPlus /></h1>
    </div>
  )
}

export default AddFood