import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import '../styles/MovieList.css'
import MovieList from './MovieList';
import UserLogin from './UserLogin';
import SearchBox from './SearchBox';
import NavBar from './Navbar';

const Home = () => {
    const navigate = useNavigate(); 
    const navigateToFavouritesPage = () => { 
        navigate('/favourites') 
    }
    
    let newFavouriteList = []
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('avengers');
    const [favourites, setFavourites] = useState([]);

    const GetMovieRequest = async () => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e1cedc90`
        const response = await fetch(url)
        const responseJSON = await response.json();

        if (responseJSON.Search) {
            setMovies(responseJSON.Search)
        }
    }

    const addFavouriteMovie = (movie) => {
        if(favourites.length == 0){
            newFavouriteList.push(movie)
        }
        else{    
            
            newFavouriteList = [...favourites,movie]
        }
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList)
    }

    const saveToLocalStorage = (movieList) => {
        localStorage.setItem('favourite-movies', JSON.stringify(movieList))
    }
    
    useEffect(() => {
        GetMovieRequest(searchValue)
    }, [searchValue])

    useEffect(() => {
        const favouriteMovies = JSON.parse(localStorage.getItem('favourite-movies'))
        setFavourites(favouriteMovies)
    }, [])

    useEffect(() => {
        setFavourites([])
    },[])

    return (
        <div className="container-fluid movie-container">
            <div className='row'>
            <NavBar 
                SearchValue={searchValue}
                setSearchValue={setSearchValue}/>
            </div>
            <div className='row'>
                <h3>Trending</h3>
            </div>
            <div className="row">
                <MovieList
                    movies={movies}
                    handleMovieToFavourite={addFavouriteMovie} />
            </div>
        </div>
    )
}

export default Home;