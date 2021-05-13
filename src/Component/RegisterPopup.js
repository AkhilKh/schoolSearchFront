import React from 'react';
import './LoginPopup.css';

function RegisterPopup () {
    return(
        <div  className="popup-box">
        <h1 className="login-heading">Register</h1>
        <label className="login-label">Enter Name</label>
        <input type="text" className="login-input"></input>
        <label className="login-label">Enter Email I'd</label>
        <input type="email" className="login-input"></input>
        <label className="login-label">Enter Password</label>
        <input type="password" className="login-input"></input>
        <label className="login-label">Confirm Password</label>
        <input type="password" className="login-input"></input>
        <label className="login-label">Enter Mobile No. (Optionl)</label>
        <input type="number" className="login-input"></input>
        <label className="login-label">Are You Student/Parent?</label>
        <div>
        <input type="radio" value="Parent" name="role" /> Parent
        <input type="radio" value="Student" name="role" /> Student
        </div>
                <button className="login-button">Register</button>
      </div>    )
}

export default RegisterPopup;