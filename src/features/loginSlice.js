import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    credentialDetails: {}
}

const credentialsSlice = createSlice({
    name: 'credentials',
    initialState,
    reducers: {
        setCredentials : (state, {payload}) => {
            console.log("credential", payload)
            state.credentialDetails = payload 
        }
    }
})

export const {setCredentials} = credentialsSlice.actions;

export default credentialsSlice.reducer;