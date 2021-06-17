import React, { useState } from 'react';
import logo from '../../Images/img.jpg';
import './SchoolLogin.css';
import { useHistory } from 'react-router-dom';
// import validator from 'validator';

function SchoolRegister () {
      const history = useHistory();
    const [schoolUser, setSchoolUser] = useState({schoolName: '',schoolEmail: "", schoolPassword: '',schoolConfirmPassword: '',
    schoolCity: '', contactPhone: '', contactPerson: '',contactPersonPhone: '' });
    // const [emailError, setEmailError] = useState('')

//Taking Inputs
const handleSchoolInputs = (e) => {
        setSchoolUser({ ...schoolUser, [e.target.name]: e.target.value });
        
        //Email Validation
    //     if (validator.isEmail(schoolUser.schoolEmail)) {
    //   setEmailError('Valid Email :)')
    // } else {
    //   setEmailError('Enter valid Email!')
    // }
}

//Save on Database
const handleSchoolSubmit = async (e) => {
    e.preventDefault();
        const { schoolName, schoolEmail, schoolPassword, schoolConfirmPassword, schoolCity, contactPhone, contactPerson, contactPersonPhone } = schoolUser;

        const res = await fetch("http://localhost:8000/schoolRegister", {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                schoolName, schoolEmail, schoolPassword, schoolConfirmPassword, schoolCity, contactPhone, contactPerson, contactPersonPhone
            })
        });
        console.log(res);
        const data = await res.json();
        console.log("Hi", data);
        if(data && res.status === 201) {
        window.alert("successful Reg");
            history.push('/SchoolLogin');
        } else if(res.status === 422){
        window.alert("Ëmail already Exist");
        } else {
            window.alert("Please Register again");
        }
}

    return (
        <div style={{backgroundColor: "#F9F9F9"}}>
        <div className="login_box">
            <h1>Register Your School Today!</h1>
           <div className="login_photo_box">
               <div className="photo_div"> <img className="login_photo" src={logo} alt="" /></div>
               </div> 
            <div className="login_screen_box">
                
    <label className="school_label">Enter School Name</label>
    <input type="name" className="school_input" name= "schoolName" value={schoolUser.schoolName} onChange={handleSchoolInputs}/>
    <label className="school_label">Enter School Email I'd</label>
    <input type="email" className="school_input" name= "schoolEmail" value={schoolUser.schoolEmail} onChange={handleSchoolInputs}/>
    {/* <span style={{fontWeight: 'bold', color: 'red',}}>{emailError}</span> */}
    <label className="school_label">Enter Password</label>
    <input type="password" className="school_input" name= "schoolPassword" value={schoolUser.schoolPassword} onChange={handleSchoolInputs}/>
    <label className="school_label">Enter Confirm Password</label>
    <input type="password" className="school_input" name= "schoolConfirmPassword" value={schoolUser.schoolConfirmPassword} onChange={handleSchoolInputs}/>
    <label className="school_label">Enter School City</label>
    <input type="name" className="school_input" name= "schoolCity" value={schoolUser.schoolCity} onChange={handleSchoolInputs}/>
    <label className="school_label">Enter School Phone</label>
    <input type="tel" className="school_input" name= "contactPhone" value={schoolUser.contactPhone} onChange={handleSchoolInputs}/>
    <label className="school_label">Enter Contact Person Name</label>
    <input type="name" className="school_input" name= "contactPerson" value={schoolUser.contactPerson} onChange={handleSchoolInputs}/>
    <label className="school_label">Enter Contact Person Phone No.</label>
    <input type="number" className="school_input" name= "contactPersonPhone" value={schoolUser.contactPersonPhone} onChange={handleSchoolInputs}/>

    <button className="school_login_button" onClick={handleSchoolSubmit}>Submit</button>
    <a href="/SchoolLogin">Already a member? Login</a>
            </div>

        </div>
                   
        </div>
    )

}

export default SchoolRegister;