import React from 'react'
import "./SearchField.css"


function SearchField(props) {
    let enteredString = ""

    const handleTextChange = (event) => {
        enteredString = event.target.value
        props.searchData(enteredString)
    }

    return (
        <div className="search-box d-flex align-items-center justify-content-center">
            <fieldset fieldset class="field-container" >
                <input onChange={handleTextChange} type="text" placeholder="Search..." class="field" />
            </fieldset>
        </div>
    )
}

export default SearchField