import React from 'react';
import './SearchSlider.css';

function SearchSlider() {
    return (
        <div className='search-component-background'>
           <div className="search_field_div">
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
            <div style={{alignSelf: "center"}} className="mt_2_p">
                <button className='search-button'>Search</button>
            </div>
            </div>
        </div>
    )
}

export default SearchSlider;
