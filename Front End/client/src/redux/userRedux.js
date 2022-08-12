import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        isLoading: true,
        error: false
    },

    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFail: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // them register
        regiStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        registSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            //state.currentUser = action.payload;
        },
        registFail: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
})

export const { loginStart, loginSuccess, loginFail, regiStart, registFail, registSuccess } = userSlice.actions;
export default userSlice.reducer;