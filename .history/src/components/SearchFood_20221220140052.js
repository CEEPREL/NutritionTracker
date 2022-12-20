import React from 'react'
import { MdSearch } from 'react-icons/md'

function SearchFood({ handleSearchFood }) {
    return (
        <div className="searchFood" style={{boxShadow="0px 0px 5px 1px rgba(0,0,0,0.1", outline: '3px solid #1f6e77', borderRadius: '2px' }} >
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