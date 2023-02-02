import React, {useState} from 'react'
import FormHeader from './Shared/FormHeader';
import State from './Shared/State';
import StateDistrict from '../API/StateDistrict';

const AddBloodBankForm = () => {

    const[user,setUser] = useState({
        bloodBankName: "",
        hospitalName: "",
        category: "",
        ownerName: "",
        email:"",
        phone:"",
        licenseNo:"",
        startDate:"",
        endDate:"",
        state: "",
        district: "",
        city: "",
        address: "",
        pinCode: "",
        website: "",
        noOfEmployees: "",
        noOfBeds: "",
        description: "",
    });

    const [district, setDistrict] = useState([]);

    const updateDistrict = (e) => {
      e.preventDefault();
      const state = StateDistrict.filter((elem) => e.target.value === elem.state);
      setDistrict([...state[0].districts]);
    }
  
    const renderDistrict = district.map((elem,index) => {
      return <><option key={index} value={elem}>{elem.toUpperCase()}</option></>
    });



    let name, value;
    const handleInputs = (e) => {
        console.log(e);

        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    return (
        <div className="form-container">
            <div className="form-content">
                <FormHeader name="Add Blood Bank" />
                <div className="form">
                    <form action="/sign-up" method="post">
                        <div className="input-field">
                            <legend>
                                <h3>Blood Bank Detail</h3>
                            </legend>
                            <div className="input-field-group">
                                <div className="input-field-bloodBankName">
                                    <input type="text" name="bloodBankName" id="bloodBankName" required onChange={handleInputs} />
                                    <label htmlFor="bloodBankName">Blood Bank Name</label>
                                </div>
                                <div className="input-field-hospitalName">
                                    <input type="text" name="hospitalName" id="hospitalName" required onChange={handleInputs} />
                                    <label htmlFor="hospitalName">Hospital Name</label>
                                </div>
                                <div className="input-field-category">
                                    <label className='label-select' htmlFor="category">Category</label>
                                    <select name="category" id="category">
                                        <option value="none">--SELECT--</option>
                                        <option value="Government">Government</option>
                                        <option value="Private">Private</option>
                                        <option value="Charitable">Charitable</option>
                                    </select>
                                </div>
                                <div className="input-field-ownerName">
                                    <input type="text" name="ownerName" id="ownerName" required onChange={handleInputs} />
                                    <label htmlFor="ownerName">Owner Name</label>
                                </div>
                                <div className="input-field-email">
                                    <input type="email" name="email" id="email" required onChange={handleInputs} />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field-phone">
                                    <input type="number" name="phone" id="phone" required onChange={handleInputs} />
                                    <label htmlFor="phone">Phone</label>
                                </div>
                            </div>
                            <legend>
                                <h3>License Details</h3>
                            </legend>
                            <div className="input-field-group">
                                <div className="input-field-licenseNo">
                                    <input type="number" name="licenseNo" id="licenseNo" required onChange={handleInputs} />
                                    <label htmlFor="licenseNo">License No</label>
                                </div>
                                <div className="input-field-startDate">
                                    <label className='label-date' htmlFor="startDate">Start Date</label>
                                    <input type="date" name="startDate" id="startDate" required onChange={handleInputs} />
                                </div>
                                <div className="input-field-endDate">
                                    <label className='label-date' htmlFor="endDate">End Date</label>
                                    <input type="date" name="endDate" id="endDate" required onChange={handleInputs} />
                                </div>
                            </div>
                            <legend>
                                <h3>Address Details</h3>
                            </legend>
                            <div className="input-field-group">
                                <div className="input-field-state">
                                    <label className='label-select' htmlFor="state">State</label>
                                    <select name="state" id="state" onChange={(e) => {updateDistrict(e)}}>
                                        <option value="none">--SELECT--</option>
                                        <State />
                                    </select>
                                </div>
                                <div className="input-field-district">
                                    <label className='label-select' htmlFor="district">District</label>
                                    <select name="district" id="district">
                                        <option value="none">--SELECT--</option>
                                        {renderDistrict}
                                    </select>
                                </div>
                                <div className="input-field-city">
                                    <input type="text" name="city" id="city" required onChange={handleInputs} />
                                    <label htmlFor="city">City</label>
                                </div>
                                <div className="input-field-address">
                                    <input type="text" name="address" id="address" required onChange={handleInputs} />
                                    <label htmlFor="address">Address</label>
                                </div>
                                <div className="input-field-pinCode">
                                    <input type="Number" name="pinCode" id="pinCode" required onChange={handleInputs} />
                                    <label htmlFor="pinCode">Pin Code</label>
                                </div>
                            </div>
                            <legend>
                                <h3>Hospital Details</h3>
                            </legend>
                            <div className="input-field-group">
                                <div className="input-field-website">
                                    <input type="text" name="website" id="website" required onChange={handleInputs} />
                                    <label htmlFor="website">Website</label>
                                </div>
                                <div className="input-field-noOfEmployees">
                                    <input type="Number" name="noOfEmployees" id="noOfEmployees" required onChange={handleInputs} />
                                    <label htmlFor="noOfEmployees">No Of Employees</label>
                                </div>
                                <div className="input-field-noOfBeds">
                                    <input type="Number" name="noOfBeds" id="noOfBeds" required onChange={handleInputs} />
                                    <label htmlFor="noOfBeds">No Of Beds</label>
                                </div>
                                <div className="input-field-description">
                                    <textarea name="description" id="description" cols="30" rows="3"></textarea>
                                    <label htmlFor="description">Write About Your Hospital</label>
                                </div>
                            </div>
                            <div className="input-field-submit">
                                <input className='submit-field' type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBloodBankForm