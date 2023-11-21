import React from 'react';

function Search({  searchTerm, setSearchTerm }) {

    const handleChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
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
