import React, { useState } from 'react';
import './SchoolPersonalProfile.css';
import { storage } from '../../firebase';

function SchoolPersonalProfile() {
    const [schoolData, setSchoolData] = useState({schoolName: '',schoolCode: '',schoolBoard:'',schoolPref:'coed',schoolvideo:'', 
     schoolAboutOne: '',schoolLink: '',schoolAboutTwo: '',schoolContact:'', schoolAddress:'', schoolCity:'',schoolState:'',
     schoolPinCode:'',schoolEmail:'' });
    const [logo, setLogo] = useState(null);
    const [coverImg, setCoverImg] = useState(null);
    const [brouchure, setBrouchure] = useState(null);

    const onChangeLogoHandler = e => {
        if (e.target.files[0]) {
            setLogo(e.target.files[0]);
        }
    };

    const onChangeCoverHandler = e => {
        if (e.target.files[0]) {
            setCoverImg(e.target.files[0]);
        }
    }

    const onChangeBrouchureHandler = e => {
        if (e.target.files[0]) {
            setBrouchure(e.target.files[0]);
        }
    }

    const handleUploadLogo = () => {
        if (logo == null)
            return;
        storage.ref(`/logo/${logo.name}`).put(logo)
            .on("state_changed", alert("success"), alert);
    }

    const handleUploadCover = () => {
        if (coverImg == null)
            return;
        storage.ref(`/coverImage/${coverImg.name}`).put(coverImg)
            .on("state_changed", alert("success"), alert);
    }

    const handleUploadBrouchure = () => {
        if (brouchure == null)
            return;
        storage.ref(`/brouchure/${brouchure.name}`).put(brouchure)
            .on("state_changed", alert("success"), alert);
    }

    console.log(logo);
    console.log(coverImg);

    const handleSchoolData = (e) => {
        setSchoolData({ ...schoolData, [e.target.name]: e.target.value });
    }

    const handleSchoolDataSave = async (e) => {
    e.preventDefault();
        const { schoolName, schoolCode, schoolBoard, schoolPref, schoolvideo, schoolAboutOne, schoolLink, schoolAboutTwo, 
        schoolContact,  schoolAddress, schoolCity, schoolState, schoolPinCode, schoolEmail} = schoolData;

        const res = await fetch("http://localhost:8000/schoolInfo", {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                schoolName:schoolName, schoolCode:schoolCode, schoolBoard:schoolBoard, schoolPref:schoolPref, schoolvideo:schoolvideo,
                 schoolAboutOne:schoolAboutOne, schoolLink:schoolLink, schoolAboutTwo:schoolAboutTwo, 
        schoolContact:schoolContact,  schoolAddress:schoolAddress, schoolCity:schoolCity, schoolState:schoolState, 
        schoolPinCode:schoolPinCode, schoolEmail:schoolEmail
            })
        });
        console.log("res", res);
        const data = await res.json();
        console.log("Hi", data);
        window.alert("successful Submit");

}

    //Form Structure
    return (
        <div className="personal_profile_section">
            <h1>Update Your School Information</h1>
            <div className="personal_profile_info">

                <h1>Basic Information</h1>
                <label className="school_info_label">Enter Full School Name</label>
                <input type="name" className="school_info_input" name="schoolName" value={schoolData.schoolName} onChange={handleSchoolData} />
                <label className="school_info_label">Upload School Logo</label>
                <input type="file" name="file" className="upload_input" onChange={onChangeLogoHandler} />
                <button onClick={handleUploadLogo} className="upload_btn">Upload</button>
                <label className="school_info_label">Upload School Cover Image</label>
                <input type="file" className="upload_input" onChange={onChangeCoverHandler} />
                <button className="upload_btn" onClick={handleUploadCover}>Upload</button>
                <label className="school_info_label">Enter School Code</label>
                <input type="name" className="school_info_input" name="schoolCode" value={schoolData.schoolCode} onChange={handleSchoolData} />
                <label className="school_info_label">Enter School Board</label>
                <input type="name" className="school_info_input" name="schoolBoard" value={schoolData.schoolBoard} onChange={handleSchoolData}/>
                <label className="school_info_label">Enter Student Prefrences</label>
                <select className="school_info_input" name="schoolPref" value={schoolData.schoolPref} onChange={handleSchoolData}>
                    <option value="boys">Boys</option>
                    <option value="girls">Girls</option>
                    <option value = "coed">Co-ed</option>
                </select>
                <label className="school_info_label">Upload School Brouchure</label>
                <input type="file" className="upload_input" onChange={onChangeBrouchureHandler} />
                <button className="upload_btn" onClick={handleUploadBrouchure}>Upload</button>

                <h1>About Section</h1>
                <label className="school_info_label">Enter School Video Link</label>
                <input type="text" className="school_info_input" name="schoolvideo" value={schoolData.schoolvideo} onChange={handleSchoolData} />
                <label className="school_info_label">Enter School Description 1</label>
                <textarea className="school_info_textarea" name="schoolAboutOne" value={schoolData.schoolAboutOne} onChange={handleSchoolData}/>
                <label className="school_info_label">Enter School Website</label>
                <input type="text" className="school_info_input" name="schoolLink" value={schoolData.schoolLink} onChange={handleSchoolData}/>
                <label className="school_info_label">Enter School Description 2</label>
                <textarea className="school_info_textarea" name="schoolAboutTwo" value={schoolData.schoolAboutTwo} onChange={handleSchoolData} />

                <h1>Other Information</h1>
                <label className="school_info_label">Enter Contact Number for Parents and Students</label>
                <input type="tel" className="school_info_input" name="schoolContact" value={schoolData.schoolContact} onChange={handleSchoolData} />
                <label className="school_info_label">Enter School Full Address</label>
                <textarea className="school_info_textarea"  name="schoolAddress" value={schoolData.schoolAddress} onChange={handleSchoolData}/>    
                            <label className="school_info_label">Enter School City</label>
                <input type="text" className="school_info_input" name="schoolCity" value={schoolData.schoolCity} onChange={handleSchoolData} />
                <label className="school_info_label">Enter School State </label>
                <input type="text" className="school_info_input" name="schoolState" value={schoolData.schoolState} onChange={handleSchoolData} />
                <label className="school_info_label">Enter School Pin Code </label>
                <input type="number" className="school_info_input" name="schoolPinCode" value={schoolData.schoolPinCode} onChange={handleSchoolData}/>
                <label className="school_info_label">Enter Contact Email I'd for Parents and Students</label>
                <input type="text" className="school_info_input" name="schoolEmail" value={schoolData.schoolEmail} onChange={handleSchoolData} />

                <button className="upload_btn" onClick={handleSchoolDataSave}>Save</button>
            </div>
        </div>


    )

}

export default SchoolPersonalProfile;