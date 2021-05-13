import React from 'react';
import './SearchSlider.css';

function SearchSlider() {
    return (
        <div className='search-component-background'>
            <div className='search-fields-box'>
                <input
                    type='text'
                    className="search-fields"
                    placeholder="Enter City" />
                <input
                    type='text'
                    className="search-fields"
                    placeholder="Enter Board" />
                <input
                    type='text'
                    className="search-fields"
                    style={{ width: "400px" }}
                    placeholder="Enter School Name" />
            </div>
            <div>
                <button className='search-button'>Search</button>
            </div>
        </div>
    )
}

export default SearchSlider;
