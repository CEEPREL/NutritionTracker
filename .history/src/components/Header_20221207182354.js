import React from 'react'
import SearchFood from './SearchFood'

function Header(props) {
    return (
        
            <div className="header">
               <h1>Add food items to track your daily meals</h1> 
               <div>
               <SearchFood className="width:1px;" />
               </div>
            </div>
        
    )
}

export default Header