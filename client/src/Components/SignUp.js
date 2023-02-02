import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import FormHeader from './Shared/FormHeader';
import State from './Shared/State'
import StateDistrict from '../API/StateDistrict';

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    originalPassword: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
    state: "",
    district: ""
  });

  const [verifyAuth, setVerifyAuth] = useState(false);
  console.log(verifyAuth);
  const [district, setDistrict] = useState([]);

  const handleVerification = async () => {
    try {
        const res = await fetch('/auth', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            credentials: "include"
        });
        const result = await res.json();

        if(result.status) {
            setVerifyAuth(true);
            console.log("authentication successfully");
            navigate('/profile')
        } else {
            setVerifyAuth(false);
            console.log("authentication failed");
        }
        
    } catch (err) {
        console.log(err);
    }
}

useEffect(() => {
    handleVerification();
},[]);

  const updateDistrict = (e) => {
    e.preventDefault();
    const state = StateDistrict.filter((elem) => e.target.value === elem.state);
    setDistrict([...state[0].districts]);
  }

  const renderDistrict = district.map((elem, index) => {
    return <><option key={index} value={elem}>{elem.toUpperCase()}</option></>
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const postData = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/user/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    const result = await res.json();

    if (result.status) {
      window.alert("New Registration Successful!...");
      console.log("New Registration Successful!...");

      navigate('/login');

    } else {
      window.alert("Invalid Registration!...");
      console.log("Invalid Registration!...");
    }
  }

  return (
    <div className="form-container form-container-sign-up">
      <div className="form-content">
        <FormHeader name="Sign-Up" />
        <div className="form">
          <form method="post">
            <div className="input-field">
              <div className="input-field-name">
                <input type="text" name="name" id="name" required value={user.name} onChange={handleInputs} />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field-phone">
                <input type="number" name="phone" id="phone" required value={user.phone} onChange={handleInputs} />
                <label htmlFor="phone">Phone</label>
              </div>
              <div className="input-field-email">
                <input type="email" name="email" id="email" required value={user.email} onChange={handleInputs} />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field-originalPassword">
                <input type="password" name="originalPassword" id="originalPassword" required value={user.originalPassword} onChange={handleInputs} />
                <label htmlFor="originalPassword">Password</label>
              </div>
              <div className="input-field-confirmPassword">
                <input type="password" name="confirmPassword" id="confirmPassword" required value={user.confirmPassword} onChange={handleInputs} />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
              <div className="input-field-dateOfBirth">
                <label className='label-date' htmlFor="dateOfBirth">Date Of Birth</label>
                <input type="date" name="dateOfBirth" id="dateOfBirth" required value={user.dateOfBirth} onChange={handleInputs} />
              </div>
              <div className="input-field-gender">
                <legend>Gender</legend>
                <div className="gender-male">
                  <input type="radio" name="gender" id="male" value="male" required onChange={handleInputs} />
                  <label className='label-radio-selectable' htmlFor="male">Male</label>
                </div>
                <div className="gender-female">
                  <input type="radio" name="gender" id="female" value="female" required onChange={handleInputs} />
                  <label className='label-radio-selectable' htmlFor="female">Female</label>
                </div>
                <div className="gender-other">
                  <input type="radio" name="gender" id="other" value="other" required onChange={handleInputs} />
                  <label className='label-radio-selectable' htmlFor="other">Other</label>
                </div>
              </div>
              <div className="input-field-state">
                <label className='label-select' htmlFor="state">State</label>
                <select name="state" id="state" required onChange={(e) => { handleInputs(e); updateDistrict(e) }} >
                  <option value="none">--SELECT--</option>
                  <State />
                </select>
              </div>
              <div className="input-field-district">
                <label className='label-select' htmlFor="district">District</label>
                <select name="district" id="district" required onChange={handleInputs}>
                  <option value="none">--SELECT--</option>
                  {renderDistrict}
                </select>
              </div>
              <div className="input-field-submit">
                <input className='submit-field' type="submit" value="Submit" onClick={postData} />
              </div>
            </div>
          </form>
        </div>
        <div className="form-footer">
          <p>Having Account? <Link to='/login'>LogIn</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp;