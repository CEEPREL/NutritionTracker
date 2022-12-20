import React from 'react'

function Header() {
    var today = new Date();
  var day = today.getDay();
  
    return (

        <div className="header">
            <h2>Add food items to track your daily meals</h2>
        </div>

    )
}
export default Header;