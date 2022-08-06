import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFecthing: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFecthing = true;
        },
        loginSuccess: (state) => {
            state.isFecthing = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFecthing = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
        },
    },
});
export const { loginStart, loginFailure, loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;