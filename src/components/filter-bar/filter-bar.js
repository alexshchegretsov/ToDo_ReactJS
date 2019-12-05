import React from 'react';

const FilterBar = () => {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-info">All</button>
            <button type="button" className="btn btn-outline-secondary">Active</button>
            <button type="button" className="btn btn-outline-secondary">Done</button>
        </div>
    )
};

export default FilterBar;
