// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token: null,
    expire: 0
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state , action) => {
            state.token = action.payload.token;
            state.expire = action.payload.expire;
        },
        logout: () => initialState
    },
})

export const {
    login,
    logout,
} = auth.actions;

export default auth.reducer;