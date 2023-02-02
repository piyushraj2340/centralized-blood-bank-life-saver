import React, { useContext, useState } from 'react';
import logo from '../../asset/images/logo_without_bg.png';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../App';




export const Navigation = () => {
    const {state, dispatch } = useContext(UserContext);
    console.log(dispatch);
    const [menuStatus, updateMenuStatus] = useState(false);
    // const [verifyAuth, setVerifyAuth] = useState(false);

    const MenuItem = (props) => {

        if (state) {
            return (
                <>
                    <NavLink onClick={props.handleClick} to="/home">Home</NavLink>
                    <NavLink onClick={props.handleClick} to="/search-blood">Blood Search</NavLink>
                    <NavLink onClick={props.handleClick} to="/about">About Donation</NavLink>
                    <NavLink onClick={props.handleClick} to="/profile">Profile</NavLink>
                    <NavLink onClick={props.handleClick} to="/logout">Logout</NavLink>
                </>
            )
        } else {
            return (
                <>
                    <NavLink onClick={props.handleClick} to="/home">Home</NavLink>
                    <NavLink onClick={props.handleClick} to="/search-blood">Blood Search</NavLink>
                    <NavLink onClick={props.handleClick} to="/about">About Donation</NavLink>
                    <NavLink onClick={props.handleClick} to="/login">log-in</NavLink>
                    <NavLink onClick={props.handleClick} to="/signup">sign-up</NavLink>
                </>
            )
        }
    }

    // const handleVerification = async () => {
    //     try {
    //         const res = await fetch('/auth', {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json",
    //             },
    //             credentials: "include"
    //         });
    //         const result = await res.json();

    //         if (result.status) {
    //             setVerifyAuth(true);
    //             console.log("authentication successfully");
    //         } else {
    //             setVerifyAuth(false);
    //             console.log("authentication failed");
    //         }

    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    const handleClick = () => {
        updateMenuStatus(false);
        // handleVerification();
    }

    // useEffect(() => {
    //     handleVerification();
    // }, []);

    return (
        <React.StrictMode>
            <div className="nav">
                <div className="nav-logo">
                    <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                </div>

                <div className="nav-items">

                    {
                        (window.innerWidth <= 768) ?

                            <div className={(menuStatus) ? "menu open" : "menu"} onClick={() => { updateMenuStatus(!menuStatus) }}>
                                <div className="menu-bar bar1"></div>
                                <div className="menu-bar bar2"></div>
                                <div className="menu-bar bar3"></div>
                            </div>

                            :

                            <MenuItem handleClick={handleClick} />
                    }
                </div>
            </div>
            {/* menu item for smaller size */}

            {
                (menuStatus) ?
                    <div className='menu-items-sm'>
                        <MenuItem handleClick={handleClick} />
                    </div>
                    : <></>
            }

        </React.StrictMode>
    );
}

export default Navigation;