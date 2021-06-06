import './SchoolProfile.css';
import '../Component/Common.css';
import React, { useState } from 'react';
import SchoolAbout from './SchoolInfoComponet/SchoolAbout';
import SchoolResult from './SchoolInfoComponet/SchoolResult';
import SchoolContact from './SchoolInfoComponet/SchoolContact';
import SchoolAdmission from './SchoolInfoComponet/SchoolAdmission';
import SchoolReview from './SchoolInfoComponet/SchoolReview';
import SchoolGallery from './SchoolInfoComponet/SchoolGallery';
import SchoolFees from './SchoolInfoComponet/SchoolFees';
import image from '../Images/class.jpg';
import girl from '../Images/girl.png';
import location from '../Images/location.png';
import board from '../Images/board.png';
import review from '../Images/review.png';
import rating from '../Images/rating.png';


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
            <div className='school-image' >
                <img src={image} className="cover_image" alt=""></img>
            </div>
            <div className='school-name-box' >
                <div class="grid-container">
  <div class="item1"><img src={image} className="cover_image" alt=""></img></div>
  <div class="item2"><h1 class="mt_0">Shri Ji Baba Saraswati Vidya Mandir</h1></div>
  <div class="item3"><button className="brouchure_button">Brouchure</button></div>  
  <div class="item4"><button className="brouchure_button">Contact</button></div>
  <div class="item5"><div class="item6">
      <span className="mr_10 ml_5"><img src={location} alt="" className="wd_20 h_20 mr_5" />Mathura</span>|
      <span className="mr_10 ml_5"><img src={girl} alt='' className="wd_20 h_20 mr_5" />Only for boys</span>|
      <span className="mr_10 ml_5"><img src={board} alt="" className="wd_20 h_20 mr_5" />CBSE</span>|
      <span className="mr_10 ml_5"><img src={review} alt="" className="wd_20 h_20 mr_5" />512 Reviews</span>|
      <span className="mr_10 ml_5"><img src={rating} alt="" className="wd_20 h_20 mr_5" />4.5/5</span>
      </div>
      </div>
</div>
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