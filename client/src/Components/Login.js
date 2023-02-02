import React, { useState, useEffect, useContext } from 'react'
import FormHeader from './Shared/FormHeader';
import { Link, useNavigate } from 'react-router-dom';

import { UserContext } from '../App';

const Login = () => {

    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();
    const [verifyAuth, setVerifyAuth] = useState(false);

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

    const loginUser = async (e) => {
        e.preventDefault(e);

        const res = await fetch('/web/user/sign-in', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const result = await res.json();

        if (result.status) {
            window.alert("Login Successful!...");
            console.log("Login Successful!...");

            dispatch({type:"USER", payload:true});
            navigate('/profile');

        } else {
            window.alert("Invalid Inputs!...");
            console.log("Invalid Inputs!...");
            navigate('/login');
        }
    }

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);

        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    return (
        <div className="form-container form-container-login">
            <div className="form-content">
                <FormHeader name="Login" />
                <div className="form">
                    <form method="post">
                        <div className="input-field">
                            <div className="input-field-email">
                                <input className='email-field' type="email" name="email" id="email" required value={user.email} onChange={handleInputs} />
                                <label htmlFor="email">Email </label>
                            </div>
                            <div className="input-field-password">
                                <input className='password-field' type="password" name="password" id="password" required value={user.password} onChange={handleInputs} />
                                <label htmlFor="password">Password </label>
                            </div>
                            <div className="input-field-submit">
                                <input onClick={loginUser} className='submit-field' type="submit" value="Log-In" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="form-footer">
                    <p>No Account? <Link to='/signup'>Sign-Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;