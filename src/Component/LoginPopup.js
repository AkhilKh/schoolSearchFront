import './LoginPopup.css';
import React from 'react';

const LoginPopup = (props) => {
    return (
        <div  className="popup-box">
          <h1 className="login-heading">Login</h1>
       <label className="login-label">Enter User Name</label>
          <input type="text" className="login-input"></input>
          <label className="login-label">Enter Password</label>
          <input type="password" className="login-input"></input>
          <button className="login-button">Login</button>
          <div className="link-style">
            <a href="/" style={{textDecoration: "none"}}>Create an Account</a>
            <a href="/" style={{textDecoration: "none"}}>Forget Password</a>
          </div>
        </div>




    
)
}

export default LoginPopup;