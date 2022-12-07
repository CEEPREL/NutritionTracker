import React from 'react'

function SearchFood() {
  return (
    <div className="searchFood">SearchFood
    <MdSearch className="search-icons" size="1.3em" />
            <input
                onChange={(event) => handleSearchNote(event.target.value)}
                type="text"
                placeholder="type to search...">

            </input>
    </div>
  )
}

export default SearchFood