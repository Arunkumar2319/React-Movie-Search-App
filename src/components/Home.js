import { useEffect, useState } from 'react';

import '../styles/MovieList.css'
import MovieList from './MovieList';
import NavBar from './Navbar';
import AppLoader from '../AppLoader';

const Home = () => {
    
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('avengers');
    const [isLoading, setLoading] = useState(false);

    const GetMovieRequest = async () => {
        setLoading(true);
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e1cedc90`
        const response = await fetch(url)
        const responseJSON = await response.json();

        if (responseJSON.Search) {
            setLoading(false);
            setMovies(responseJSON.Search);
        }
    }
    
    useEffect(() => {
        GetMovieRequest(searchValue)
    }, [searchValue])

    return (
        <div className="container-fluid movie-container">
            {movies.length === 0 && isLoading ? (
                <AppLoader/>
            ): null}
            <div className='row App'>
            <NavBar 
                SearchValue={searchValue}
                setSearchValue={setSearchValue}/>
            </div>
            <div className='row'>
                <h3>Trending</h3>
            </div>
            <div className="row">   
                <MovieList
                    movies={movies}/>
            </div>
        </div>
    )
}

export default Home;