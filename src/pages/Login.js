import bannerImage from '../images/Cinema_Banner.jpeg'
import img from '../images/BannerImg.jpg'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Login = () => {
    const navigate = new useNavigate();
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    const validateUserData = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setValidation(true);
    }


    const [inputFields, setInputFields] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isValidated, setValidation] = useState(false);

    const onSubmit = () => {
        navigate('/home')
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isValidated) {
            onSubmit();
        }
    }, [errors]);

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.email == '') {
            errors.email = 'Email is required';
        }
        if (inputValues.email && !emailRegex.test(inputValues.email)) {
            errors.email = 'Please enter a valid email';
        }
        if (inputValues.password == '') {
            errors.password = 'Password is required';
        }
        if (inputValues.password && inputValues.password.length < 8) {
            errors.password = 'Minimum 8 characters are required';
        }
        return errors;
    };

    const handleInputChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value })
    };

    return (
        <>
            <div>
                <img className='bannerImg' src={img} alt='movie'></img>
                <div className='card'>
                    <div className='container m-4'>
                        <form onSubmit={validateUserData}>
                            <div className='header'>
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
                            <div className='row m-2'>
                                <button className='btn btn-primary loginBtn'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;