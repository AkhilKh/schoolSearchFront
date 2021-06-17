import React, { useState } from 'react';
import './SearchResult.css';
// import SearchBar from './SearchBar';
import Header from './Header';
import logo from '../Images/class.jpg';
import '../Component/Common.css';
import girl from '../Images/girl.png';
import location from '../Images/location.png';
import board from '../Images/board.png';
import review from '../Images/review.png';
import rating from '../Images/rating.png';
import './SearchBar.css';


const SearchResult = () => {
    const [searchData, setSearchData] = useState(null);
    const [noData, setNoData] = useState(false);

    var schoolData = [];
    const searchSchool = () => {
        fetch("http://localhost:8000/schoolInfo/" + searchData).then((data) => {
            data.json().then((resp) => {
                console.log("resp", resp);
                if (resp.length > 0) {
                    setSearchData({ searchData: resp });
                    setNoData({noData: true});
                    schoolData = resp;
                    console.log(schoolData[0].schoolName);
                }
                // else {
                //     setNoData({ noData: true });
                // }
            })
        })
    }


    return (
        <div style={{ backgroundColor: "#f9f9f9" }}>
            <Header />
            <div className="searchbar-box">
                <input
                    type='text'
                    className="search-input"
                    placeholder="Enter City"
                    onChange={(event) => setSearchData(event.target.value)} />
                <input
                    type='text'
                    className="search-input"
                    placeholder="Enter Board" />
                <input
                    type='text'
                    className="search-input"
                    style={{ width: "36%" }}
                    placeholder="Enter School Name" />
                <button className="searchbar-button" onClick={searchSchool}>Search</button>
            </div>
{noData ? 
            <div className="all_school">
                {
                    schoolData.map((schoolData) =>(
                <div className="school_info_box">
                    <div className="box1"><img src={logo} alt="" className="image_fit" /> </div>
                    <div className="box2"><h2>{schoolData.name}</h2>
                        <p style={{ margin: "auto", marginTop: "-5%" }}> <img src={location} alt="" className="wd_20 h_20 mr_5" />Mathura</p>
                        <a href="www.f.com">Click here to view</a></div>
                    <div className="box3">
                        <span className="mr_10 ml_5"><img src={girl} alt='' className="wd_20 h_20 mr_5" />Only for boys</span>|
                        <span className="mr_10 ml_5"><img src={board} alt="" className="wd_20 h_20 mr_5" />CBSE</span>|
                        <span className="mr_10 ml_5"><img src={review} alt="" className="wd_20 h_20 mr_5" />512 Reviews</span>|
                        <span className="mr_10 ml_5"><img src={rating} alt="" className="wd_20 h_20 mr_5" />4.5/5</span></div>
                    {/* <div></div> */}
                    <div className="box4"><button className="school_info_button">Brouchure</button>
                        <button className="school_info_button">Contact</button></div>
                </div> )
                )
}
                </div>
                : <div>No Data</div>
}
            </div>



    )
}

export default SearchResult;