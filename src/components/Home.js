import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import '../styles/MovieList.css'

import MovieList from './MovieList';
import NavBar from './Navbar';
import AppLoader from '../AppLoader';
import { movieApiUrl, apikey } from '../environment/environment';

const Home = () => {
    let closeProfileSettings = false
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('avengers');
    const [isLoading, setLoading] = useState(false);

    const containerElement = useRef();
    const headerElement = useRef();

    const theme = useSelector((store) => store.theme?.themeStyle);

    useEffect(() => {
        if (theme === "dark") {
            containerElement.current.style.backgroundColor = "#141414 "
            headerElement.current.style.color = "white"
        }
        else {
            containerElement.current.style.backgroundColor = "white"
            headerElement.current.style.color = "#141414"
        }
    }, [theme])

    const GetMovieRequest = useCallback(async () => {
        setLoading(true);
        const url = movieApiUrl + `${searchValue}` + apikey
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
                <h3 ref={headerElement}>Trending</h3>
            </div>
            <div className="row" onClick={handleProfileSettings} >
                <MovieList
                    movies={movies} />
            </div>
        </div>
    )
}

export default Home;