import './App.css';
import MovieList from './components/MovieList';
import NavBar  from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';

import './styles/MovieList.css'
import UserLogin from './components/UserLogin';
import Routes from './Router';
function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('avengers');
  const [favourites, setFavourites] = useState([]);

  const GetMovieRequest  = async() => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e1cedc90`
    const response = await fetch(url)
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search)
    }
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = {...favourites, movie}
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

  return (
    <>
    <div className="container-fluid movie-container">
      <div className='row d-flex App'>
        <div className="mt-3 navbar-header">
          <h3><b>Movie App</b></h3>
        </div>
        <div className="mt-3">
          <SearchBox
            SearchValue={searchValue}
            setSearchValue={setSearchValue} />
        </div>
        <div className='favourites mt-3' title='Favourites'>
          <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512" fill='red'>
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        </div>
        <div className='userLogo mt-3'>
          <UserLogin/>
        </div>
      </div>
      <div className='row'>
        <h3>Trending</h3>
      </div>
      <div className="row">
        <MovieList 
        movies= {movies} 
        handleMovieToFavourite = {addFavouriteMovie}/>
      </div>
      <div className='row'>
          <h3>Series</h3>
      </div>
  </div>
  </>
  );
}

export default App;
