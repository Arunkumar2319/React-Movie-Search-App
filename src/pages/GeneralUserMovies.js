import { useCallback, useEffect, useState } from 'react';

import '../styles/MovieList.css'
import NavBar from '../components/Navbar';
import AppLoader from '../AppLoader';
import { movieApiUrl, apikey } from '../environment/environment'

const GeneralUserMovies = () => {
    let closeProfileSettings = false
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('avengers');
    const [isLoading, setLoading] = useState(false);

    const GetMovieRequest = useCallback( async () => {
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

    return (
        <div className="container-fluid movie-container">
            {movies.length === 0 && isLoading ? (
                <AppLoader />
            ) : null}
            <div className='row App' onClick={handleProfileSettings}>
                <NavBar
                    SearchValue={searchValue}
                    setSearchValue={setSearchValue}
                    closeProfileSettings={closeProfileSettings} />
            </div>
            <div className='row'>
                <h3>Trending</h3>
            </div>
            <div className="row" >
                {movies?.map((movie, index) =>
                    <div key={index} className='image-container  d-flex movie-frame justify-content-start p-0 m-3'>
                        <img src={movie.Poster} alt='movie'></img>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GeneralUserMovies;