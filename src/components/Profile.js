import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCredentials } from "../features/loginSlice";
import { useState } from "react";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [credentialDetails, setCredentialDatas] = useState(useSelector((Store) => Store.credentials.credentialDetails));
    console.log("cred", credentialDetails)
    const onClickLogout = () => {
        navigate('/');
        dispatch(setCredentials(null))
    }

    const onClickLogin = () => {
        navigate('/login');
    }

    return(
        <>
            {credentialDetails == null? (
                <ul className="m-2">
                    <li onClick={onClickLogin}>Login</li>
                    <li>Sign up</li>
                </ul>
            ): null}

            {credentialDetails != null ? (
                <ul className="m-2">
                    <li>Profile</li>
                    <li onClick={onClickLogout}>Logout</li>
                </ul>
            ): null}
        </>
    )
}

export default Profile;
