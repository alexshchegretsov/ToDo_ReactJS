import React from 'react';

// search panel component
const SearchPanel = () => {
    const searchType = "Type here to search";
    const searchStyle = {
        fontSize: "20px"
    };
    return <input
        type="text"
        placeholder={searchType}
        style={searchStyle}
    />
};

export default SearchPanel;