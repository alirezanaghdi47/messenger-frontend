// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    expire: 0
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setSession: (state , action) => {
            state.userId = action.payload.userId;
            state.expire = action.payload.expire;
        },
        unSetSession: () => initialState
    },
})

export const {
    setSession,
    unSetSession,
} = sessionSlice.actions;

export default sessionSlice.reducer;