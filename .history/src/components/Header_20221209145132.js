import React from 'react'
import SearchFood from './SearchFood'

function Header({ countMealItems }) {
    return (

        <div className="header">
            <h2>Add food items to track your daily meals</h2>
            <span>{countMealItems?}</span>
        </div>

    )
}

export default Header