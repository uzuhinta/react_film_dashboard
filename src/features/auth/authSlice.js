const { createSlice } = require('@reduxjs/toolkit');

/** 
status: 'idle' | 'loading' | 'succeeded' | 'failed',
error: string | null
*/
const initialState = {
    status: 'idle',
    error: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        googleSignInStart: (state) => {
            state.status = 'loading';
        },
        googleSignInSuccess: (state, action) => {
            state.status = 'success';
            state.user = action.payload;
        },
        googleSignInError: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        googleSignOut: (state) => {
            state.error = null;
            state.user = null;
            state.status = 'idle';
        },
    },
});

export const {
    googleSignInStart,
    googleSignInError,
    googleSignInSuccess,
    googleSignOut,
} = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
