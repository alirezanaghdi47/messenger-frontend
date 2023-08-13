// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activeCall: null
}

export const voiceCall = createSlice({
    name: 'voiceCall',
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
} = voiceCall.actions;

export default voiceCall.reducer;