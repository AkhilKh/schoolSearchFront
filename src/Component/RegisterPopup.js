import React, { useState } from 'react';
import './LoginPopup.css';
import close from '../Images/cancel.png';


function RegisterPopup(props) {
    const {setSignUpPopupModal} = props;
    const [user, setUser] = useState({ name: "", email: "", password: "", confirmPassword: "", phone: "", school: "", city: "", classp: "", category: "Parent" });

    let name, value;

    const handleInputs = (event) => {
        // console.log(event);
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, password, confirmPassword, phone, school, city, classp, category } = user;

        const res = await fetch("http://localhost:8000/userRegister", {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name, email: email, password: password, confirmPassword: confirmPassword, phone: phone, category: category, school: school, city: city, classp: classp
            })
        });
        console.log("res", res);
        const data = await res.json();
        console.log("Hi", data);
        window.alert("successful Reg");
        setSignUpPopupModal(state => !state);
    }

    return (
        <div className="popup-box">
            <h1 className="login-heading">Register</h1>
            <img src= {close} alt="" className="close_button" onClick={(e) => setSignUpPopupModal(state => !state)} />
            <label className="login-label">Enter Name</label>
            <input type="text" className="login-input" name="name" placeholder="Enter Name" value={user.name} onChange={handleInputs} required></input>
            <label className="login-label">Enter Email I'd</label>
            <input type="email" className="login-input" name="email" placeholder="Enter Email Address" value={user.email} onChange={handleInputs} required></input>
            <label className="login-label">Enter Password</label>
            <input type="password" className="login-input" name="password" placeholder="Enter Password" value={user.password} onChange={handleInputs} required></input>
            <label className="login-label">Confirm Password</label>
            <input type="password" className="login-input" name="confirmPassword" placeholder="Enter Confirm Password" value={user.confirmPassword} onChange={handleInputs} required></input>
            <label className="login-label">Enter Mobile No. (Optionl)</label>
            <input type="number" className="login-input" name="phone" placeholder="Enter Mobile Number" value={user.phone} onChange={handleInputs}></input>
            <div style={{ display: "none" }}>
                <input type="text" name="school" value={user.school} onChange={handleInputs} disabled={true}></input>
                <input type="text" name="city" value={user.city} onChange={handleInputs} ></input>
                <input type="text" name="classp" value={user.classp} onChange={handleInputs}></input>
            </div>

            <label className="login-label">Are You Student/Parent?</label>
            <div >
                <input type="radio" value="Parent" name="category" checked={user.category === 'Parent'} onChange={handleInputs} /> Parent
        <input type="radio" value="Student" name="category" checked={user.category === 'Student'} onChange={handleInputs} /> Student
        </div>

            <button className="login-button" onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default RegisterPopup;