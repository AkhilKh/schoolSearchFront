import './SchoolProfile.css';
import React, { useState } from 'react';
import SchoolAbout from './SchoolInfoComponet/SchoolAbout';
import SchoolResult from './SchoolInfoComponet/SchoolResult';
import SchoolContact from './SchoolInfoComponet/SchoolContact';
import SchoolAdmission from './SchoolInfoComponet/SchoolAdmission';
import SchoolReview from './SchoolInfoComponet/SchoolReview';
import SchoolGallery from './SchoolInfoComponet/SchoolGallery';
import SchoolFees from './SchoolInfoComponet/SchoolFees';

function SchoolProfile() {
    const [openAbout, setOpenAbout] = useState(true);
    const [openResult, setOpenResult] = useState(false);
    const [openContact, setOpenContact] = useState(false);
    const [openAdmission, setOpenAdmission] = useState(false);
    const [openReview, setOpenReview] = useState(false);
    const [openGallery, setOpenGallery] = useState(false);
    const [openFees, setOpenFees] = useState(false);


    /* put all state false to open particular tab*/
    const prevClick = () => {
        setOpenAbout(false);
        setOpenContact(false);
        setOpenResult(false);
        setOpenAdmission(false);
        setOpenReview(false);
        setOpenGallery(false);
        setOpenFees(false);
    }

    const onClickAbout = () => {
        prevClick();
        setOpenAbout(true);
    }

    const onClickResult = () => {
        prevClick();
        setOpenResult(true);
    }

    const onClickContact = () => {
        prevClick();
        setOpenContact(true);
    }

    const onClickReview = () => {
        prevClick();
        setOpenReview(true);
    }

    const onClickAdmission = () => {
        prevClick();
        setOpenAdmission(true);
    }

    const onClickGallery = () => {
        prevClick();
        setOpenGallery(true);
    }

    const onClickFees = () => {
        prevClick();
        setOpenFees(true);
    }

    return (
        <div style={{backgroundColor: "#E5E5E5"}}>
            <div className='school-image' ></div>
            <div className='school-name-box' >
                <div className="school-logo"></div>
                <div className="school-heading">
                    <span style={{ fontSize: 35 }}>Shri Ji baba saraswati vidya mandir</span>
                    <span style={{ marginTop: '5px' }}>Mathura</span>
                </div>
                <div className="button-div">
                    <button className="button-style">Download</button>
                    <button className="button-style" style={{ marginTop: '10px' }}>Contact</button></div>
            </div>
            <div className="school-menu">
                <button className="menu-button" onClick={onClickAbout}>About</button>
                <button className="menu-button" onClick={onClickResult}>Result</button>
                <button className="menu-button" onClick={onClickContact}>Contact</button>
                <button className="menu-button" onClick={onClickAdmission}>Admission</button>
                <button className="menu-button" onClick={onClickReview}>Review</button>
                <button className="menu-button" onClick={onClickGallery}>Gallery</button>
                <button className="menu-button" onClick={onClickFees}>Fees</button>



            </div>
            <div className="info-section">
                {openAbout ? <SchoolAbout /> :
                    (openResult ? <SchoolResult /> :
                        (openContact ? <SchoolContact /> :
                            (openAdmission ? <SchoolAdmission /> :
                                (openReview ? <SchoolReview /> :
                                    (openGallery ? <SchoolGallery /> :
                                        (openFees ? <SchoolFees /> : ''))))))}
            </div>


        </div>
    )
}

export default SchoolProfile;