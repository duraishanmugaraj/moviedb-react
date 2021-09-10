import React from 'react'
import "./SearchField.css"


function SearchField(props) {
    let enteredString = ""

    const handleTextChange = (event) => {
        enteredString = event.target.value
        props.searchData(enteredString)
    }

    return (
        <form>
            <div className="input-group">
                <input type="text" onChange={handleTextChange} className="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
            </div>
        </form>

    )
}

export default SearchField