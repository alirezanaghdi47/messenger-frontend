// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activeChat: null
}

export const chat = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setActiveChat: (state, action) => {
            state.activeChat= action.payload;
        },
        removeActiveChat: (state) => {
            state.activeChat= initialState.activeChat
        },
    },
})

export const {
    setActiveChat ,
    removeActiveChat
} = chat.actions;

export default chat.reducer;