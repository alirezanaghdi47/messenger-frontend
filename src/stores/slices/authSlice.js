// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token: null,
    expire: 0
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state , action) => {
            state.token = action.payload.token;
            state.expire = action.payload.expire;
        },
        signOut: () => initialState
    },
})

export const {
    signIn,
    signOut,
} = authSlice.actions;

export default authSlice.reducer;