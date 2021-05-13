import React from 'react';
import './SchoolFees.css';
import FeeImage from '../../Images/img.jpg';
import '../Common.css';

function SchoolFees (props) {
    return (
        <div>
            <h1 className="h1_font">Fees</h1>
            <img src={FeeImage} alt="" className="fee_image" />

        </div>
    )

}

export default SchoolFees;