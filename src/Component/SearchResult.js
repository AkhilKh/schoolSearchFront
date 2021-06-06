import React from 'react';
import './SearchResult.css';
import SearchBar from './SearchBar';
import Header from './Header';
import logo from '../Images/class.jpg';
import '../Component/Common.css';
import girl from '../Images/girl.png';
import location from '../Images/location.png';
import board from '../Images/board.png';
import review from '../Images/review.png';
import rating from '../Images/rating.png';

const SearchResult = (props) => {
    return (
        <div style={{backgroundColor: "#f9f9f9"}}>
            <Header />
            <SearchBar />
            <div class="all_school">
                            <div className="school_info_box">
                                <div className="box1"><img src={logo} alt="" className="image_fit"/> </div>
                                <div className="box2"><h2>Shri Ji Baba Saeaswati Vidya Mandir</h2>
                               <p style={{    margin: "auto", marginTop: "-5%"}}> <img src={location} alt="" className="wd_20 h_20 mr_5" />Mathura</p>
                                <a href="www.f.com">Click here to view</a></div>
                                <div className="box3">
                                    <span className="mr_10 ml_5"><img src={girl} alt='' className="wd_20 h_20 mr_5" />Only for boys</span>|
      <span className="mr_10 ml_5"><img src={board} alt="" className="wd_20 h_20 mr_5" />CBSE</span>|
      <span className="mr_10 ml_5"><img src={review} alt="" className="wd_20 h_20 mr_5" />512 Reviews</span>|
      <span className="mr_10 ml_5"><img src={rating} alt="" className="wd_20 h_20 mr_5" />4.5/5</span></div>
                                {/* <div></div> */}
                                <div className="box4"><button className="school_info_button">Brouchure</button>
                                <button className="school_info_button">Contact</button></div>
                            </div>

                            <div className="school_info_box">
                                <div className="box1"><img src={logo} alt="" className="image_fit"/> </div>
                                <div className="box2"><h2>Shri Ji Baba Saeaswati Vidya Mandir</h2>
                               <p style={{    margin: "auto", marginTop: "-5%"}}> <img src={location} alt="" className="wd_20 h_20 mr_5" />Mathura</p>
                                <a href="www.f.com">Click here to view</a></div>
                                <div className="box3">
                                    <span className="mr_10 ml_5"><img src={girl} alt='' className="wd_20 h_20 mr_5" />Only for boys</span>|
      <span className="mr_10 ml_5"><img src={board} alt="" className="wd_20 h_20 mr_5" />CBSE</span>|
      <span className="mr_10 ml_5"><img src={review} alt="" className="wd_20 h_20 mr_5" />512 Reviews</span>|
      <span className="mr_10 ml_5"><img src={rating} alt="" className="wd_20 h_20 mr_5" />4.5/5</span></div>
                                {/* <div></div> */}
                                <div className="box4"><button className="school_info_button">Brouchure</button>
                                <button className="school_info_button">Contact</button></div>
                            </div>

                            <div className="school_info_box">
                                <div className="box1"><img src={logo} alt="" className="image_fit"/> </div>
                                <div className="box2"><h2>Shri Ji Baba Saeaswati Vidya Mandir</h2>
                               <p style={{    margin: "auto", marginTop: "-5%"}}> <img src={location} alt="" className="wd_20 h_20 mr_5" />Mathura</p>
                                <a href="www.f.com">Click here to view</a></div>
                                <div className="box3">
                                    <span className="mr_10 ml_5"><img src={girl} alt='' className="wd_20 h_20 mr_5" />Only for boys</span>|
      <span className="mr_10 ml_5"><img src={board} alt="" className="wd_20 h_20 mr_5" />CBSE</span>|
      <span className="mr_10 ml_5"><img src={review} alt="" className="wd_20 h_20 mr_5" />512 Reviews</span>|
      <span className="mr_10 ml_5"><img src={rating} alt="" className="wd_20 h_20 mr_5" />4.5/5</span></div>
                                {/* <div></div> */}
                                <div className="box4"><button className="school_info_button">Brouchure</button>
                                <button className="school_info_button">Contact</button></div>
                            </div>

                            <div className="school_info_box">
                                <div className="box1"><img src={logo} alt="" className="image_fit"/> </div>
                                <div className="box2"><h2>Shri Ji Baba Saeaswati Vidya Mandir</h2>
                               <p style={{    margin: "auto", marginTop: "-5%"}}> <img src={location} alt="" className="wd_20 h_20 mr_5" />Mathura</p>
                                <a href="www.f.com">Click here to view</a></div>
                                <div className="box3">
                                    <span className="mr_10 ml_5"><img src={girl} alt='' className="wd_20 h_20 mr_5" />Only for boys</span>|
      <span className="mr_10 ml_5"><img src={board} alt="" className="wd_20 h_20 mr_5" />CBSE</span>|
      <span className="mr_10 ml_5"><img src={review} alt="" className="wd_20 h_20 mr_5" />512 Reviews</span>|
      <span className="mr_10 ml_5"><img src={rating} alt="" className="wd_20 h_20 mr_5" />4.5/5</span></div>
                                {/* <div></div> */}
                                <div className="box4"><button className="school_info_button">Brouchure</button>
                                <button className="school_info_button">Contact</button></div>
                            </div>
                            </div>

                            
        </div>

    )
}

export default SearchResult;