import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

function AddFood({handleAddFoodItem}) {
  const [name, setName] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddFoodItem(name)
    setText("")
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={handleAddFoodItem}>
        <label htmlFor="text">New Joke</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Joke</button>
      </form>
      <h3>Add food </h3>
      <br></br>
      <h1><FaPlus /></h1>
    </div>
  )
}

export default AddFood