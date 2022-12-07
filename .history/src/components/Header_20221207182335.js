import React from 'react'
import SearchFood from './SearchFood'

function Header(props) {
    return (
        
            <div className="header">
               <h1>Add food items to track your daily meals</h1> 
               <SearchFood className="width:1" />
            </div>
        
    )
}

export default Header