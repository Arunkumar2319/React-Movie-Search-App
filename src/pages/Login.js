import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import '../styles/Login.css'

import img from '../images/BannerImg.jpg'
import { setCredentials } from '../features/loginSlice';
import { Url } from '../environment/environment';

const Login = () => {
    const navigate = new useNavigate();
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const dispatch = useDispatch();

    const [inputFields, setInputFields] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isValidated, setValidation] = useState(false);

    // Function to handle input change event
    const handleInputChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value })
    };

    const validateUserData = (event) => {
        event.preventDefault();
        const error = validateValues(inputFields);
        if (Object.keys(error).length !== 0) {
            setErrors(error)
        }
        else {
            GetLoginRequest();
        }
    }

    // Field level validations 
    const validateValues = (inputValues) => {
        let errors = {}
        if (inputValues.email === '') {
            errors.email = 'Email is required';
        }
        if (inputValues.email && !emailRegex.test(inputValues.email)) {
            errors.email = 'Please enter a valid email';
        }
        if (inputValues.password === '') {
            errors.password = 'Password is required';
        }
        if (inputValues.password && inputValues.password.length < 8) {
            errors.password = 'Minimum 8 characters are required';
        }
        return errors;
    };

    // Async function which creates request
    const GetLoginRequest = async () => {
        const response = await fetch(Url + 'login', {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                email: inputFields.email,
                password: inputFields.password
            })
        })
        const responseJSON = await response.json();
        if (responseJSON?.error) {
            let errorMsg = {
                serverErrorMsg: responseJSON.message
            }
            setErrors(errorMsg)
        }
        else {
            setErrors({})
            setValidation(true);
            dispatch(setCredentials(responseJSON));
        }
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isValidated) {
            onSubmit();
        }
    }, [errors, isValidated]);


    const onSubmit = () => {
        navigate('/home');
    };

    const navigateToHomePage = () => {
        navigate('/')
    }

    return (
        <>
            <div>
                <img className='bannerImg' src={img} alt='movie'></img>
                <div className='card'>
                    <div className='container'>
                        <form onSubmit={validateUserData}>
                            <div className='main-header
                            '>
                                <h3 ><b>Movie App</b></h3>
                            </div>
                            <div className='row'>
                                <label className='m-2'>Email</label>
                            </div>
                            <div className='row m-2'>
                                <input
                                    name='email'
                                    className='form-control field'
                                    placeholder='Enter Email'
                                    value={inputFields.email}
                                    onChange={handleInputChange}
                                >
                                </input>
                            </div>
                            {errors.email ? (
                                <div className='row'>
                                    <span className='text-danger'>{errors.email}</span>
                                </div>
                            ) : null}
                            <div className='row'>
                                <label className='m-2'>Password</label>
                            </div>
                            <div className='row m-2'>
                                <input type='password' name='password' className='form-control field' placeholder='Enter Password' onChange={(event) => handleInputChange(event)}></input>
                            </div>
                            {errors.password ? (
                                <div className='row'>
                                    <span className='text-danger'>{errors.password}</span>
                                </div>
                            ) : null}
                            {errors.serverErrorMsg ? (
                                <div className='row'>
                                    <span className='text-danger'>{errors.serverErrorMsg}</span>
                                </div>
                            ) : null}
                            <div className='row m-2'>
                                <button type='submit' className='btn btn-primary loginBtn'>Login</button>
                            </div>
                            <div className='row m-2'>
                                <button type='button' className='btn btn-danger cancelBtn' onClick={navigateToHomePage}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;