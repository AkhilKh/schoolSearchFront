import React from 'react';
import './SearchResult.css';
import SearchBar from './SearchBar';
import Header from './Header';
import logo from '../../src/Images/img.jpg';

const SearchResult = (props) => {
    return (
        <div style={{backgroundColor: "#f9f9f9"}}>
            <Header />
            <SearchBar />
            <div style={{marginTop: "53px"}}> 
                       <div className="school-title">
                <img src={logo} alt="" style={{width: "12%"}} />
                <div className="school-name">
                    <h1>Shri Ji Baba Saraswati Vidya Mandir</h1>
                    <div className="details-line">
                        <span>Mathura</span>
                        <span>CBSE Board</span>
                        <span>4.5/5</span>
                        <span>213 reviews</span>
                    </div>
                    </div>
                <button className="brouchre-button">Brouchure</button>
                </div>
                </div>
        </div>

    )
}

export default SearchResult;