import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCredentials } from "../features/loginSlice";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [credentialDetails] = useState(useSelector((Store) => Store.credentials.credentialDetails));
    const onClickLogout = () => {
        navigate('/');
        dispatch(setCredentials(null))
    }

    const onClickLogin = () => {
        navigate('/login');
    }

    return (
        <>
            {credentialDetails == null ? (
                <ul className="m-2">
                    <li onClick={onClickLogin}>Login</li>
                    <li>Sign up</li>
                </ul>
            ) : null}

            {credentialDetails != null ? (
                <ul className="m-2">
                    <li>Profile</li>
                    <li onClick={onClickLogout}>Logout</li>
                </ul>
            ) : null}
        </>
    )
}

export default Profile;
