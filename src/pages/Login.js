import bannerImage from '../images/Cinema_Banner.jpeg'
import img from '../images/BannerImg.jpg'
import '../styles/Login.css'

const Login = () => {
    return(
        <>
        <div>
            <img className='bannerImg' src={img} alt='movie'></img>
            <div className='card'>
                <div className='container m-4'>
                    <h3><b>Movie App</b></h3>

                    <div className='row'>
                        <label className='m-2'>Email</label>
                    </div>
                    <div className='row m-2'>
                        <input type='email' className='form-control field'></input>
                    </div>
                    <div className='row m-2'>
                        <button className='btn btn-primary'>Login</button>
                    </div>
                </div>                
            </div>
        </div>
        </>
    )
}

export default Login;