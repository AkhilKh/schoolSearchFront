import React from 'react';
import logo from '../../src/Images/img.jpg';
import './UserProfile.css';
import Header from './Header';

function UserProfile () {
    return (
        <div style={{backgroundColor: "#F9F9F9"}}>
            <Header />
        <div className="profile-box">
                <img className="profile-photo-box" src={logo} alt="" />
            <div className="profile-info-box">
    <label className="user-label">Name</label>
    <input type="text" className="user-input"/>

    <label className="user-label">Email I'd</label>
    <input type="email" className="user-input" />

    <label className="user-label">Contact No.</label>
    <input type="number" className="user-input" />

    <label className="user-label">School</label>
    <input type="text" className="user-input" />

    <label className="user-label">Class</label>
    <select value="Radish" className="user-input">
  <option value="Orange">PlayGroup</option>
  <option value="Radish">LKG</option>
  <option value="Cherry">UKG</option>
  <option value="Orange">1</option>
  <option value="Radish">2</option>
  <option value="Cherry">3</option>
  <option value="Orange">4</option>
  <option value="Radish">5</option>
  <option value="Cherry">6</option>
  <option value="Orange">7</option>
  <option value="Radish">8</option>
  <option value="Cherry">9</option>
  <option value="Orange">10</option>
  <option value="Radish">11</option>
  <option value="Cherry">12</option>
</select>

    <label className="user-label">Address</label>
    <textarea type="text" className="user-input" />
    <label className="user-label">City</label>
    <input type="text" className="user-input"/>
            </div>

        </div>
        <div style= {{textAlign: "center"}}>
                    <button className="profile-save-button">Save</button>
</div>
        </div>
    )

}

export default UserProfile;