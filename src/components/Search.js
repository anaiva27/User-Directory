import React from 'react'

const Search = ({handleSearchChange}) => {
    return (
        <search>
             <input className="search" onChange={handleSearchChange} placeholder="Search..."></input>
        </search>
    )
}

export default Search
