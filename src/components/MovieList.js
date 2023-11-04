import { useDispatch } from 'react-redux';

import AddToFavourite from './AddToFavourite';
import '../styles/MovieList.css' 
import { addFavouriteMovie } from '../features/favouriteMovieSlice';

const MovieList = (props) => {
    const favouriteMoviesList = JSON.parse(localStorage.getItem('favourite-movies'));

    const dispatch = useDispatch();

    let favouriteMovieIds = []
    favouriteMoviesList?.forEach(element => {
        favouriteMovieIds.push(element.imdbID)
    });

    return(
        <>
        { props?.movies?.map((movie, index) => 
                <div key={index} className='image-container  d-flex movie-frame justify-content-start p-0 m-3'>                
                    <img src={movie.Poster} alt='movie'></img>                    
                    <div className='overlay d-flex align-items-center justify-content' 
                        onClick={() => dispatch(addFavouriteMovie(movie)) }
                    >
                        <AddToFavourite title={'Add to favourites'}/>
                    </div> 
                    {favouriteMovieIds?.includes(movie.imdbID) ? (
                        <div className='overlay-favourite'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='red'>
                                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                            </svg>
                        </div>
                        ): null
                    }
                </div> 
            )}
        </>
    )
}

export default MovieList 