import bannerImage from '../images/Cinema_Banner.jpeg'
import img from '../images/BannerImg.jpg'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/loginSlice';

const Login = (props) => {
    const navigate = new useNavigate();
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const dispatch = useDispatch();
    let errorsMsg = {};

    const validateUserData = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        // setValidation(true);
        GetLoginRequest();
    }

    const GetLoginRequest = async () => {
        console.log("req dataas", inputFields)
        const url = 'http://localhost:8080/api/login'+ inputFields;
        console.log("url created", url)

        try{
            const response = await fetch('http://localhost:8080/api/login', {
                "method": "POST",
                "body": JSON.stringify({
                    email: inputFields.email,
                    password: inputFields.password
                })
            })
            const responseJSON = await response.json();
            if (responseJSON?.error) {
                console.log("login creds", responseJSON)   
                errorsMsg.serverErrorMsg = responseJSON.message             
            }
        }
        catch(error){
            console.log(error)
        }


        // const response = await fetch('http://localhost:8080/api/login', {
        //     "method": "POST",
        //     "body": JSON.stringify({
        //         email: inputFields.email,
        //         password: inputFields.password
        //     })
        // }).then(response => response.json()).then(response => 
        //         console.log("response got finally", response)
        //     )
        // console.log("response", response)
        // const responseJSON = await response.json();

        // if (responseJSON) {
        //     console.log("login creds", responseJSON)
        // }
    }
    
    const [inputFields, setInputFields] = useState({
        email: '',
        password: '',
    });
    
    const [errors, setErrors] = useState({});
    const [isValidated, setValidation] = useState(false);

    const onSubmit = () => {
        console.log("final", inputFields);
        navigate('/home');
        console.log("url", props.apiUrl)
        dispatch(setCredentials(inputFields));
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isValidated) {
            onSubmit();
        }
    }, [errors]);

    const validateValues = (inputValues) => {
        console.log("enterd value", inputValues)
        if (inputValues.email == '') {
            errorsMsg.email = 'Email is required';
        }
        if (inputValues.email && !emailRegex.test(inputValues.email)) {
            errorsMsg.email = 'Please enter a valid email';
        }
        if (inputValues.password == '') {
            errorsMsg.password = 'Password is required';
        }
        if (inputValues.password && inputValues.password.length < 8) {
            errorsMsg.password = 'Minimum 8 characters are required';
        }
        console.log("err", errorsMsg)
        return errorsMsg;
    };

    const handleInputChange = (e) => {
        console.log("form value", e)
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
                            {errorsMsg.email ? (
                                <div className='row'>
                                    <span className='text-danger'>{errorsMsg.email}</span>
                                </div>
                            ) : null}
                            <div className='row'>
                                <label className='m-2'>Password</label>
                            </div>
                            <div className='row m-2'>
                                <input type='password' name='password' className='form-control field' placeholder='Enter Password' onChange={(event) => handleInputChange(event)}></input>
                            </div>
                            {errorsMsg.password ? (
                                <div className='row'>
                                    <span className='text-danger'>{errorsMsg.password}</span>
                                </div>
                            ) : null}
                            <div className='row m-2'>
                                <button className='btn btn-primary loginBtn'>Login</button>
                            </div>
                            {errorsMsg.serverErrorMsg ? (
                                <div className='row'>
                                    <span className='text-danger'>{errorsMsg.serverErrorMsg}</span>
                                </div>
                            ) : null}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;