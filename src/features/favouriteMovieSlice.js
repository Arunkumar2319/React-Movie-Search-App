import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favouriteMovies: []
}

const favouriteMovieSlice = createSlice({
    name: 'favMovies',
    initialState,
    reducers: {
        addFavouriteMovie: (state, { payload }) => {
            if (state.favouriteMovies.length === 0) {
                state.favouriteMovies.push(payload)
            }
            else {
                state.favouriteMovies = [...state.favouriteMovies, payload]
            }
        },

        removeFavourite: (state, { payload }) => {
            const newFavouriteList = state.favouriteMovies.filter(movie => movie.imdbID !== payload.imdbID)
            state.favouriteMovies = newFavouriteList
        }
    }
})

export const { addFavouriteMovie, removeFavourite } = favouriteMovieSlice.actions;

export default favouriteMovieSlice.reducer;