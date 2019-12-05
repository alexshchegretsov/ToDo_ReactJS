import React from 'react';
import './search-panel.css'
// search panel component
const SearchPanel = () => {
    const searchType = "Type here to search";


    return <input
        className="form-control search-input"
        type="text"
        placeholder={searchType}
    />
};

export default SearchPanel;