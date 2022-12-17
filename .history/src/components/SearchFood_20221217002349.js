import React from 'react'
import { MdSearch } from 'react-icons/md'

function SearchFood({ handleSearchFood }) {
    return (
        <div className="searchFood">
            <MdSearch className="search-icons" size="1.3em" color="blue"/>
            <input
                onChange={(event) => handleSearchFood(event.target.value)}
                type="text"
                placeholder="type to search...">

            </input>
        </div>
    )
}
export default SearchFood