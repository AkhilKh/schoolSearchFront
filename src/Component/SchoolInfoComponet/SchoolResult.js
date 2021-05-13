import React from 'react';
import resultOne from '../../Images/img.jpg';
import './SchoolResult.css';
import '../Common.css';


function SchoolResult (props) {
    return (
        <div>
            <h1 className="h1_font">Result</h1>
            <div className="result_box">
            <img  src={resultOne} className="result_image"  alt="" />
            <img  src={resultOne} className="result_image" alt="" />
            </div>

        </div>
    )

}

export default SchoolResult;