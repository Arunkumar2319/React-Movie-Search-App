import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import '../styles/MovieList.css';
import '../styles/MovieList.css';

import AddToFavourite from "../components/AddToFavourite";
import { removeFavourite } from '../features/favouriteMovieSlice';


const FavoriteMovies = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navigateToHomePage = () => {
        navigate('/home')
    }
    const favouritesFromState = useSelector((store) => store.favourites?.favouriteMovies)

    return (
        <>
            <div className="container-fluid movie-container">
                <div className='row d-flex App'>
                    <div className="mt-4 mouse-pointer" onClick={navigateToHomePage}>
                        <h5><b>Home</b></h5>
                    </div>
                </div>
                <div className="row">
                    <h3><b>Favourites</b></h3>
                </div>
                <div className='row'>
                    {favouritesFromState?.map((movie, index) =>
                        <div key={index} className='image-container  d-flex movie-frame justify-content-start p-0 m-3'>
                            <img src={movie.Poster} alt='movie'></img>
                            <div className='overlay d-flex align-items-center justify-content' onClick={() => dispatch(removeFavourite(movie))}>
                                <AddToFavourite
                                    title={'Remove from favourites'} />
                            </div>
                            <div className='overlay-favourite align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='red'>
                                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FavoriteMovies;