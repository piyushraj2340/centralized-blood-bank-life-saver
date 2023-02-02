import React, { useEffect, useState } from 'react'
import State from './Shared/State'
import StateDistrict from '../API/StateDistrict';

const SearchBlood = () => {
  const [district, setDistrict] = useState([]);
  const [blood, setBlood] = useState([]);
  const [bloodStatus, setBloodStatus] = useState(false);
  const [bloodBank, setBloodBank] = useState([]);

  const updateDistrict = (e) => {
    e.preventDefault();
    const state = StateDistrict.filter((elem) => e.target.value == elem.state);
    setDistrict([...state[0].districts]);
  }

  const renderDistrict = district.map((elem, index) => {
    return <React.Fragment key={Number(index)} ><option value={elem}>{elem.toUpperCase()}</option></React.Fragment>
  });

  const findBloodBank = async (id) => {
    try {
      const res = await fetch(`search/blood-bank/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();


      if (result.status) {
        setBloodBank(result.result);
        setBloodStatus(true);
      } else {
        setBloodBank([]);
        setBloodStatus(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handelSearch = async (e) => {
    try {
      e.preventDefault(e);
      const res = await fetch('search/bloods', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();

      console.log(result);

      if (result.status) {
        setBlood(...blood, result.result);
        setBloodStatus(true);
        findBloodBank(result.result[0].bloodBankId);
      } else {
        setBlood([]);
        setBloodStatus(false);
      }

    } catch (err) {
      alert("something went at blood!...");
      console.log(err);
    }
  }

  const BloodInfo = () => {
    const info = blood.map((e, i) => {
      return (
        <div key={i} className="result-information">
        <div className="info-sr-no">1</div>
        <div className="info-blood-bank">
          <p><span>{bloodBank.bloodBankName}, {bloodBank.hospitalName}</span>
            <span>{bloodBank.address} </span>
            <span>Phone: {bloodBank.phone} </span><span>Email: {bloodBank.email}</span>
          </p></div>
        <div className="info-category">{bloodBank.category}</div>
        <div className="info-availability">
          <span>Available</span>,
          A-Ve:{e.a_negative}, AB-Ve:{e.ab_negative}, B+Ve:{e.b_positive}, O+Ve:{e.o_positive}, B-Ve:{e.b_negative}, O-Ve:{e.o_negative}, A+Ve:{e.a_positive}, AB+Ve:{e.ab_positive}</div>
        <div className="info-last-update">{e.lastUpdate}</div>
      </div>
      )
    });

    console.log(info);

    return info
  }


  return (
    <div className="container-search">
      <div className="content-search">
        <div className="information-form">
          <div className="search-header">
            <h2>Search Blood</h2>
          </div>
          <div className="search-form">
            <form method="GET">
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="state">State</label>
                  <select name="state" id="state" required onChange={(e) => { updateDistrict(e) }}>
                    <option value="">--Select State--</option>
                    <State />
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="district">District</label>
                  <select name="district" id="district" required>
                    <option value="" >--Select District--</option>
                    {renderDistrict}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="bloodType">Blood Type</label>
                  <select name="bloodType" id="bloodType" required>
                    <option value="" >--Select Blood Type--</option>
                    <option value="all" >All Blood Groups</option>
                    <option value="a_positive" >A +Ve</option>
                    <option value="a_negative" >A -Ve</option>
                    <option value="b_positive" >B +Ve</option>
                    <option value="b_negative" >B -Ve</option>
                    <option value="ab_positive" >AB +Ve</option>
                    <option value="ab_negative" >AB -Ve</option>
                    <option value="o_positive" >O +Ve</option>
                    <option value="o_negative" >O -Ve</option>
                  </select>
                </div>
                <div className="form-field">
                  <input type="submit" value="Search" onClick={handelSearch} />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="information-result">
          <div className="search-blood-header">
            <h2>Showing Information</h2>
          </div>
          <div className="result">
            <div className="result-content">
              <div className="result-header">
                <div className="head-sr-no">S.No.</div>
                <div className="head-blood-bank">Blood Bank</div>
                <div className="head-category">Category</div>
                <div className="head-availability">Availability</div>
                <div className="head-last-update">Last Update</div>
              </div>
              {bloodStatus ?

                <BloodInfo />


                :
                <div className="no-result"></div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBlood