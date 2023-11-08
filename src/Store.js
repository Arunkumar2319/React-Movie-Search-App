import { configureStore } from "@reduxjs/toolkit";

import favouriteMovieSlice from "./features/favouriteMovieSlice";
import moviesSlice from "./features/moviesListing";
import credentialsSlice from "./features/loginSlice";

export const Store = configureStore({
    reducer: {
        credentials: credentialsSlice,
        movieList: moviesSlice,
        favourites: favouriteMovieSlice
    }
})