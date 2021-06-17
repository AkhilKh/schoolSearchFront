import './LoginPopup.css';
import React, { useState } from 'react';
import close from '../Images/cancel.png';

const LoginPopup = (props) => {
  const {setLoginPopupModal, setLoggedUser} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const loginUser = async (e) => {
    e.preventDefault();
   const res = await fetch("http://localhost:8000/userLogin", {
      method: "POST", headers: { "Content-Type": "application/json" },
      //Json.stringify converts data from json to string whe sending to server.
      body: JSON.stringify({
        email: email, password: password
      })
    });
    console.log(res);
    const data = await res.json();
    // const data = await res.json();
    console.log("login", data);
    console.log(data.message);
    if(data){
      console.log("p");
      setLoggedUser(state => !state);
      setLoginPopupModal(state => !state)
    }
  } 

    return (
        <div  className="popup-box">
          <h1 className="login-heading">Login</h1>
          <img src= {close} alt="" className="close_button" onClick={(e) => setLoginPopupModal(state => !state) } />
          
           
       <label className="login-label">Enter Email Address</label>
          <input type="text" className="login-input" placeholder="Enter Email Address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
          <label className="login-label">Enter Password</label>
          <input type="password" className="login-input" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
          <button className="login-button" onClick={loginUser}>Login</button>
          <div className="link-style">
            <a href="/" style={{textDecoration: "none"}}>Create an Account</a>
            <a href="/" style={{textDecoration: "none"}}>Forget Password</a>
          </div>
        </div>

)
}

export default LoginPopup;

// Recoil
// https://recoiljs.org/
// Shadman Martin Piyal9:40 PM
// res.status(201).json({message:"login"})