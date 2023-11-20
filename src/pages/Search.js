import React, { useState } from 'react';

function Search({ handleFilter }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        handleFilter(newSearchTerm);
    };

    return (
        <div className='search'>
            <label>Filter products by Name:</label>
            <input
                onChange={handleChange}
                value={searchTerm}
            />
        </div>
    );
}

export default Search;
