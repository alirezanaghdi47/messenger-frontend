// libraries
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    activeContact: null
}

export const contact = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        setActiveContact: (state, action) => {
            state.activeContact= action.payload;
        },
        removeActiveContact: (state) => {
            state.activeContact= initialState.activeContact
        },
    },
})

export const {
    setActiveContact , removeActiveContact
} = contact.actions;

export default contact.reducer;