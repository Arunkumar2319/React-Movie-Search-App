import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setTheme } from '../features/themeSwitchSlice';
import darkTheme from '../images/dark-theme.svg';
import lightTheme from '../images/light-theme.svg'
import userLogo from '../images/userLogo.svg';
import userLogoDark from '../images/userLogoDark.svg'
import favourites from '../images/favourites.svg'

import '../styles/NavBar.css';
import Profile from "./Profile";

const NavBar = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateToFavouritesPage = (event) => {
        event.stopPropagation();
        navigate('/favourites');
    }

    const navigateToLoginPage = (event) => {
        event.stopPropagation();
        navigate('/login');
    }

    const navigateToGeneralHomePage = (event) => {
        event.stopPropagation();
        navigate('/');
    }

    const [credentialDetails] = useState(useSelector((Store) => Store.credentials.credentialDetails));
    const [openProfileSettings, setProfileSettings] = useState(false);
    const screenWidth = window.innerWidth;

    const openUserProfileSettings = () => {
        setProfileSettings(true)
    }

    const closeUserProfileSettings = () => {
        setProfileSettings(false)
    }

    const [themeFlag, setThemeFlag] = useState(false);
    const [stylesForTheme, setStylesForTheme] = useState({
        backgroundColor: "black",
        color: "white",
    });

    const changeTheme = () => {
        setThemeFlag(!themeFlag);

        if (themeFlag) {
            setStylesForTheme({
                backgroundColor: "black",
                color: "white",
            });
            dispatch(setTheme('dark'));

        } else {
            setStylesForTheme({
                backgroundColor: "white",
                color: "black",
            });
            dispatch(setTheme('light'))
        }
    }

    const openNav = () => {
        document.getElementById("mySidepanel").style.width = "176px";
    }

    const closeNav = () => {
        document.getElementById("mySidepanel").style.width = "0px";
    }

    return (
        <div className='row d-flex App' style={stylesForTheme}>
            <div className="mt-3 mb-2 navbar-header">
                <h3><b>Movie App</b></h3>
            </div>
            <div className="row mb-2">
                <div className='search-navbar mb-2' style={stylesForTheme}>
                    <input
                        className='form-control'
                        placeholder='Search...'
                        onChange={(event) => props.setSearchValue(event.target.value)}
                    >
                    </input>
                </div>
            </div>
            {screenWidth > 426 ? (
                <>
                    {credentialDetails != null ? (
                        <div onClick={changeTheme} title="change theme">
                            {themeFlag === false ? (<img className="theme-icon-style" src={lightTheme} alt='light theme' />): (
                                <img className="theme-icon-style" src={darkTheme} alt='light theme' /> 
                            )}
                        </div>
                    ) : null}
                    {credentialDetails != null  ? (
                        <div className='favourites mt-3' title='Favourites' onClick={(event) => navigateToFavouritesPage(event)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512" fill='red'>
                                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                            </svg>
                        </div>
                    ) : null}
                    <div className='userLogo mt-3' onClick={openUserProfileSettings}>
                        {themeFlag === false ? (<img className="userIcon" src={userLogo} alt='user logo' />): (
                                <img className="userIcon" src={userLogoDark} alt='user logo dark' /> 
                            )}
                    </div>
                    {openProfileSettings ? (
                        <div className='profile' onClick={closeUserProfileSettings}>
                            <Profile />
                        </div>
                    ) : null}
                </>
            ) : (
                <>
                    <div onClick={openNav}>
                        <button className="hamburgerMenu" >☰</button>
                    </div>
                    <div id="mySidepanel" class="sidepanel">
                        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a>
                        {credentialDetails != null ? (
                            <>
                                <a onClick={navigateToFavouritesPage} className="mt-2 iconSize"><img className="m-1" src={favourites} alt="favourite" style={{width: "5.5vw", zindex: "22"}}/>Favourites</a>
                                <a onClick={navigateToGeneralHomePage} className="iconSize"><img className="m-1" src={userLogo} alt="login" style={{width: "5.5vw"}}/>Logout</a>  
                                <a onClick={changeTheme} className="iconSize"><img className="m-1" src={lightTheme} alt="login" style={{width: "5.5vw"}}/>Theme</a>                                              
                            </>
                        ): (
                            <>
                                <a onClick={navigateToLoginPage} className="iconSize"><img className="m-1" src={userLogo} alt="login" style={{width: "5.5vw"}}/>Login</a>                        
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default NavBar