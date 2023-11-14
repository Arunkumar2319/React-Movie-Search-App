import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themeStyle:  "dark"
}

const themeSwitchSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, { payload }) => {
            state.themeStyle = payload
        }
    }
})

export const { setTheme } = themeSwitchSlice.actions;

export default themeSwitchSlice.reducer;