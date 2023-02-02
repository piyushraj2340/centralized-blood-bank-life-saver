import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        dateOfBirth: "",
        gender: "",
        state: "",
        district: ""
    });

    const navigate = useNavigate();

    const callProfilePage = async () => {
        try {
            const res = await fetch('/profile', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                credentials: "include"
            });

            const result = await res.json();

            console.log(result);

            if (!result.status) {
                const error = new Error("auth failed");
                throw error;
            } else {
                setUser({
                    name: result.result.name,
                    phone: result.result.phone,
                    email: result.result.email,
                    dateOfBirth: result.result.dateOfBirth,
                    gender: result.result.gender,
                    state: result.result.state,
                    district: result.result.district,
                });
            }

        } catch (err) {
            navigate('/login');
        }
    }

    useEffect(() => {
        callProfilePage();
    }, []);


    return (
        <div className="container-profile">
            <div className="content-profile">
                <i className="edit-profile fas fa-edit"></i>
                <div className="content-header-profile">
                    <div className="content-profile-img">
                        <div className="content-profile-dp-img">
                            <img src="https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png" className="profile-dp" id="profile-dp" alt="profile-dp" />
                        </div>
                        <div className="content-profile-name">
                            <span className="profile-name" id="profile-name">{user.name}</span>
                        </div>
                    </div>
                    <div className="about-me">
                        <div className="content-about-me-heading">
                            <h2 className="heading-about-me">About Me</h2>
                        </div>
                        <div className="content-about-info">
                            <div className="about-info">
                                <div className="content-about-title">
                                    <span className="title-user-name">
                                        <i className="fas fa-solid fa-user-check"></i>
                                    </span>
                                </div>
                                <div className="content-about-value">
                                    <span className="title-value-user-name" id="title-value-user-name">{user.name}</span>
                                </div>
                            </div>
                            <div className="about-info">
                                <div className="content-about-title">
                                    <span className="title-email">
                                        <i className="fas fa-solid fa-envelope"></i>
                                    </span>
                                </div>
                                <div className="content-about-value">
                                    <span className="title-value-email" id="title-value-email">{user.email}</span>
                                </div>
                            </div>
                            <div className="about-info">
                                <div className="content-about-title">
                                    <span className="title-phone">
                                        <i className="fas fa-solid fa-phone-alt"></i>
                                    </span>
                                </div>
                                <div className="content-about-value">
                                    <span className="title-value-phone" id="title-value-phone">{user.phone}</span>
                                </div>
                            </div>
                            <div className="about-info">
                                <div className="content-about-title">
                                    <span className="title-dob">
                                        <i className="fas fa-solid fa-birthday-cake"></i>
                                    </span>
                                </div>
                                <div className="content-about-value">
                                    <span className="title-value-dob" id="title-value-dob">{user.dateOfBirth}</span>
                                </div>
                            </div>
                            <div className="about-info">
                                <div className="content-about-title">
                                    <span className="title-gender">
                                        <i className="fas fa-male"></i>
                                    </span>
                                </div>
                                <div className="content-about-value">
                                    <span className="title-value-gender" id="title-value-gender">{user.gender}</span>
                                </div>
                            </div>
                            <div className="about-info">
                                <div className="content-about-title">
                                    <span className="title-address">
                                        <i className="fas fa-solid fa-address-book"></i>
                                    </span>
                                </div>
                                <div className="content-about-value">
                                    <span className="title-value-address" id="title-value-address">{user.district}, {user.state}.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-information">
                    <div className="information-nav">
                        <div className="donor-history">
                            <div className="content-donor-heading">
                                <h2 className="heading-donor">Donor Details</h2>
                            </div>
                            {(window.innerWidth <= 600) ?
                                <div className="donor-details" id="donor-details">

                                </div>
                                :
                                <></>
                            }

                        </div>
                        <div className="blood-camp-history">
                            <div className="content-blood-camp-heading">
                                <h2 className="heading-blood-camp">Your Blood Camps</h2>
                            </div>
                            {
                                (window.innerWidth <= 600) ?
                                    <div className="blood-camp-details" id="blood-camp-details">

                                    </div>
                                    :
                                    <></>
                            }

                        </div>
                        <div className="blood-bank-history">
                            <div className="content-blood-bank-heading">
                                <h2 className="heading-blood-bank">Your Blood Banks</h2>
                            </div>
                            {
                                (window.innerWidth <= 600) ?
                                    <div className="blood-bank-details" id="blood-bank-details">

                                    </div>
                                    :
                                    <></>
                            }

                        </div>
                    </div>
                    {(window.innerWidth > 600) ?
                        <div className="information-details">
                            <div className="information" id="information">

                            </div>
                        </div>
                        :
                        <></>
                    }

                </div>

            </div>
        </div>
    )
}

export default Profile