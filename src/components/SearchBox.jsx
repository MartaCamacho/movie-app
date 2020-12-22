import React from 'react'

const SearchBox = (props) => {
    return (
        <div className="col col-sm-4 search-container">
            <input className="form-control" value={props.value} 
            onChange={(event) => props.setSearchValue(event.target.value)} 
            placeholder="🔍 Search here your movie ...">
            </input>
        </div>
    )
}

export default SearchBox
