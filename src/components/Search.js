import React from 'react'

const Search = (props) => {
    return (
        <div className='App-header'>
            <input className='form-control' value={props.value} onChange={(e) => props.setSearchValue(e.target.value)} 
            placeholder='search...'
			></input>
        </div>
    )
}

export default Search