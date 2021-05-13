import React from 'react';
import '../Common.css';
import './SchoolContact.css';


function SchoolContact(props) {
    return (
        <div>
            <h1 className="h1_font">Contact</h1>
            <h3 className="h1_font">Address</h3>
            <span>45, sjdjue,ndj jencj, hdndc-294044</span>
            <h3 className="h1_font">Contact No.</h3>
            <div className="phn_box">
                <span>8439385849</span>
                <span>7383943838</span>
                <span>7483938584</span>
            </div>

            <h3 className="h1_font">Email I'd</h3>
            <span>jhdsjks@jdjd.com</span>
            <h3 className="h1_font">Website</h3>
            <a href="/">www.sjbsvm.com</a>

        </div>
    )

}

export default SchoolContact;