import { configureStore } from "@reduxjs/toolkit";
import favouriteMovieSlice  from "./features/favouriteMovieSlice";
import moviesSlice from "./features/moviesListing";

export const Store = configureStore({
    reducer: {
        movieList: moviesSlice,
        favourites: favouriteMovieSlice 
    }
})