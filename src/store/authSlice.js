import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {isLoggedIn: true},
    reducers:{
        logIn: (state)=>{
            state.isLoggedIn = true;
        },
        logOut: (state)=>{
            state.isLoggedIn = false;
        },
    },
})



export default authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;