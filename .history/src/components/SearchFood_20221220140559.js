import React from 'react'
import { MdSearch } from 'react-icons/md'

function SearchFood({ handleSearchFood }) {
    return (
        <div className="searchFood" style={{ outline: '3px solid #1f6e77', borderRadius: '2px' }} >
            <MdSearch className="search-icons" size="1.0rem" color="#1f6e77"/>
            <input style={{ width: '100%'}}
                onChange={(event) => handleSearchFood(event.target.value)}
                type="text"
                placeholder="type to search...">

            </input>
        </div>
    )
}
export default SearchFood