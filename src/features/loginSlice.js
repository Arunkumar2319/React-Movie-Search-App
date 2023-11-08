import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    credentialDetails: null
}

const credentialsSlice = createSlice({
    name: 'credentials',
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.credentialDetails = payload
        }
    }
})

export const { setCredentials } = credentialsSlice.actions;

export default credentialsSlice.reducer;