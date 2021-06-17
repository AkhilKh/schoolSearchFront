import React from 'react';
import './Header.css';
import LoginPopup from './LoginPopup';
import { useState } from 'react';
import Modal from 'react-modal';
import RegisterPopup from "./RegisterPopup";


const Header = () => {
    const [LoginPopupModal, setLoginPopupModal] = useState(false);
    const [SignUpPopupModal, setSignUpPopupModal] = useState(false);
    const [LoggedUser, setLoggedUser] = useState(true);

    /*Open Login Popup*/
    const toggleLoginPopup = () => {
        setLoginPopupModal(!LoginPopupModal);
    }

    /*Open SignUp Popup*/
    const toggleSignupPopup = () => {
        setSignUpPopupModal(!SignUpPopupModal);
    }



    return (
        <div>
            <div className="top-header">
                {LoggedUser ?
                (<div><button className='header-button' onClick={toggleLoginPopup}>Login</button>
                <button className='header-button' onClick={toggleSignupPopup}>Register</button> </div>) :
               ( <button className='header-button' >Log Out</button>)}

                {/*Open Login Popup*/}
                <Modal isOpen={LoginPopupModal}  className="popup-modal"  >
                    {/* <LoginPopup {...{setLoginPopupModal}} /> */}
                    <LoginPopup setLoginPopupModal={setLoginPopupModal} setLoggedUser={setLoggedUser}/>
                </Modal>
 
                {/*Open Register Popup*/}
                <Modal isOpen={SignUpPopupModal} className="popup-modal">
                    <RegisterPopup setSignUpPopupModal={setSignUpPopupModal}/>
                </Modal>


            </div>
        </div>

    )
}

export default Header;