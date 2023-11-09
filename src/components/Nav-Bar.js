import '../styles/NavBar.css';
import darkTheme from '../images/dark-theme.svg';
import lightTheme from '../images/light-theme.svg';
import favourites from '../images/favourites.svg'
import userLogo from '../images/userLogo.svg'

const NavBar = () => {
    return (
        <>
            <div className="row">
                <div className='container'>
                    <div>
                        <h3 className="header" ><b>Movie App</b></h3>
                        <input
                            type="text"
                            className='form-control search-box'
                            placeholder='Search...'
                        />
                    </div>
                    <div className='flex-container'>
                        <div className='flex-items'>
                            {/* <img className="icon-size" src={darkTheme} alt='dark theme'/> */}
                            <img className="icon-size m-2" src={favourites} alt='favourites' />
                            {/* <img className="icon-size m-2" src={lightTheme} alt='light theme' /> */}
                            <img className="icon-size m-2" src={userLogo} alt='logo' />
                        </div>
                    </div>
                </div>
                <div className='row m-4'>
                    <input className='form-control' />
                </div>
            </div>
        </>
    )
}

export default NavBar;