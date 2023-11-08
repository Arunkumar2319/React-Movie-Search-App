import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    moviesList: []
}

const movieSlice = createSlice({
    name: 'moviesList',
    initialState
})

export default movieSlice.reducer;