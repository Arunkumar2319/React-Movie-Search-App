import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import '../styles/MovieList.css'

import MovieList from './MovieList';
import NavBar from './Navbar';
import AppLoader from '../AppLoader';

const Home = () => {
    let closeProfileSettings = false
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('avengers');
    const [isLoading, setLoading] = useState(false);
    // const [stylesForTheme, setStylesForTheme] = useState({
    //     backgroundColor: "#141414",
    //     color: "white",
    // });

    const containerElement = useRef(); 

    const favouritesFromState = useSelector((store) => store.favourites?.favouriteMovies);
    const theme = useSelector((store) => store.theme?.themeStyle);
    console.log("theme", theme)

    useEffect(() => {
        console.log("check")
    }, [favouritesFromState])

    useEffect(() => {
        if(theme === "dark"){
            containerElement.current.style.backgroundColor = "#141414 "
        }
        else{
            containerElement.current.style.backgroundColor = "white"
        }
    }, [theme])

    const GetMovieRequest = useCallback( async () => {
        setLoading(true);
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e1cedc90`  
        const response = await fetch(url)
        const responseJSON = await response.json();

        if (responseJSON.Search) {
            setLoading(false);
            setMovies(responseJSON.Search);
        }
    }, [searchValue])

    const handleProfileSettings = () => {
        closeProfileSettings = true
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        GetMovieRequest(searchValue)
    }, [searchValue, GetMovieRequest])

    // const changeStyleBasedOnTheme = () => {
    //     containerElement.current.style.backgroundColor = "white"
    // }

    return (
        <div className="container-fluid movie-container" ref={containerElement}>
            {movies.length === 0 && isLoading ? ( 
                <AppLoader />
                ) : null}
            <div className='row App' >
                <NavBar
                    SearchValue={searchValue}
                    setSearchValue={setSearchValue}
                    closeProfileSettings={closeProfileSettings} />
            </div>
            <div className='row'>
                <h3>Trending</h3>
            </div>
            <div className="row" onClick={handleProfileSettings} >
                <MovieList
                    movies={movies} />
            </div>
        </div>
    )
}

export default Home;