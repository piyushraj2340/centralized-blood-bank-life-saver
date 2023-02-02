import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    const [expandAndCollapse, changeExpandAndCollapse] = useState(false);

    return (
        <section className={(expandAndCollapse) ? 'feature feature-expand' : 'feature'}>
            <div className="feature-list">

                <div className="card-blood blood-search">
                    <Link to="/search-blood">
                        <div className="info">
                            <div className="icon">
                                <span className='fas fa-heartbeat'></span>
                            </div>
                            <div className="title">
                                <h4>Search For Blood</h4>
                            </div>
                            <div className="description">
                                <p><b>In a search for blood?</b><br />
                                 Not to worry, you can find your required blood group in just minutes.</p>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="card-blood blood-bank">
                    <Link to="/search-blood-bank">
                        <div className="info">
                            <div className="icon">
                                <span className='fas fa-hospital'></span>
                            </div>
                            <div className="title">
                                <h4>Search Blood Bank</h4>
                            </div>
                            <div className="description">
                                <p>if you want to find blood bank near your current location without any hustle then use this feature and reduce you stress.</p>
                            </div>

                        </div>
                    </Link>
                </div>


                <div className="card-blood donation-camps">
                    <Link to="/search-blood-camps">
                        <div className="info">
                            <div className="icon">
                                <span className='fas fa-medkit'></span>
                            </div>
                            <div className="title">
                                <h4>Search Blood Donation Camps</h4>
                            </div>
                            <div className="description">
                                <p>we know its really difficult to trace the exact location of blood donation camps. Click here to know all the organized camps near your location.</p>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="card-blood donor-login">
                    <Link to="/login">
                        <div className="info">
                            <div className="icon">
                                <span className='fas fa-user'></span>
                            </div>
                            <div className="title">
                                <h4>Donor Login</h4>
                            </div>
                            <div className="description">
                                <p>We are Thankful for you donation of Blood. Please Click here to log-In into you account.</p>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="card-blood voluntary-login">
                    <Link to="/admin-login">
                        <div className="info">
                            <div className="icon">
                                <span className='fas fa-user-md'></span>
                            </div>
                            <div className="title">
                                <h4>Admin Login</h4>
                            </div>
                            <div className="description">
                                <p>Its time to update about the availability of blood in your organization. Please Log-In first to do so.</p>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
            {(window.innerWidth <= 1024) ?
                <div className='view-more'>
                    <button onClick={() => changeExpandAndCollapse(!expandAndCollapse)}>{(expandAndCollapse) ? "View Less!" : "View More!"}</button>
                </div>
                :
                <></>
            }
        </section>
    )
}

export default Features