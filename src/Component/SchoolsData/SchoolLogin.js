import React, {useState} from 'react';
import logo from '../../Images/img.jpg';
import './SchoolLogin.css';
import { useHistory } from 'react-router-dom';


function SchoolLogin () {
          const history = useHistory();
const [schoolEmail, setSchoolEmail] = useState('');
const [schoolPassword, setSchoolPassword] = useState('');

const handleSchoolLogin = async (e) => {
    e.preventDefault();
   const res = await fetch("http://localhost:8000/schoolLogin", {
      method: "POST", headers: { "Content-Type": "application/json" },
      //Json.stringify converts data from json to string whe sending to server.
      body: JSON.stringify({
        schoolEmail: schoolEmail, schoolPassword: schoolPassword
      })
    });
    console.log(res);
    const data = await res.json();
    // const data = await res.json();
    console.log("login", data);
    console.log(res.status);
    if(res.status === 201) {
                history.push('/SchoolPersonalProfile');
    }
  } 

    return (
        <div style={{backgroundColor: "#F9F9F9"}}>
        <div className="login_box">
           <div className="login_photo_box">
               <div className="photo_div"> <img className="login_photo" src={logo} alt="" /></div>
               </div> 
            <div className="login_screen_box">
                <h1>Login</h1>
    <label className="school_label">Enter School Email I'd</label>
    <input type="email" className="school_input" name="schoolEmail" value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} required/>

    <label className="school_label">Enter Password</label>
    <input type="password" className="school_input" name="schoolPassword" value={schoolPassword} onChange={(e) => setSchoolPassword(e.target.value)} required/>

    <button className="school_login_button" onClick={handleSchoolLogin}>Login</button>
            </div>

        </div>
                   
        </div>
    )

}

export default SchoolLogin;