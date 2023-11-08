import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import '../styles/NavBar.css';

import UserLogin from './UserLogin';
import Profile from "./Profile";

const NavBar = (props) => {
    const navigate = useNavigate();
    const navigateToFavouritesPage = (event) => {
        event.stopPropagation();
        navigate('/favourites');
    }
    const [credentialDetails] = useState(useSelector((Store) => Store.credentials.credentialDetails));
    const [openProfileSettings, setProfileSettings] = useState(false)

    const openUserProfileSettings = () => {
        setProfileSettings(true)
    }

    const closeUserProfileSettings = () => {
        setProfileSettings(false)
    }

    useEffect(() => {
    }, [props.closeProfileSettings])

    return (
        <div className='row d-flex App' >
            <div className="mt-3 mb-2 navbar-header">
                <h3><b>Movie App</b></h3>
            </div>
            <div className="row mb-2">
                <div className='search-navbar mb-2'>
                    <input
                        className='search-navbar form-control'
                        placeholder='Search...'
                        onChange={(event) => props.setSearchValue(event.target.value)}
                    >
                    </input>
                </div>
            </div>
            {credentialDetails != null ? (
                <div className='favourites mt-3' title='Favourites' onClick={(event) => navigateToFavouritesPage(event)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512" fill='red'>
                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                </div>
            ) : null}
            <div className='userLogo mt-3 ' onClick={openUserProfileSettings}>
                <UserLogin />
            </div>
            {openProfileSettings ? (
                <div className='profile ' onClick={closeUserProfileSettings}>
                    <Profile />
                </div>
            ) : null}
        </div>
    )
}

export default NavBar