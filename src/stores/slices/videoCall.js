// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activeCall: null
}

export const videoCall = createSlice({
    name: 'videoCall',
    initialState,
    reducers: {
        setActiveCall: (state, action) => {
            state.activeCall= action.payload;
        },
        removeActiveCall: (state) => {
            state.activeCall= initialState.activeCall
        },
    },
})

export const {
    setActiveCall ,
    removeActiveCall
} = videoCall.actions;

export default videoCall.reducer;