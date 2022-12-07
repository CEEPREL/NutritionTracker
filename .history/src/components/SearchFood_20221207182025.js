import React from 'react'
import { MdSearch } from 'react-icons/md'

function SearchFood() {
    return (
        <div className="searchFood">
            <MdSearch className="search-icons" size="1.3em" color="primary"/>
            <input
                // onChange={(event) => handleSearchNote(event.target.value)}
                type="text"
                placeholder="type to search...">

            </input>
        </div>
    )
}

export default SearchFood