import React from 'react';
import './Header.css';
import LoginPopup from './LoginPopup';
import { useState } from 'react';
import Modal from 'react-modal';
import RegisterPopup from "./RegisterPopup";


const Header = () => {
    const [LoginPopupModal, SetLoginPopupModal] = useState(false);
    const [SignUpPopupModal, setSignUpPopupModal] = useState(false);

    /*Open Login Popup*/
    const toggleLoginPopup = () => {
        SetLoginPopupModal(!LoginPopupModal);
    }

    /*Open SignUp Popup*/
    const toggleSignupPopup = () => {
        setSignUpPopupModal(!SignUpPopupModal);
    }

    return (
        <div>
            <div className="top-header">
                <button className='header-button' onClick={toggleLoginPopup}>Login</button>
                <button className='header-button' onClick={toggleSignupPopup}>Register</button>

                {/*Open Login Popup*/}
                <Modal isOpen={LoginPopupModal} className="popup-modal" >
                    <LoginPopup />
                </Modal>

                {/*Open Register Popup*/}
                <Modal isOpen={SignUpPopupModal} className="popup-modal">
                    <RegisterPopup />
                </Modal>


            </div>
        </div>

    )
}

export default Header;